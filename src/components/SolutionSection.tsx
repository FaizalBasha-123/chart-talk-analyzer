import { Button } from "@/components/ui/button";
import { Brain, Target, TrendingUp, CheckCircle } from "lucide-react";
import adaptiveUiImage from "@/assets/adaptive-ui.jpg";

const SolutionSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Learner-first curriculum",
      description: "Content that adapts to your knowledge level and learning preferences"
    },
    {
      icon: Target,
      title: "Smart AI path recommendations",
      description: "Get personalized study paths based on your goals and progress"
    },
    {
      icon: TrendingUp,
      title: "Confidence-based progress tracking",
      description: "Track not just what you learn, but how confident you feel about it"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            Meet Your Learning Partner
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet <span className="bg-gradient-growth bg-clip-text text-transparent"> KnowGrow</span>: Your 
            <span className="bg-gradient-growth bg-clip-text text-transparent"> Adaptive Learning</span> Partner
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            KnowGrow asks a few smart questions to understand your level, then adapts each lesson, 
            quiz, and activity to match your brain's rhythm.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Solution Content */}
          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-growth text-primary-foreground rounded-xl shadow-growth">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-card rounded-xl shadow-card border border-border">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium mb-1">The Result?</p>
                  <p className="text-muted-foreground text-sm">
                    Students learn 3x faster and retain 85% more information compared to traditional methods. 
                    You're not just consuming content—you're building real understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={adaptiveUiImage} 
                alt="KnowGrow adaptive learning interface with AI-powered personalization"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-card text-card-foreground p-4 rounded-xl shadow-card border border-border">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-xs text-muted-foreground">Better Retention</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-4 rounded-xl shadow-card border border-border">
              <div className="text-2xl font-bold text-secondary">3x</div>
              <div className="text-xs text-muted-foreground">Faster Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;