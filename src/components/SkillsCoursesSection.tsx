import { useState } from "react";
import { Star, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SkillsCoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Data Science");

  const categories = [
    "Data Science",
    "IT Certifications", 
    "Leadership",
    "Web Development",
    "Communication",
    "Business Analytics"
  ];

  const skillTags = {
    "Data Science": ["ChatGPT", "Data Science", "Python", "Machine Learning", "Deep Learning", "Artificial Intelligence (AI)", "Statistics"],
    "IT Certifications": ["AWS", "Microsoft Azure", "Google Cloud", "CompTIA", "Cisco", "Linux", "Cybersecurity"],
    "Leadership": ["Management", "Team Building", "Communication", "Strategic Planning", "Project Management", "Coaching"],
    "Web Development": ["React", "JavaScript", "Node.js", "Full Stack", "HTML/CSS", "Angular", "Vue.js"],
    "Communication": ["Public Speaking", "Presentation", "Writing", "Interpersonal Skills", "Negotiation", "Storytelling"],
    "Business Analytics": ["Excel", "Power BI", "Tableau", "SQL", "Business Intelligence", "Data Visualization", "Analytics"]
  };

  const courses = {
    "Data Science": [
      {
        id: "ds1",
        title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
        instructor: "Julian Melenson, Benza Maman",
        rating: 4.5,
        reviews: 51116,
        price: 509,
        originalPrice: 2559,
        badge: "Bestseller",
        image: "🤖"
      },
      {
        id: "ds2", 
        title: "Machine Learning A-Z: Hands-On Python & R In Data Science",
        instructor: "Kirill Eremenko, Hadelin de Ponteves",
        rating: 4.5,
        reviews: 165023,
        price: 549,
        originalPrice: 2999,
        badge: "Bestseller",
        image: "🧠"
      },
      {
        id: "ds3",
        title: "Python for Data Science and Machine Learning Bootcamp",
        instructor: "Jose Portilla",
        rating: 4.6,
        reviews: 98432,
        price: 449,
        originalPrice: 2199,
        badge: "Bestseller",
        image: "🐍"
      },
      {
        id: "ds4",
        title: "Deep Learning Specialization",
        instructor: "Andrew Ng",
        rating: 4.7,
        reviews: 12543,
        price: 649,
        originalPrice: 3299,
        badge: "Premium",
        image: "🔬"
      }
      ,
      {
        id: "ds5",
        title: "Time Series Analysis and Forecasting with Python",
        instructor: "Lazy Programmer Inc.",
        rating: 4.5,
        reviews: 22345,
        price: 479,
        originalPrice: 2399,
        badge: "Popular",
        image: "📈"
      }
    ],
    "IT Certifications": [
      {
        id: "it1",
        title: "AWS Certified Solutions Architect - Associate 2024",
        instructor: "Stephane Maarek",
        rating: 4.6,
        reviews: 89234,
        price: 599,
        originalPrice: 2899,
        badge: "Bestseller",
        image: "☁️"
      },
      {
        id: "it2",
        title: "CompTIA Security+ (SY0-601) Complete Course & Exam",
        instructor: "Jason Dion",
        rating: 4.5,
        reviews: 45678,
        price: 449,
        originalPrice: 1999,
        badge: "Premium",
        image: "🔒"
      },
      {
        id: "it3",
        title: "Microsoft Azure Fundamentals AZ-900 Exam Prep",
        instructor: "Scott Duffy",
        rating: 4.4,
        reviews: 76543,
        price: 349,
        originalPrice: 1799,
        badge: "Popular",
        image: "🌐"
      },
      {
        id: "it4",
        title: "Google Cloud Professional Cloud Architect 2024",
        instructor: "Dan Sullivan",
        rating: 4.5,
        reviews: 31234,
        price: 579,
        originalPrice: 2799,
        badge: "Bestseller",
        image: "☁️"
      }
    ],
    "Leadership": [
      {
        id: "ld1",
        title: "Leadership: Practical Leadership Skills",
        instructor: "Chris Croft",
        rating: 4.3,
        reviews: 54321,
        price: 399,
        originalPrice: 1899,
        badge: "Bestseller",
        image: "👑"
      },
      {
        id: "ld2",
        title: "Project Management Professional (PMP) Exam Prep",
        instructor: "Joseph Phillips",
        rating: 4.5,
        reviews: 23456,
        price: 549,
        originalPrice: 2499,
        badge: "Premium",
        image: "📊"
      },
      {
        id: "ld3",
        title: "Emotional Intelligence for Leadership",
        instructor: "Robin Hills",
        rating: 4.2,
        reviews: 18765,
        price: 299,
        originalPrice: 1599,
        badge: "Popular",
        image: "💡"
      },
      {
        id: "ld4",
        title: "Strategic Leadership and Management",
        instructor: "University of Illinois",
        rating: 4.4,
        reviews: 26432,
        price: 499,
        originalPrice: 2399,
        badge: "Premium",
        image: "🧭"
      }
    ],
    "Web Development": [
      {
        id: "wd1",
        title: "The Complete Web Developer Bootcamp 2024",
        instructor: "Colt Steele",
        rating: 4.7,
        reviews: 267543,
        price: 599,
        originalPrice: 2999,
        badge: "Bestseller",
        image: "💻"
      },
      {
        id: "wd2",
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.6,
        reviews: 198765,
        price: 549,
        originalPrice: 2799,
        badge: "Bestseller",
        image: "⚛️"
      },
      {
        id: "wd3",
        title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
        instructor: "Jonas Schmedtmann",
        rating: 4.6,
        reviews: 87654,
        price: 499,
        originalPrice: 2399,
        badge: "Premium",
        image: "🟢"
      },
      {
        id: "wd4",
        title: "JavaScript: The Advanced Concepts (2024 Update)",
        instructor: "Andrei Neagoie",
        rating: 4.7,
        reviews: 45321,
        price: 449,
        originalPrice: 2199,
        badge: "Premium",
        image: "📜"
      },
      {
        id: "wd5",
        title: "TypeScript Complete Developer's Guide",
        instructor: "Stephen Grider",
        rating: 4.6,
        reviews: 38211,
        price: 459,
        originalPrice: 2299,
        badge: "Popular",
        image: "🟦"
      }
    ],
    "Communication": [
      {
        id: "cm1",
        title: "Complete Presentation Skills Masterclass for Every Occasion",
        instructor: "TJ Walker",
        rating: 4.4,
        reviews: 34567,
        price: 399,
        originalPrice: 1899,
        badge: "Bestseller",
        image: "🎤"
      },
      {
        id: "cm2",
        title: "Public Speaking: How to Speak With Confidence",
        instructor: "Lawrence Bernstein",
        rating: 4.3,
        reviews: 28765,
        price: 349,
        originalPrice: 1699,
        badge: "Popular",
        image: "🗣️"
      },
      {
        id: "cm3",
        title: "Business Writing Course: Writing Skills for Professionals",
        instructor: "Maureen Mitchell",
        rating: 4.2,
        reviews: 19876,
        price: 299,
        originalPrice: 1499,
        badge: "Premium",
        image: "✍️"
      },
      {
        id: "cm4",
        title: "Negotiation Mastery: Strategies and Tactics",
        instructor: "Chris Voss",
        rating: 4.6,
        reviews: 40213,
        price: 399,
        originalPrice: 1999,
        badge: "Bestseller",
        image: "🤝"
      }
    ],
    "Business Analytics": [
      {
        id: "ba1",
        title: "Microsoft Excel - Excel from Beginner to Advanced",
        instructor: "Kyle Pew",
        rating: 4.6,
        reviews: 234567,
        price: 449,
        originalPrice: 2199,
        badge: "Bestseller",
        image: "📈"
      },
      {
        id: "ba2",
        title: "Tableau 2024 A-Z: Hands-On Tableau Training for Data Science",
        instructor: "Kirill Eremenko",
        rating: 4.5,
        reviews: 87543,
        price: 549,
        originalPrice: 2699,
        badge: "Bestseller",
        image: "📊"
      },
      {
        id: "ba3",
        title: "SQL - MySQL for Data Analytics and Business Intelligence",
        instructor: "365 Careers",
        rating: 4.5,
        reviews: 76432,
        price: 399,
        originalPrice: 1999,
        badge: "Premium",
        image: "🗄️"
      },
      {
        id: "ba4",
        title: "Power BI Complete Course: Beginner to Expert Level",
        instructor: "Maven Analytics",
        rating: 4.4,
        reviews: 45678,
        price: 499,
        originalPrice: 2299,
        badge: "Popular",
        image: "⚡"
      },
      {
        id: "ba5",
        title: "Google Analytics 4 (GA4) Masterclass",
        instructor: "MeasureSchool",
        rating: 4.3,
        reviews: 25109,
        price: 379,
        originalPrice: 1999,
        badge: "Popular",
        image: "📊"
      }
    ]
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Bestseller": return "default";
      case "Premium": return "secondary";
      case "Popular": return "outline";
      default: return "default";
    }
  };

  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All the <span className="bg-gradient-growth bg-clip-text text-transparent"> skills </span> you need in one place
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From critical skills to technical topics, our platform supports your professional development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                activeCategory === category
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {skillTags[activeCategory as keyof typeof skillTags]?.map((skill, index) => (
            <Badge
              key={skill}
              variant={index === 0 ? "default" : "secondary"}
              className="text-sm py-2 px-4"
            >
              {skill}
              {index === 0 && <span className="ml-1 text-xs">4M+ learners</span>}
            </Badge>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {courses[activeCategory as keyof typeof courses]?.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl">{course.image}</span>
                {course.badge && (
                  <Badge 
                    variant={getBadgeVariant(course.badge)}
                    className="absolute top-2 left-2 text-xs"
                  >
                    {course.badge}
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {course.instructor}
                </p>
                
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-sm font-bold text-yellow-600">{course.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(course.rating) 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({course.reviews.toLocaleString()})</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">₹{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{course.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center space-x-3">
          <Button variant="outline" className="px-8 py-3">
            Show all {activeCategory} courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsCoursesSection;