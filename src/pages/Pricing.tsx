import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  ArrowRight, 
  CheckCircle, 
  X,
  Star,
  Zap,
  Users,
  Shield,
  Globe,
  Clock,
  Target,
  Crown,
  Sparkles,
  TrendingUp,
  Building,
  CreditCard
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { useState } from "react";
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

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "Perfect for individuals and small teams getting started",
      price: { monthly: 0, annual: 0 },
      features: [
        "Up to 5 team members",
        "Basic Kanban boards",
        "Simple task management",
        "Email support",
        "1GB storage",
        "Basic integrations"
      ],
      limitations: [
        "No advanced analytics",
        "No custom fields",
        "No priority support"
      ],
      popular: false,
      cta: "Get Started Free",
      variant: "outline" as const
    },
    {
      name: "Pro",
      description: "Best for growing teams that need more power",
      price: { monthly: 12, annual: 10 },
      features: [
        "Up to 25 team members",
        "Advanced Kanban boards",
        "Gantt charts",
        "Time tracking",
        "Advanced analytics",
        "Custom fields",
        "Priority support",
        "10GB storage",
        "All integrations",
        "Automated workflows"
      ],
      limitations: [],
      popular: true,
      cta: "Start Free Trial",
      variant: "default" as const
    },
    {
      name: "Business",
      description: "For teams that need enterprise features and scale",
      price: { monthly: 25, annual: 20 },
      features: [
        "Unlimited team members",
        "Advanced project templates",
        "Resource management",
        "Advanced reporting",
        "Custom dashboards",
        "SSO & SAML",
        "Advanced security",
        "API access",
        "White-label options",
        "Dedicated support"
      ],
      limitations: [],
      popular: false,
      cta: "Start Free Trial",
      variant: "outline" as const
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: { monthly: null, annual: null },
      features: [
        "Everything in Business",
        "Custom integrations",
        "On-premise deployment",
        "Advanced compliance",
        "Custom training",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom contracts"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
      variant: "outline" as const
    }
  ];

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
                <CreditCard className="w-3 h-3 mr-1" />
                Simple Pricing
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900"
              variants={fadeInVariants}
            >
              Choose the Perfect
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
                Plan for Your Team
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInVariants}
            >
              Start free and scale as you grow. No hidden fees, no surprises. 
              Cancel anytime with just a few clicks.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-8"
              variants={fadeInVariants}
            >
              <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Monthly
              </span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Switch
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                />
              </motion.div>
              <span className={`text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Annual
                <Badge variant="secondary" className="ml-2 text-xs">
                  Save 20%
                </Badge>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="grid lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={scaleInVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <Card 
                  className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}
                >
                  {plan.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Badge className="bg-blue-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  
                  <CardHeader className="text-center">
                    <motion.div
                      variants={fadeInVariants}
                    >
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </motion.div>
                    
                    <motion.div 
                      className="mt-6"
                      variants={fadeInVariants}
                    >
                      {plan.price.monthly === null ? (
                        <div className="text-3xl font-bold text-gray-900">
                          Custom
                        </div>
                      ) : (
                        <div className="text-3xl font-bold text-gray-900">
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                          <span className="text-lg font-normal text-gray-500">
                            /{isAnnual ? 'mo' : 'mo'}
                          </span>
                        </div>
                      )}
                      {isAnnual && plan.price.annual !== 0 && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually (${plan.price.annual * 12})
                        </p>
                      )}
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant={plan.variant} 
                        className="w-full"
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-3"
                      variants={staggerContainerVariants}
                    >
                      <h4 className="font-semibold text-gray-900">What's included:</h4>
                      <motion.ul 
                        className="space-y-2"
                        variants={staggerContainerVariants}
                      >
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center gap-2 text-sm"
                            variants={fadeInVariants}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                      
                      {plan.limitations.length > 0 && (
                        <>
                          <h4 className="font-semibold text-gray-900 mt-4">Not included:</h4>
                          <motion.ul 
                            className="space-y-2"
                            variants={staggerContainerVariants}
                          >
                            {plan.limitations.map((limitation, limitationIndex) => (
                              <motion.li 
                                key={limitationIndex} 
                                className="flex items-center gap-2 text-sm text-gray-500"
                                variants={fadeInVariants}
                              >
                                <X className="w-4 h-4" />
                                {limitation}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
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
              Compare Plans
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInVariants}
            >
              See exactly what each plan includes and choose the right one for your team
            </motion.p>
          </motion.div>

          <motion.div 
            className="overflow-x-auto"
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold">Free</th>
                  <th className="text-center py-4 px-6 font-semibold">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold">Business</th>
                  <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <motion.tbody 
                className="space-y-4"
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.tr 
                  className="border-b"
                  variants={fadeInVariants}
                >
                  <td className="py-4 px-6 font-medium">Team Members</td>
                  <td className="text-center py-4 px-6">Up to 5</td>
                  <td className="text-center py-4 px-6">Up to 25</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </motion.tr>
                <motion.tr 
                  className="border-b"
                  variants={fadeInVariants}
                >
                  <td className="py-4 px-6 font-medium">Storage</td>
                  <td className="text-center py-4 px-6">1GB</td>
                  <td className="text-center py-4 px-6">10GB</td>
                  <td className="text-center py-4 px-6">100GB</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </motion.tr>
                <motion.tr 
                  className="border-b"
                  variants={fadeInVariants}
                >
                  <td className="py-4 px-6 font-medium">Kanban Boards</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </motion.tr>
                <motion.tr 
                  className="border-b"
                  variants={fadeInVariants}
                >
                  <td className="py-4 px-6 font-medium">Gantt Charts</td>
                  <td className="text-center py-4 px-6">✗</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </motion.tr>
                <motion.tr 
                  className="border-b"
                  variants={fadeInVariants}
                >
                  <td className="py-4 px-6 font-medium">Analytics</td>
                  <td className="text-center py-4 px-6">Basic</td>
                  <td className="text-center py-4 px-6">Advanced</td>
                  <td className="text-center py-4 px-6">Advanced</td>
                  <td className="text-center py-4 px-6">Custom</td>
                </motion.tr>
                <motion.tr 
                  className="border-b"
                  variants={fadeInVariants}
                >
                  <td className="py-4 px-6 font-medium">Integrations</td>
                  <td className="text-center py-4 px-6">Basic</td>
                  <td className="text-center py-4 px-6">All</td>
                  <td className="text-center py-4 px-6">All</td>
                  <td className="text-center py-4 px-6">Custom</td>
                </motion.tr>
                <motion.tr 
                  className="border-b"
                  variants={fadeInVariants}
                >
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="text-center py-4 px-6">Email</td>
                  <td className="text-center py-4 px-6">Priority</td>
                  <td className="text-center py-4 px-6">Dedicated</td>
                  <td className="text-center py-4 px-6">24/7</td>
                </motion.tr>
              </motion.tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInVariants}
            >
              Everything you need to know about our pricing and plans
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                    and we'll prorate any billing adjustments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely! All paid plans come with a 14-day free trial. No credit card required, 
                    and you can cancel anytime during the trial period.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. 
                    Enterprise customers can also pay via invoice.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer discounts for nonprofits?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! We offer special pricing for qualified nonprofits and educational institutions. 
                    Contact our sales team for more information.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Of course! You can cancel your subscription at any time from your account settings. 
                    No long-term contracts or cancellation fees.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What about data security?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your data is protected with enterprise-grade security. We use end-to-end encryption, 
                    regular backups, and comply with GDPR and SOC 2 standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container px-4 mx-auto text-center">
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white"
              variants={fadeInVariants}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100"
              variants={fadeInVariants}
            >
              Join thousands of teams who trust ProPlan for their project management needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" className="group">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-sm text-blue-200"
              variants={fadeInVariants}
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing; 