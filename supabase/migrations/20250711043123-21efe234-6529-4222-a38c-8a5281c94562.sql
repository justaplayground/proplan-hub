
-- Create enum types
CREATE TYPE user_role AS ENUM ('admin', 'member', 'viewer');
CREATE TYPE board_visibility AS ENUM ('private', 'workspace', 'public');
CREATE TYPE card_priority AS ENUM ('low', 'medium', 'high', 'urgent');

-- Create profiles table for additional user data
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create boards table
CREATE TABLE boards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  visibility board_visibility DEFAULT 'private',
  background_color TEXT DEFAULT '#0F172A',
  created_by UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create board members table for access control
CREATE TABLE board_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role user_role DEFAULT 'member',
  invited_by UUID REFERENCES profiles(id),
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(board_id, user_id)
);

-- Create lists table
CREATE TABLE lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  position INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create labels table
CREATE TABLE labels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  color TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cards table
CREATE TABLE cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  list_id UUID REFERENCES lists(id) ON DELETE CASCADE,
  position INTEGER NOT NULL,
  due_date TIMESTAMP WITH TIME ZONE,
  priority card_priority DEFAULT 'medium',
  assigned_to UUID REFERENCES profiles(id),
  created_by UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create card labels junction table
CREATE TABLE card_labels (
  card_id UUID REFERENCES cards(id) ON DELETE CASCADE,
  label_id UUID REFERENCES labels(id) ON DELETE CASCADE,
  PRIMARY KEY (card_id, label_id)
);

-- Create subtasks table
CREATE TABLE subtasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  card_id UUID REFERENCES cards(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  position INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create comments table
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  card_id UUID REFERENCES cards(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create attachments table
CREATE TABLE attachments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  card_id UUID REFERENCES cards(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  uploaded_by UUID REFERENCES profiles(id) ON DELETE CASCADE,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create activity log table
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  card_id UUID REFERENCES cards(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE boards ENABLE ROW LEVEL SECURITY;
ALTER TABLE board_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE labels ENABLE ROW LEVEL SECURITY;
ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE card_labels ENABLE ROW LEVEL SECURITY;
ALTER TABLE subtasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON profiles FOR SELECT USING (TRUE);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for boards
CREATE POLICY "Users can view boards they are members of" ON boards FOR SELECT 
USING (
  auth.uid() IN (
    SELECT user_id FROM board_members WHERE board_id = boards.id
  ) OR created_by = auth.uid()
);

CREATE POLICY "Users can create boards" ON boards FOR INSERT WITH CHECK (auth.uid() = created_by);
CREATE POLICY "Board admins can update boards" ON boards FOR UPDATE 
USING (
  auth.uid() IN (
    SELECT user_id FROM board_members 
    WHERE board_id = boards.id AND role = 'admin'
  ) OR created_by = auth.uid()
);

-- RLS Policies for board_members
CREATE POLICY "Users can view board members for boards they belong to" ON board_members FOR SELECT
USING (
  auth.uid() IN (
    SELECT user_id FROM board_members bm2 WHERE bm2.board_id = board_members.board_id
  )
);

CREATE POLICY "Board admins can manage members" ON board_members FOR ALL
USING (
  auth.uid() IN (
    SELECT user_id FROM board_members 
    WHERE board_id = board_members.board_id AND role = 'admin'
  )
);

-- RLS Policies for lists
CREATE POLICY "Users can view lists for boards they are members of" ON lists FOR SELECT
USING (
  auth.uid() IN (
    SELECT user_id FROM board_members WHERE board_id = lists.board_id
  )
);

CREATE POLICY "Board members can manage lists" ON lists FOR ALL
USING (
  auth.uid() IN (
    SELECT user_id FROM board_members 
    WHERE board_id = lists.board_id AND role IN ('admin', 'member')
  )
);

-- RLS Policies for cards
CREATE POLICY "Users can view cards for boards they are members of" ON cards FOR SELECT
USING (
  auth.uid() IN (
    SELECT bm.user_id FROM board_members bm
    JOIN lists l ON l.board_id = bm.board_id
    WHERE l.id = cards.list_id
  )
);

CREATE POLICY "Board members can manage cards" ON cards FOR ALL
USING (
  auth.uid() IN (
    SELECT bm.user_id FROM board_members bm
    JOIN lists l ON l.board_id = bm.board_id
    WHERE l.id = cards.list_id AND bm.role IN ('admin', 'member')
  )
);

-- Similar policies for other tables (subtasks, comments, etc.)
CREATE POLICY "Users can view subtasks for accessible cards" ON subtasks FOR SELECT
USING (
  auth.uid() IN (
    SELECT bm.user_id FROM board_members bm
    JOIN lists l ON l.board_id = bm.board_id
    JOIN cards c ON c.list_id = l.id
    WHERE c.id = subtasks.card_id
  )
);

CREATE POLICY "Board members can manage subtasks" ON subtasks FOR ALL
USING (
  auth.uid() IN (
    SELECT bm.user_id FROM board_members bm
    JOIN lists l ON l.board_id = bm.board_id
    JOIN cards c ON c.list_id = l.id
    WHERE c.id = subtasks.card_id AND bm.role IN ('admin', 'member')
  )
);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add update triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_boards_updated_at BEFORE UPDATE ON boards
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lists_updated_at BEFORE UPDATE ON lists
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cards_updated_at BEFORE UPDATE ON cards
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
