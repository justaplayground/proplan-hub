-- Fix infinite recursion in board_members RLS policies
-- Drop existing problematic policies
DROP POLICY IF EXISTS "Board admins can manage members" ON public.board_members;
DROP POLICY IF EXISTS "Users can view board members for boards they belong to" ON public.board_members;

-- Create security definer functions to avoid recursion
CREATE OR REPLACE FUNCTION public.is_board_admin(_board_id uuid, _user_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.board_members 
    WHERE board_id = _board_id 
    AND user_id = _user_id 
    AND role = 'admin'
  );
$$;

CREATE OR REPLACE FUNCTION public.is_board_member(_board_id uuid, _user_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.board_members 
    WHERE board_id = _board_id 
    AND user_id = _user_id
  );
$$;

-- Create new policies using the security definer functions
CREATE POLICY "Board admins can manage members" 
ON public.board_members 
FOR ALL 
USING (public.is_board_admin(board_id, auth.uid()));

CREATE POLICY "Users can view board members for boards they belong to" 
ON public.board_members 
FOR SELECT 
USING (public.is_board_member(board_id, auth.uid()));

CREATE POLICY "Users can insert themselves as board members" 
ON public.board_members 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);