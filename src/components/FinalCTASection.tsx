import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Shield, Clock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              You Deserve to Learn Your Way
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why struggle alone? 
              <br />
              Let's grow together.
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of students who've discovered that learning doesn't have to be overwhelming. 
              With KnowGrow's AI-powered approach, you'll finally experience education that adapts to you.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex p-3 bg-white/20 rounded-lg mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Risk-Free Start</h3>
              <p className="text-white/80 text-sm">No credit card required. Try everything free and upgrade only when you're ready.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex p-3 bg-white/20 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">2-Minute Setup</h3>
              <p className="text-white/80 text-sm">Get personalized recommendations faster than making a cup of coffee.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex p-3 bg-white/20 rounded-lg mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Built for You</h3>
              <p className="text-white/80 text-sm">Every feature designed with Indian students' unique needs and goals in mind.</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Learning?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 font-semibold shadow-glow"
              >
                Start Free – No Credit Card
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
              >
                Watch 2-Min Demo
              </Button>
            </div>
            
            <div className="text-white/80 text-sm">
              ✓ Instant access to personalized learning  ✓ Cancel anytime  ✓ Join 10,000+ successful students
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-white/70 text-sm mb-4">
              Trusted by students from IITs, NITs, and top universities across India
            </p>
            
            <div className="flex justify-center items-center gap-6 text-white/60">
              <div className="flex items-center gap-1">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div>
                <span className="font-semibold">10,000+</span> active learners
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div>
                <span className="font-semibold">85%</span> course completion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;