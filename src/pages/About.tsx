import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Target,
  Heart,
  Award,
  Globe,
  Zap,
  Shield,
  Lightbulb,
  TrendingUp,
  Star,
  CheckCircle,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { motion } from "framer-motion";
import {
  fadeInVariants,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
  scaleInVariants,
  iconVariants,
} from "@/components/ui/animations";

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center space-y-6"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInVariants}>
              <Badge variant="secondary" className="text-sm">
                <Heart className="w-3 h-3 mr-1" />
                Our Story
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900"
              variants={fadeInVariants}
            >
              Building the Future of
              <motion.span
                className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Project Management
              </motion.span>
            </motion.h1>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInVariants}>
              We believe that great teams deserve great tools. ProPlan was born from the frustration
              of complex, outdated project management solutions that slowed teams down instead of
              helping them move faster.
            </motion.p>
          </motion.div>
        </div>
      </section>

             {/* Mission Section */}
       <section className="py-16 bg-white">
         <div className="container px-4 mx-auto">
           <motion.div 
             className="grid lg:grid-cols-2 gap-12 items-center"
             variants={staggerContainerVariants}
             initial="hidden"
             animate="visible"
           >
             <motion.div 
               className="space-y-6"
               variants={slideInLeftVariants}
             >
               <motion.h2 
                 className="text-3xl font-bold text-gray-900"
                 variants={fadeInVariants}
               >
                 Our Mission
               </motion.h2>
               <motion.p 
                 className="text-lg text-gray-600"
                 variants={fadeInVariants}
               >
                 To empower teams with intuitive, powerful project management tools that make
                 collaboration effortless and productivity inevitable.
               </motion.p>

              <motion.div 
                className="space-y-4"
                variants={staggerContainerVariants}
              >
                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Target className="w-6 h-6 text-blue-600 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Simplify Complexity</h3>
                    <p className="text-gray-600 text-sm">
                      Transform complex workflows into intuitive experiences
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Foster Collaboration</h3>
                    <p className="text-gray-600 text-sm">
                      Bring teams together with seamless communication tools
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Drive Results</h3>
                    <p className="text-gray-600 text-sm">
                      Help teams achieve their goals faster and more efficiently
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
              variants={slideInRightVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <motion.div 
                className="space-y-6"
                variants={staggerContainerVariants}
              >
                <motion.div 
                  className="text-center"
                  variants={fadeInVariants}
                >
                  <motion.div 
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Lightbulb className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
                  <p className="text-gray-600">
                    We're constantly pushing the boundaries of what's possible in project management
                  </p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={staggerContainerVariants}
                >
                  <motion.div 
                    className="text-center"
                    variants={fadeInVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-blue-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      10K+
                    </motion.div>
                    <div className="text-sm text-gray-600">Active Teams</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    variants={fadeInVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-blue-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      50+
                    </motion.div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center space-y-6 mb-12"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              variants={fadeInVariants}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInVariants}
            >
              The principles that guide everything we do and every decision we make.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Heart className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <CardTitle>User-Centric Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every feature we build starts with understanding our users' needs. We believe that
                    great software should feel invisible, letting teams focus on what matters most.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Shield className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <CardTitle>Trust & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your data is your business. We take security seriously with enterprise-grade
                    protection and transparent privacy practices that put you in control.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Zap className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <CardTitle>Continuous Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We never stop improving. Our team is constantly exploring new technologies and
                    methodologies to deliver the best possible experience for our users.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center space-y-6 mb-12"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              variants={fadeInVariants}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInVariants}
            >
              Passionate individuals dedicated to revolutionizing how teams work together.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center">
                <CardHeader>
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold text-xl">AJ</span>
                  </motion.div>
                  <CardTitle className="text-lg">Alex Johnson</CardTitle>
                  <CardDescription>CEO & Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Former product manager at Google, passionate about building tools that make work
                    better.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center">
                <CardHeader>
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold text-xl">SM</span>
                  </motion.div>
                  <CardTitle className="text-lg">Sarah Martinez</CardTitle>
                  <CardDescription>CTO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Engineering leader with 15+ years experience building scalable applications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center">
                <CardHeader>
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold text-xl">DC</span>
                  </motion.div>
                  <CardTitle className="text-lg">David Chen</CardTitle>
                  <CardDescription>Head of Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    UX expert focused on creating intuitive and beautiful user experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center">
                <CardHeader>
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold text-xl">ER</span>
                  </motion.div>
                  <CardTitle className="text-lg">Emily Rodriguez</CardTitle>
                  <CardDescription>VP of Product</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Product strategist with deep expertise in SaaS and team collaboration tools.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center space-y-6 mb-12"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold text-white"
              variants={fadeInVariants}
            >
              ProPlan by the Numbers
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100"
              variants={fadeInVariants}
            >
              The impact we're making in the world of project management
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="text-center"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10,000+
              </motion.div>
              <div className="text-blue-100">Active Teams</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                50+
              </motion.div>
              <div className="text-blue-100">Countries</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                99.9%
              </motion.div>
              <div className="text-blue-100">Uptime</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                4.9/5
              </motion.div>
              <div className="text-blue-100">User Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto text-center">
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              variants={fadeInVariants}
            >
              Join Our Mission
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              variants={fadeInVariants}
            >
              Ready to experience the future of project management? Start your journey with ProPlan
              today.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
