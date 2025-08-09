import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, Briefcase } from "lucide-react";
import personasImage from "@/assets/student-personas.jpg";

const PersonasSection = () => {
  const personas = [
    {
      name: "Riya",
      role: "Complete Beginner",
      subject: "Python Programming",
      icon: BookOpen,
      challenge: "Never coded before, feels intimidated by technical jargon",
      outcome: "Built her first web app in 6 weeks, now confident in programming basics",
      color: "bg-primary",
      progress: "0% → 78%"
    },
    {
      name: "Arjun", 
      role: "Exam Preparation",
      subject: "Data Science Certification",
      icon: TrendingUp,
      challenge: "Struggling with complex concepts, running out of time",
      outcome: "Passed certification with 92% score, landed dream internship",
      color: "bg-secondary",
      progress: "45% → 92%"
    },
    {
      name: "Neha",
      role: "Career Advancement", 
      subject: "Machine Learning",
      icon: Briefcase,
      challenge: "Needed ML skills for promotion, limited study time",
      outcome: "Promoted to Senior Data Analyst, salary increased by 40%",
      color: "bg-accent",
      progress: "Basic → Expert"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Designed For You, 
            <span className="bg-gradient-energy bg-clip-text text-transparent"> No Matter Where You Start</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real students, real transformations. See how KnowGrow adapts to different learning journeys.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-growth transition-smooth">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${persona.color} text-white rounded-lg`}>
                    <persona.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{persona.name}</h3>
                    <p className="text-sm text-muted-foreground">{persona.role}</p>
                  </div>
                </div>

                {/* Subject Badge */}
                <Badge variant="secondary" className="mb-4">
                  {persona.subject}
                </Badge>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground">
                    {persona.challenge}
                  </p>
                </div>

                {/* Outcome */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Outcome with KnowGrow:</h4>
                  <p className="text-sm text-muted-foreground">
                    {persona.outcome}
                  </p>
                </div>

                {/* Progress */}
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Progress</span>
                    <span className="text-sm font-bold text-primary">{persona.progress}</span>
                  </div>
                </div>

                {/* Success Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-muted rounded-xl">
            <p className="text-foreground font-medium mb-2">
              Which journey resonates with you?
            </p>
            <p className="text-sm text-muted-foreground">
              KnowGrow adapts to your unique situation, regardless of your starting point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;