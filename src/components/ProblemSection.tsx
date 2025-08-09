import { Star, Users, Clock, Code, Brain, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CoursesSection = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: "full-stack",
      title: "Full Stack Web Developer",
      description: "Master both frontend and backend development with modern technologies",
      rating: 4.7,
      totalRatings: 453,
      totalHours: 876,
      students: "12K+",
      icon: Code,
      gradient: "from-orange-400 to-amber-500",
      image: "👨‍💻"
    },
    {
      id: "ai-developer",
      title: "AI Developer",
      description: "Build intelligent applications using machine learning and AI frameworks",
      rating: 4.5,
      totalRatings: 321,
      totalHours: 654,
      students: "8.5K+",
      icon: Brain,
      gradient: "from-purple-500 to-indigo-600",
      image: "👩‍💻"
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      description: "Analyze complex data and build predictive models for business insights",
      rating: 4.6,
      totalRatings: 289,
      totalHours: 721,
      students: "9.2K+",
      icon: BarChart3,
      gradient: "from-pink-500 to-violet-600",
      image: "👨‍🔬"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upgrade Your <span className="bg-gradient-growth bg-clip-text text-transparent"> Career</span> With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pick the right course for your career and Upgrade your skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden cursor-pointer"
              onClick={() => navigate(`/course/${course.id}`)}
            >
              <div className={`h-48 bg-gradient-to-br ${course.gradient} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <course.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-6xl">{course.image}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                    <span>({course.totalRatings} ratings)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.totalHours} total hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button
            className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg font-semibold"
            onClick={() => navigate("/skills/trending")}
          >
            View All Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;