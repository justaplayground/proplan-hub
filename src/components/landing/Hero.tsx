import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { motion } from "framer-motion";
import { 
  fadeInVariants, 
  slideInLeftVariants, 
  slideInRightVariants, 
  floatingVariants,
  pulseVariants,
  staggerContainerVariants
} from "@/components/ui/animations";
// import heroImage from "@/assets/hero-image-3.png";


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-header overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            variants={slideInLeftVariants}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm"
              variants={fadeInVariants}
            >
              <motion.div
                variants={pulseVariants}
                animate="animate"
              >
                <Zap className="w-4 h-4" />
              </motion.div>
              <span>Modern Project Management</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              variants={fadeInVariants}
            >
              Organize
              <motion.span 
                className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Everything
              </motion.span>
              <span className="block">Beautifully</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 max-w-2xl"
              variants={fadeInVariants}
            >
              ProPlan transforms chaos into clarity. Manage projects, collaborate with teams, 
              and achieve your goals with our intuitive Kanban boards, Gantt charts, and real-time updates.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero" size="xl" className="group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-8 text-white/60 text-sm"
              variants={fadeInVariants}
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free forever plan</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-4 h-4 text-blue-400" />
                <span>Unlimited team members</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="relative"
            variants={slideInRightVariants}
          >
            <motion.div 
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-hover duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={heroImage} 
                alt="ProPlan Dashboard Preview" 
                className="rounded-lg shadow-card w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-hover"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium">Task Completed</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 right-16 bg-white rounded-lg p-4 shadow-hover"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-sm font-medium">Team Progress</div>
                    <div className="text-xs text-muted-foreground">85% Complete</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};