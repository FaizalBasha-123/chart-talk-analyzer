import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-transformation.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16  bg-[#E8F8ED]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left md:pt-24 md:pb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Your Growth Journey Starts Here
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Stuck in a 
              <span className="bg-gradient-growth bg-clip-text text-transparent"> learning loop</span>? 
              Let us adapt to you.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              KnowGrow is your AI-powered study companion, personalizing content to your level, speed, and style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Start Learning for Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch How It Works
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              ✓ No credit card required  ✓ 2-minute setup  ✓ Join 10,000+ students
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Student transformation from overwhelmed to confident learner"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground p-3 rounded-xl shadow-growth">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-card">
              <div className="text-sm font-semibold">AI Adapts to You</div>
              <div className="text-xs opacity-80">Personalized Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;