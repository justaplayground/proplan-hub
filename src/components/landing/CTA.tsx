import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-header relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px]" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready to transform your 
            <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              project management?
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of teams already using ProPlan to deliver projects faster, 
            collaborate better, and achieve their goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group bg-white text-primary hover:bg-white/90">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              Schedule Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-white/80">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};