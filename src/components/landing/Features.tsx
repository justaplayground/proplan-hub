import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  Calendar, 
  Users, 
  Zap, 
  Clock, 
  MessageSquare,
  Target,
  Layers,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Kanban Boards",
    description: "Visualize your workflow with drag-and-drop cards and customizable lists.",
    color: "text-blue-500"
  },
  {
    icon: BarChart3,
    title: "Gantt Charts",
    description: "Track project timelines and dependencies with interactive Gantt views.",
    color: "text-green-500"
  },
  {
    icon: Calendar,
    title: "Calendar View",
    description: "See all your tasks and deadlines in a beautiful calendar layout.",
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time updates, comments, and mentions keep everyone in sync.",
    color: "text-orange-500"
  },
  {
    icon: Target,
    title: "Subtasks & Hierarchy",
    description: "Break down complex projects into manageable subtasks and track progress.",
    color: "text-red-500"
  },
  {
    icon: Zap,
    title: "Automation Rules",
    description: "Set up smart rules to automate repetitive tasks and workflows.",
    color: "text-yellow-500"
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Monitor time spent on tasks and generate detailed reports.",
    color: "text-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Smart Notifications",
    description: "Stay updated with customizable notifications and activity feeds.",
    color: "text-pink-500"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything you need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              manage projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple task lists to complex project timelines, ProPlan adapts to your workflow 
            with powerful features designed for modern teams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-6 hover:shadow-hover transition-all duration-smooth hover:-translate-y-1 bg-gradient-card border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5 flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="default" size="lg" className="group">
            Explore All Features
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};