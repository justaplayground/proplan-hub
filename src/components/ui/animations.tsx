import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Fade in animation variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

// Stagger children animation
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Slide in from left
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

// Slide in from right
export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

// Scale in animation
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

// Bounce in animation
export const bounceInVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200
    }
  }
};

// Floating animation
export const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

// Pulse animation
export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

// Gradient text animation
export const gradientTextVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear" as const
    }
  }
};

// Hover animations
export const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const
    }
  },
  tap: {
    scale: 0.95
  }
};

// Card hover animations
export const cardHoverVariants = {
  initial: { 
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
    }
  }
};

// Reusable animated components
export const AnimatedDiv = ({ 
  children, 
  variants, 
  className = "", 
  ...props 
}: {
  children: ReactNode;
  variants: Variants;
  className?: string;
  [key: string]: unknown;
}) => (
  <motion.div
    variants={variants}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedCard = ({ 
  children, 
  className = "", 
  ...props 
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) => (
  <motion.div
    variants={cardHoverVariants}
    initial="initial"
    whileHover="hover"
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedButton = ({ 
  children, 
  className = "", 
  ...props 
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) => (
  <motion.button
    variants={hoverVariants}
    whileHover="hover"
    whileTap="tap"
    className={className}
    {...props}
  >
    {children}
  </motion.button>
);

// Scroll-triggered animations
export const scrollRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: {
      duration: 0.6
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Text reveal animation
export const textRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Icon animation
export const iconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 200
    }
  }
};

// List item animation
export const listItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Page transition
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn" as const
    }
  }
}; 