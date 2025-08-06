import { motion } from "framer-motion";
import { fadeInVariants, staggerContainerVariants } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Github,
  Youtube
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
  showNewsletter?: boolean;
  showSocialLinks?: boolean;
  showContactInfo?: boolean;
}

const Footer = ({
  className = "bg-gray-900 text-white",
  showNewsletter = true,
  showSocialLinks = true,
  showContactInfo = true,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Showcase", href: "/showcase" },
      { name: "API", href: "/api" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact", href: "/contact" },
      { name: "Status", href: "/status" },
      { name: "Documentation", href: "/docs" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "YouTube", href: "#", icon: Youtube },
  ];

  return (
    <footer className={cn("relative", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90" />
      
      <div className="relative container px-4 mx-auto py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={fadeInVariants}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">ProPlan</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering teams to plan, collaborate, and deliver exceptional projects with our comprehensive project management platform.
              </p>
            </div>
            
            {showSocialLinks && (
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Links */}
          <motion.div variants={fadeInVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeInVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={fadeInVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        {showNewsletter && (
          <motion.div
            className="border-t border-gray-700 pt-8 mb-8"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-md">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest updates, news, and insights delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Contact Info */}
        {showContactInfo && (
          <motion.div
            className="border-t border-gray-700 pt-8 mb-8"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-gray-300">hello@proplan.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-sm text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © {currentYear} ProPlan. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Made with</span>
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">by the ProPlan team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 