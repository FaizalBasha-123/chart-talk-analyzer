import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Play, TrendingUp, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Take your onboarding quiz",
      description: "Answer a few smart questions about your goals, experience, and learning style. Takes just 2 minutes.",
      time: "2 mins",
      color: "bg-primary"
    },
    {
      number: "02", 
      icon: Play,
      title: "Start learning with personalized content",
      description: "Jump into lessons, exercises, and projects perfectly matched to your current level and pace.",
      time: "Immediate",
      color: "bg-secondary"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Grow and track your progress",
      description: "Watch as the AI adapts to your learning patterns, celebrates wins, and guides you through challenges.",
      time: "Ongoing",
      color: "bg-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How It Works
            <span className="bg-gradient-growth bg-clip-text text-transparent"> (Simple Steps)</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is easier than you think. No overwhelming setup, no complicated processes—just smart, adaptive learning.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="hover:shadow-growth transition-smooth h-full">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-muted/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 ${step.color} text-white rounded-xl mb-6 shadow-growth`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  
                  {/* Time Badge */}
                  <div className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {step.time}
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Join thousands of students who've transformed their learning experience with KnowGrow's adaptive approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Begin Your Assessment
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                See Demo First
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              No signup required for demo • Full experience in under 5 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;