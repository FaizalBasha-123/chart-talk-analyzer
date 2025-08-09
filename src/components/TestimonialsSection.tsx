import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=150&h=150&fit=crop&crop=face",
      quote: "KnowGrow saved my final semester. I was struggling with data structures, but the AI adapted the explanations to my level. Went from failing to scoring 89%!",
      rating: 5,
      subject: "Data Structures & Algorithms"
    },
    {
      name: "Rahul Patel",
      role: "Working Professional",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "As a working professional, I needed flexible learning. KnowGrow's bite-sized lessons fit perfectly into my schedule. Got promoted within 6 months!",
      rating: 5,
      subject: "Machine Learning"
    },
    {
      name: "Ananya Gupta",
      role: "Self-learner",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Finally, a platform that understands I'm a visual learner! The adaptive content with diagrams and interactive examples changed everything for me.",
      rating: 5,
      subject: "Web Development"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Indian Students" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "85%", label: "Course Completion" },
    { number: "92%", label: "Career Growth" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Loved by 
            <span className="bg-gradient-energy bg-clip-text text-transparent"> Students Across India</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't just take our word for it. Here's what students are saying about their KnowGrow experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-growth transition-smooth">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Subject Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {testimonial.subject}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-muted rounded-xl px-8 py-4">
            <div className="text-sm font-medium text-muted-foreground">Trusted by students from:</div>
            <div className="flex items-center gap-4 text-sm text-primary font-medium">
              <span>IITs</span>
              <span>•</span>
              <span>NITs</span>
              <span>•</span>
              <span>Top Universities</span>
              <span>•</span>
              <span>Leading Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;