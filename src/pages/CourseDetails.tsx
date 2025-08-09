import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Users, Clock, Globe, Award, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courseData = {
    "full-stack": {
      title: "Full Stack Web Developer Career Accelerator",
      subtitle: "Master both frontend and backend development with modern technologies",
      rating: 4.7,
      totalRatings: 453,
      students: "12,847",
      totalHours: 87,
      lastUpdated: "December 2024",
      language: "English",
      level: "Beginner to Advanced",
      instructor: {
        name: "Priya Sharma",
        title: "Senior Full Stack Developer",
        image: "👩‍💻",
        experience: "8+ years experience",
        students: "25,000+ students taught"
      },
      curriculum: [
        {
          title: "Introduction to Web Development",
          lessons: 12,
          duration: "3h 45m",
          topics: ["HTML5 Fundamentals", "CSS3 Styling", "Responsive Design", "Git & GitHub"]
        },
        {
          title: "JavaScript Mastery",
          lessons: 18,
          duration: "6h 20m",
          topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "APIs"]
        },
        {
          title: "React Frontend Development",
          lessons: 15,
          duration: "5h 15m",
          topics: ["Components & Props", "State Management", "Hooks", "React Router"]
        },
        {
          title: "Backend with Node.js",
          lessons: 14,
          duration: "4h 50m",
          topics: ["Express.js", "Database Design", "Authentication", "RESTful APIs"]
        },
        {
          title: "Full Stack Projects",
          lessons: 8,
          duration: "3h 30m",
          topics: ["E-commerce App", "Social Media Platform", "Portfolio Website"]
        }
      ]
    },
    "ai-developer": {
      title: "AI Developer Career Accelerator",
      subtitle: "Build intelligent applications using machine learning and AI frameworks",
      rating: 4.5,
      totalRatings: 321,
      students: "8,543",
      totalHours: 65,
      lastUpdated: "December 2024",
      language: "English",
      level: "Intermediate to Advanced",
      instructor: {
        name: "Rajesh Kumar",
        title: "AI Research Engineer",
        image: "👨‍🔬",
        experience: "10+ years in AI/ML",
        students: "18,000+ students taught"
      },
      curriculum: [
        {
          title: "Python for AI Development",
          lessons: 10,
          duration: "3h 20m",
          topics: ["NumPy & Pandas", "Data Visualization", "Scientific Computing"]
        },
        {
          title: "Machine Learning Fundamentals",
          lessons: 16,
          duration: "5h 45m",
          topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"]
        },
        {
          title: "Deep Learning with TensorFlow",
          lessons: 14,
          duration: "4h 30m",
          topics: ["Neural Networks", "CNNs", "RNNs", "Transfer Learning"]
        },
        {
          title: "AI Application Development",
          lessons: 12,
          duration: "4h 10m",
          topics: ["Computer Vision", "NLP", "Chatbots", "Deployment"]
        }
      ]
    },
    "data-scientist": {
      title: "Data Scientist Career Accelerator",
      subtitle: "Analyze complex data and build predictive models for business insights",
      rating: 4.6,
      totalRatings: 289,
      students: "9,234",
      totalHours: 72,
      lastUpdated: "December 2024",
      language: "English",
      level: "Beginner to Advanced",
      instructor: {
        name: "Anitha Reddy",
        title: "Senior Data Scientist",
        image: "👩‍🔬",
        experience: "7+ years in Data Science",
        students: "22,000+ students taught"
      },
      curriculum: [
        {
          title: "Statistics & Probability",
          lessons: 14,
          duration: "4h 15m",
          topics: ["Descriptive Statistics", "Inferential Statistics", "Hypothesis Testing"]
        },
        {
          title: "Data Analysis with Python",
          lessons: 16,
          duration: "5h 30m",
          topics: ["Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"]
        },
        {
          title: "Machine Learning for Data Science",
          lessons: 18,
          duration: "6h 20m",
          topics: ["Regression", "Classification", "Clustering", "Feature Engineering"]
        },
        {
          title: "Data Visualization & Communication",
          lessons: 12,
          duration: "3h 45m",
          topics: ["Matplotlib", "Seaborn", "Plotly", "Storytelling with Data"]
        }
      ]
    }
    ,
    "react-typescript": {
      title: "React + TypeScript: Pro Setup & Patterns",
      subtitle: "Strongly-typed React applications with scalable architecture",
      rating: 4.7,
      totalRatings: 1203,
      students: "34,210",
      totalHours: 24,
      lastUpdated: "December 2024",
      language: "English",
      level: "Intermediate",
      instructor: {
        name: "Shawn Wang",
        title: "Staff Frontend Engineer",
        image: "⚛️",
        experience: "8+ years in React/TypeScript",
        students: "100,000+ students taught"
      },
      curriculum: [
        { title: "TypeScript Fundamentals for React", lessons: 10, duration: "3h 00m", topics: ["Types & Interfaces", "Generics", "Utility Types", "Type Narrowing"] },
        { title: "Typing React Components", lessons: 12, duration: "3h 40m", topics: ["Props & State", "Context", "Hooks types", "Render props"] },
        { title: "Patterns & Architecture", lessons: 11, duration: "3h 10m", topics: ["Compound Components", "Controller/View", "Render-as-You-Fetch", "Error Boundaries"] },
        { title: "Tooling & DX", lessons: 8, duration: "2h 10m", topics: ["Vite + TS", "ESLint/TSConfig", "Jest/Vitest types", "CI setup"] }
      ]
    },
    "nextjs-ts": {
      title: "Next.js 14 with App Router & TypeScript",
      subtitle: "Modern React apps with server components, routing, and TS",
      rating: 4.8,
      totalRatings: 2154,
      students: "52,430",
      totalHours: 28,
      lastUpdated: "November 2024",
      language: "English",
      level: "Intermediate to Advanced",
      instructor: {
        name: "Lee Robinson",
        title: "VP of DevRel",
        image: "▲",
        experience: "Expert in Next.js",
        students: "150,000+ students taught"
      },
      curriculum: [
        { title: "App Router Essentials", lessons: 12, duration: "3h 30m", topics: ["Layouts", "Route Groups", "Dynamic Routes", "Metadata"] },
        { title: "Server Components & Data Fetching", lessons: 10, duration: "3h 05m", topics: ["RSC basics", "Streaming", "Caching", "Suspense"] },
        { title: "Auth & Middleware", lessons: 8, duration: "2h 20m", topics: ["NextAuth", "Middleware", "RBAC", "Edge Runtime"] },
        { title: "Deployment & Observability", lessons: 7, duration: "1h 55m", topics: ["Vercel", "Env & Secrets", "Logs", "Analytics"] }
      ]
    },
    "node-api-ts": {
      title: "Node.js API Design with TypeScript",
      subtitle: "Design, test, and ship robust REST APIs in Node + TS",
      rating: 4.6,
      totalRatings: 1432,
      students: "40,120",
      totalHours: 22,
      lastUpdated: "October 2024",
      language: "English",
      level: "Intermediate",
      instructor: {
        name: "Yoni Goldberg",
        title: "Backend Architect",
        image: "🟢",
        experience: "10+ years Node.js",
        students: "80,000+ students taught"
      },
      curriculum: [
        { title: "Project Setup & Quality", lessons: 9, duration: "2h 40m", topics: ["ESLint/Prettier", "Ts-Node", "Zod validation", "Config"] },
        { title: "API Design", lessons: 11, duration: "3h 20m", topics: ["Routing", "Controllers", "Services", "DTOs"] },
        { title: "Persistence & Caching", lessons: 10, duration: "3h 00m", topics: ["Postgres", "Prisma", "Redis", "Transactions"] },
        { title: "Testing & Observability", lessons: 9, duration: "2h 30m", topics: ["Vitest", "Supertest", "OpenTelemetry", "Health checks"] }
      ]
    },
    "tailwind-master": {
      title: "Tailwind CSS Mastery 2025",
      subtitle: "Build beautiful, responsive UIs fast with utility-first CSS",
      rating: 4.8,
      totalRatings: 1987,
      students: "47,890",
      totalHours: 16,
      lastUpdated: "January 2025",
      language: "English",
      level: "All Levels",
      instructor: {
        name: "Adam Wathan",
        title: "Creator of Tailwind CSS",
        image: "🌬️",
        experience: "10+ years design & CSS",
        students: "200,000+ students taught"
      },
      curriculum: [
        { title: "Tailwind Fundamentals", lessons: 8, duration: "2h 15m", topics: ["Config", "Design tokens", "Responsive", "Dark mode"] },
        { title: "Layout & Components", lessons: 10, duration: "3h 20m", topics: ["Flex/Grid", "Cards", "Forms", "Navbar"] },
        { title: "Design Systems", lessons: 7, duration: "2h 00m", topics: ["Variants", "Theming", "Accessibility", "Animations"] }
      ]
    },
    "prisma-postgres-ts": {
      title: "Prisma & PostgreSQL with TS: From Zero to Pro",
      subtitle: "Type-safe database access and data modeling with Prisma",
      rating: 4.7,
      totalRatings: 1120,
      students: "33,210",
      totalHours: 18,
      lastUpdated: "September 2024",
      language: "English",
      level: "Intermediate",
      instructor: {
        name: "Prisma Team",
        title: "Developer Educators",
        image: "🐘",
        experience: "Experts in Prisma & Postgres",
        students: "90,000+ students taught"
      },
      curriculum: [
        { title: "Data Modeling", lessons: 9, duration: "2h 30m", topics: ["Schemas", "Relations", "Migrations", "Seeding"] },
        { title: "Queries & Performance", lessons: 9, duration: "2h 45m", topics: ["CRUD", "Indexes", "Transactions", "N+1"] },
        { title: "APIs & Deploy", lessons: 8, duration: "2h 20m", topics: ["Express", "NestJS", "Serverless", "Deployment"] }
      ]
    },
    "react-testing-vitest": {
      title: "Testing React Apps with Vitest & RTL",
      subtitle: "Confidently ship UI with unit and integration tests",
      rating: 4.7,
      totalRatings: 980,
      students: "28,540",
      totalHours: 14,
      lastUpdated: "August 2024",
      language: "English",
      level: "Intermediate",
      instructor: {
        name: "Kent C. Dodds",
        title: "Testing Expert",
        image: "✅",
        experience: "Testing libraries author",
        students: "120,000+ students taught"
      },
      curriculum: [
        { title: "Foundations", lessons: 7, duration: "1h 50m", topics: ["Vitest setup", "JSDOM", "RTL queries", "Mocking"] },
        { title: "Interaction & Async", lessons: 8, duration: "2h 10m", topics: ["user-event", "Timers", "Network", "Accessibility"] },
        { title: "Patterns", lessons: 7, duration: "1h 45m", topics: ["Integration tests", "Fixtures", "Test data", "CI"] }
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Course Header */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-300">({course.totalRatings} ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.totalHours} total hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>{course.language}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="text-sm text-gray-300">Last updated: {course.lastUpdated}</span>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{course.instructor.image}</div>
                    <h3 className="text-xl font-semibold text-white">{course.instructor.name}</h3>
                    <p className="text-gray-300">{course.instructor.title}</p>
                    <p className="text-sm text-gray-400 mt-2">{course.instructor.experience}</p>
                    <p className="text-sm text-gray-400">{course.instructor.students}</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Enroll Now - Start Free
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* What you'll learn */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.curriculum.flatMap(section => 
                      section.topics.slice(0, 2).map((topic, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Course Curriculum */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                  <div className="space-y-4">
                    {course.curriculum.map((section, index) => (
                      <div key={index} className="border border-border rounded-lg">
                        <div className="p-4 bg-muted/50">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{section.title}</h3>
                            <div className="text-sm text-muted-foreground">
                              {section.lessons} lessons • {section.duration}
                            </div>
                          </div>
                        </div>
                        <div className="p-4 space-y-2">
                          {section.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center gap-3 py-2">
                              <Play className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Course Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm">Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">Self-paced learning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm">Community support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">Lifetime access</span>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <Button className="w-full">
                    Start Learning Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;