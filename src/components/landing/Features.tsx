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
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInVariants,
  staggerContainerVariants,
  scaleInVariants,
  iconVariants,
} from "@/components/ui/animations";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Layers,
    title: "Kanban Boards",
    description: "Visualize your workflow with drag-and-drop cards and customizable lists.",
    color: "text-blue-500",
  },
  {
    icon: BarChart3,
    title: "Gantt Charts",
    description: "Track project timelines and dependencies with interactive Gantt views.",
    color: "text-green-500",
  },
  {
    icon: Calendar,
    title: "Calendar View",
    description: "See all your tasks and deadlines in a beautiful calendar layout.",
    color: "text-purple-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time updates, comments, and mentions keep everyone in sync.",
    color: "text-orange-500",
  },
  {
    icon: Target,
    title: "Subtasks & Hierarchy",
    description: "Break down complex projects into manageable subtasks and track progress.",
    color: "text-red-500",
  },
  {
    icon: Zap,
    title: "Automation Rules",
    description: "Set up smart rules to automate repetitive tasks and workflows.",
    color: "text-yellow-500",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Monitor time spent on tasks and generate detailed reports.",
    color: "text-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Smart Notifications",
    description: "Stay updated with customizable notifications and activity feeds.",
    color: "text-pink-500",
  },
];

export const Features = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16 space-y-4"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-foreground"
            variants={fadeInVariants}
          >
            Everything you need to
            <motion.span
              className="block bg-gradient-primary bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              manage projects
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            From simple task lists to complex project timelines, ProPlan adapts to your workflow
            with powerful features designed for modern teams.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="p-6 hover:shadow-hover transition-all duration-smooth bg-gradient-card border-0">
                <div className="space-y-4">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5 flex items-center justify-center`}
                    variants={iconVariants}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              size="lg"
              className="group"
              onClick={() => navigate("/features")}
            >
              Explore All Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
