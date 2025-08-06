import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Play,
  Star,
  Zap,
  Shield,
  Clock,
  Target,
  Layers,
  GitBranch,
  Bell,
  Search,
  Download,
  Upload,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Cloud,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import CTA from "@/components/landing/CTA";
import heroImage from "@/assets/hero-image.jpg";
import heroImage2 from "@/assets/hero-image-2.png";
import { motion } from "framer-motion";
import {
  fadeInVariants,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
  scaleInVariants,
  iconVariants,
  pageTransitionVariants,
} from "@/components/ui/animations";

const Features = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
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
                Powerful Features
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900"
              variants={fadeInVariants}
            >
              Everything You Need to
              <motion.span
                className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
              >
                Succeed
              </motion.span>
            </motion.h1>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInVariants}>
              ProPlan combines powerful project management tools with intuitive design to help teams
              work smarter, not harder. Discover features that actually make a difference.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center space-y-6 mb-12"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="text-3xl font-bold text-gray-900" variants={fadeInVariants}>
              Core Features
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={fadeInVariants}>
              The essential tools that every team needs for effective project management
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Layers className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <CardTitle>Kanban Boards</CardTitle>
                  <CardDescription>
                    Visual task management with drag-and-drop simplicity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Customizable columns
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Drag-and-drop interface
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Real-time updates
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <CardTitle>Gantt Charts</CardTitle>
                  <CardDescription>Timeline planning with dependency management</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Interactive timeline
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Dependency tracking
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Resource allocation
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Users className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <CardTitle>Team Collaboration</CardTitle>
                  <CardDescription>Built-in communication and file sharing</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Real-time messaging
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      File sharing
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Comment system
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Target className="w-6 h-6 text-orange-600" />
                  </motion.div>
                  <CardTitle>Analytics & Reports</CardTitle>
                  <CardDescription>Comprehensive insights and performance tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Performance metrics
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom reports
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Real-time dashboards
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Bell className="w-6 h-6 text-red-600" />
                  </motion.div>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Smart alerts and automated reminders</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom alerts
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Email notifications
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Mobile push notifications
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Search className="w-6 h-6 text-cyan-600" />
                  </motion.div>
                  <CardTitle>Advanced Search</CardTitle>
                  <CardDescription>Find anything quickly with powerful search</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Global search
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Filters and tags
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={fadeInVariants}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Saved searches
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center space-y-6 mb-12"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="text-3xl font-bold text-gray-900" variants={fadeInVariants}>
              Advanced Features
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={fadeInVariants}>
              Powerful tools for teams that need more than the basics
            </motion.p>
          </motion.div>

          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>

            <TabsContent value="automation" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Workflow Automation</h3>
                  <p className="text-gray-600">
                    Automate repetitive tasks and create custom workflows that save your team hours
                    every week. Set up triggers, conditions, and actions to streamline your
                    processes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Custom triggers and conditions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Automated task assignments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Email and notification automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Template-based workflows</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 rounded flex items-center justify-center">
                    <GitBranch className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Third-Party Integrations</h3>
                  <p className="text-gray-600">
                    Connect ProPlan with your favorite tools and services. Sync data, automate
                    workflows, and keep everything in one place.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Slack, Microsoft Teams, Discord</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">GitHub, GitLab, Bitbucket</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Google Workspace, Microsoft 365</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Zapier, Make, n8n</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-green-100 to-emerald-100 rounded flex items-center justify-center">
                    <Globe className="w-16 h-16 text-green-600" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Enterprise Security</h3>
                  <p className="text-gray-600">
                    Bank-level security with enterprise-grade features. Keep your data safe with
                    advanced encryption, compliance, and access controls.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">End-to-end encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SSO and SAML support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">GDPR and SOC 2 compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Advanced audit logs</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded flex items-center justify-center">
                    <Shield className="w-16 h-16 text-purple-600" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Mobile Experience</h3>
                  <p className="text-gray-600">
                    Work from anywhere with our native mobile apps. Full functionality optimized for
                    touch interfaces and offline capabilities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Native iOS and Android apps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Offline sync capabilities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Push notifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Touch-optimized interface</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-orange-100 to-red-100 rounded flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-orange-600" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center space-y-6 mb-12"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="text-3xl font-bold text-gray-900" variants={fadeInVariants}>
              Technical Specifications
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={fadeInVariants}>
              Built with modern technology for reliability and performance
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
                transition: { duration: 0.3 },
              }}
            >
              <Card>
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <CardTitle>Cloud Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li variants={fadeInVariants}>• AWS/Azure/GCP hosting</motion.li>
                    <motion.li variants={fadeInVariants}>• Global CDN</motion.li>
                    <motion.li variants={fadeInVariants}>• Auto-scaling</motion.li>
                    <motion.li variants={fadeInVariants}>• 99.9% uptime SLA</motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card>
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Database className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <CardTitle>Data & Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li variants={fadeInVariants}>• PostgreSQL database</motion.li>
                    <motion.li variants={fadeInVariants}>• Redis caching</motion.li>
                    <motion.li variants={fadeInVariants}>• S3-compatible storage</motion.li>
                    <motion.li variants={fadeInVariants}>• Real-time sync</motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card>
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <Monitor className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <CardTitle>API & Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-600"
                    variants={staggerContainerVariants}
                  >
                    <motion.li variants={fadeInVariants}>• RESTful API</motion.li>
                    <motion.li variants={fadeInVariants}>• GraphQL support</motion.li>
                    <motion.li variants={fadeInVariants}>• Webhook system</motion.li>
                    <motion.li variants={fadeInVariants}>• SDK libraries</motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Experience These Features?"
        description="Start your free trial and discover how ProPlan can transform your team's productivity."
        secondaryButtonText="Schedule Demo"
      />
    </motion.div>
  );
};

export default Features;
