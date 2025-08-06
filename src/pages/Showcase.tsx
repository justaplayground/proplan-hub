import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  BarChart3, 
  Play,
  Star,
  Zap,
  Target
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import CTA from "@/components/landing/CTA";
import heroImage from "@/assets/hero-image.jpg";
import heroImage2 from "@/assets/hero-image-2.png";
import heroImage3 from "@/assets/hero-image-3.png";
import { motion } from "framer-motion";
import { 
  fadeInVariants, 
  slideInLeftVariants, 
  slideInRightVariants, 
  staggerContainerVariants,
  scaleInVariants,
  floatingVariants
} from "@/components/ui/animations";

const Showcase = () => {
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
                <Zap className="w-3 h-3 mr-1" />
                Interactive Demo
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900"
              variants={fadeInVariants}
            >
              Experience
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ProPlan Hub
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInVariants}
            >
              Discover how ProPlan transforms project management with intuitive Kanban boards, 
              real-time collaboration, and powerful analytics. See it in action.
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
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo Video
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg">
                  Explore Features
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Interactive Dashboard Demo
              </h2>
              <p className="text-lg text-gray-600">
                Experience the power of ProPlan's dashboard with real-time updates, 
                drag-and-drop task management, and collaborative features.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Real-time collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Drag-and-drop task management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced analytics & reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Mobile-responsive design</span>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                Try Interactive Demo
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl">
                <img 
                  src={heroImage} 
                  alt="ProPlan Dashboard" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                
                {/* Floating Stats */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Live Demo</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">98%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage projects efficiently and collaborate seamlessly.
            </p>
          </div>

          <Tabs defaultValue="kanban" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="kanban">Kanban Boards</TabsTrigger>
              <TabsTrigger value="gantt">Gantt Charts</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="kanban" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Visual Task Management</h3>
                  <p className="text-gray-600">
                    Organize your work with intuitive Kanban boards. Drag and drop tasks between 
                    columns, set priorities, and track progress in real-time.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Customizable columns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Drag-and-drop interface</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Real-time updates</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <img src={heroImage2} alt="Kanban Board" className="rounded w-full h-auto" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gantt" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Project Timeline Planning</h3>
                  <p className="text-gray-600">
                    Create detailed project timelines with Gantt charts. Visualize dependencies, 
                    track milestones, and manage resources effectively.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Interactive timeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Dependency management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Resource allocation</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 rounded flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Advanced Analytics</h3>
                  <p className="text-gray-600">
                    Get insights into your team's performance with comprehensive analytics. 
                    Track productivity, identify bottlenecks, and optimize workflows.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Performance metrics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Custom reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Real-time dashboards</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-green-100 to-emerald-100 rounded flex items-center justify-center">
                    <Target className="w-16 h-16 text-green-600" />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="collaboration" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Team Collaboration</h3>
                  <p className="text-gray-600">
                    Foster teamwork with built-in communication tools. Share files, 
                    leave comments, and stay connected with your team.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Real-time messaging</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">File sharing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Comment system</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded flex items-center justify-center">
                    <Users className="w-16 h-16 text-purple-600" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of teams who trust ProPlan for their project management needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                <CardDescription>Product Manager at TechCorp</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "ProPlan has transformed how our team collaborates. The Kanban boards are intuitive 
                  and the real-time updates keep everyone in sync."
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Mike Chen</CardTitle>
                <CardDescription>Team Lead at StartupXYZ</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "The analytics features help us identify bottlenecks and improve our workflow. 
                  It's like having a project management expert on our team."
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Emily Rodriguez</CardTitle>
                <CardDescription>Design Director at CreativeAgency</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "The Gantt charts are perfect for our design projects. We can easily track 
                  dependencies and keep clients updated on progress."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Transform Your Project Management?"
        description="Join thousands of teams who have already improved their productivity with ProPlan."
        secondaryButtonText="Schedule Demo"
      />
    </motion.div>
  );
};

export default Showcase; 