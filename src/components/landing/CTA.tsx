import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInVariants, staggerContainerVariants } from "@/components/ui/animations";

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonVariant?: "default" | "secondary" | "outline";
  secondaryButtonVariant?: "default" | "secondary" | "outline";
  footerText?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  className?: string;
}

const CTA = ({
  title = "Ready to Get Started?",
  description = "Join thousands of teams who trust ProPlan for their project management needs.",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "Contact Sales",
  primaryButtonVariant = "default",
  secondaryButtonVariant = "outline",
  footerText = "No credit card required • 14-day free trial • Cancel anytime",
  className = "bg-gradient-to-r from-blue-600 to-cyan-600",
  primaryTextColor = "text-white",
  secondaryTextColor = "text-blue-100",
}: CTAProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container px-4 mx-auto text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className={`text-3xl md:text-4xl font-bold ${primaryTextColor}`}
            variants={fadeInVariants}
          >
            {title}
          </motion.h2>
          <motion.p className={`text-xl ${secondaryTextColor}`} variants={fadeInVariants}>
            {description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant={primaryButtonVariant} className="group">
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant={secondaryButtonVariant}>
                {secondaryButtonText}
              </Button>
            </motion.div>
          </motion.div>
          {footerText && (
            <motion.p className={`text-sm ${secondaryTextColor}`} variants={fadeInVariants}>
              {footerText}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
