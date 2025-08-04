import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { CTA } from "@/components/landing/CTA";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "@/components/ui/animations";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      <Hero />
      <Features />
      <CTA />
    </motion.div>
  );
};

export default Index;
