import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigation } from "@/hooks/use-navigation";
import { motion } from "framer-motion";
import {
  fadeInVariants,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
} from "@/components/ui/animations";

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isActive, currentPath } = useNavigation();

  return (
    <motion.header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-4"
          variants={slideInLeftVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 duration-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ProPlan.Hub
            </motion.h1>
          </motion.div>
          {/* {currentPath !== "/" && (
            <motion.div
              className="hidden sm:flex items-center space-x-1 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>/</span>
              <span className="font-medium text-foreground capitalize">
                {currentPath.slice(1) || "home"}
              </span>
            </motion.div>
          )} */}
        </motion.div>
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInVariants}>
            <Button
              variant={isActive("/features") ? "default" : "ghost"}
              onClick={() => navigate("/features")}
              className={`text-sm font-medium transition-colors ${
                isActive("/features")
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:text-white"
              }`}
            >
              Features
            </Button>
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <Button
              variant={isActive("/pricing") ? "default" : "ghost"}
              onClick={() => navigate("/pricing")}
              className={`text-sm font-medium transition-colors ${
                isActive("/pricing")
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:text-white"
              }`}
            >
              Pricing
            </Button>
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <Button
              variant={isActive("/about") ? "default" : "ghost"}
              onClick={() => navigate("/about")}
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:text-white"
              }`}
            >
              About
            </Button>
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <Button
              variant={isActive("/showcase") ? "default" : "ghost"}
              onClick={() => navigate("/showcase")}
              className={`text-sm font-medium transition-colors ${
                isActive("/showcase")
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:text-white"
              }`}
            >
              Showcase
            </Button>
          </motion.div>
        </motion.nav>
        <motion.div
          className="flex items-center space-x-4"
          variants={slideInRightVariants}
          initial="hidden"
          animate="visible"
        >
          {user ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
            </motion.div>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => navigate("/auth")}>Get Started</Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
};
