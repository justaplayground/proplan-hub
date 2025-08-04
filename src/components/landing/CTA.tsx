import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInVariants,
  staggerContainerVariants,
  floatingVariants,
} from "@/components/ui/animations";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-header relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            variants={fadeInVariants}
          >
            Ready to transform your
            <motion.span
              className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              project management?
            </motion.span>
          </motion.h2>

          <motion.p className="text-xl text-white/80 max-w-2xl mx-auto" variants={fadeInVariants}>
            Join thousands of teams already using ProPlan to deliver projects faster, collaborate
            better, and achieve their goals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="hero"
                size="xl"
                className="group bg-white text-primary hover:bg-white/90"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16 text-white/80"
            variants={staggerContainerVariants}
          >
            <motion.div
              className="flex items-center justify-center gap-3"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div variants={floatingVariants} animate="animate">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              </motion.div>
              <span>14-day free trial</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-3"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div variants={floatingVariants} animate="animate" transition={{ delay: 0.2 }}>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              </motion.div>
              <span>No credit card required</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-3"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div variants={floatingVariants} animate="animate" transition={{ delay: 0.4 }}>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              </motion.div>
              <span>Cancel anytime</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
