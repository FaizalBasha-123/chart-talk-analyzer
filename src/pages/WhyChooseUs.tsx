import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, XCircle, Sparkles, Route, MessageSquare, BarChart3, ShieldCheck, Plug } from "lucide-react";

const Seo = ({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    setMeta("og:image", "/og.png");

    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.origin + canonical);

    // Basic JSON-LD for a WebPage
    const ld = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: window.location.origin + canonical,
    } as const;

    let script = document.getElementById("jsonld-why-choose-us") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "jsonld-why-choose-us";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, [title, description, canonical]);

  return null;
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "AI-Powered Personalization",
      description:
        "Our platform continuously learns from your progress, adjusting difficulty and content in real time to optimize your learning journey.",
      Icon: Sparkles,
    },
    {
      title: "Learning Paths As Unique As You",
      description:
        "No more one-size-fits-all courses. KnowGrow creates tailored learning experiences based on your goals, strengths, and areas for improvement.",
      Icon: Route,
    },
    {
      title: "Instant, Meaningful Feedback",
      description:
        "Receive targeted feedback and guidance exactly when you need it—not days or weeks later.",
      Icon: MessageSquare,
    },
    {
      title: "Track Your Growth",
      description:
        "Detailed analytics dashboards show your progress, mastery levels, and suggest optimal learning strategies.",
      Icon: BarChart3,
    },
    {
      title: "Quality You Can Trust",
      description:
        "All courses developed by industry experts and continuously improved through AI analysis of learning patterns.",
      Icon: ShieldCheck,
    },
    {
      title: "Works With Your Existing Tools",
      description:
        "Easily integrates with your school or organization’s learning management systems.",
      Icon: Plug,
    },
  ];

  const comparison = [
    {
      label: "Learning Approach",
      traditional: "Static, one-size-fits-all",
      knowgrow: "Adaptive, personalized",
    },
    {
      label: "Content Delivery",
      traditional: "Predominantly static",
      knowgrow: "Dynamic, customized paths",
    },
    {
      label: "Feedback System",
      traditional: "Delayed, generic responses",
      knowgrow: "Real-time, targeted",
    },
    {
      label: "Progress Tracking",
      traditional: "Basic scoring system",
      knowgrow: "Comprehensive analytics",
    },
    {
      label: "Knowledge Retention",
      traditional: "Limited reinforcement",
      knowgrow: "AI-optimized repetition",
    },
    {
      label: "Engagement Level",
      traditional: "Often passive",
      knowgrow: "Interactive & immersive",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      quote:
        "KnowGrow helped me improve my grades dramatically. The personalized approach identified gaps in my knowledge I didn’t even know existed!",
    },
    {
      name: "David Chen",
      role: "High School Teacher",
      quote:
        "As an educator, I’ve seen my students’ engagement soar since implementing KnowGrow. The analytics help me understand exactly where they need support.",
    },
    {
      name: "Michelle Rodriguez",
      role: "Professional Upskiller",
      quote:
        "Learning new skills for my career used to take months. With KnowGrow’s adaptive approach, I’ve cut that time in half while retaining more information.",
    },
    {
      name: "Amira Patel",
      role: "University Student",
      quote:
        "The mentor support and real-time feedback make a huge difference. It feels like the platform truly learns with me.",
    },
  ];

  const stats = [
    { number: "94%", label: "Completion Rate" },
    { number: "87%", label: "Improved Test Scores" },
    { number: "3.5x", label: "Faster Knowledge Acquisition" },
    { number: "250+", label: "Adaptive Courses" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Why Choose KnowGrow – Personalized Learning That Works"
        description="Discover why KnowGrow stands out: AI-powered personalization, instant feedback, expert-built courses, and real results."
        canonical="/why-choose-us"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-24 pb-16 bg-[#E8F8ED]"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 pt-12 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                >
                  Why Choose
                  <span className="bg-gradient-growth bg-clip-text text-transparent"> KnowGrow?</span>
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-foreground/90 font-semibold mb-3"
                >
                  Education That Grows With You
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-muted-foreground mb-8 max-w-xl"
                >
                  Our AI-powered platform adapts to your unique learning style, making education more personal, effective, and engaging than ever before.
                </motion.p>
                <div className="flex items-center gap-4">
                  <Button variant="hero" size="lg">Start Learning For Free</Button>
                  <Button variant="outline" className="hover-scale">See How It Works</Button>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="lovable-uploads\why choose-knowgrow.png"
                  alt="KnowGrow learning with laptop"
                  loading="lazy"
                  className="w-full rounded-xl shadow-growth object-cover object-fit object-center"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="py-16 bg-background"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-[#025928] mb-3">Our Key Features</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover how our AI-powered platform evolves the way you learn, with personalized experiences that adapt to your unique needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ title, description, Icon }) => (
                <Card key={title} className="h-full shadow-sm hover:shadow-growth transition-all">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground text-[#025928] mb-2">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="py-20 bg-gradient-subtle"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#025928] text-foreground">How KnowGrow Transforms Learning</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Labels */}
              <Card className="h-full bg-[#025928]">
                <CardContent className="p-0">
                  <div className="text-primary-foreground px-6 py-4 rounded-t-md font-bold">Comparison</div>
                  <div className="p-6 space-y-6">
                    {comparison.map((row) => (
                      <div key={row.label} className="text-foreground text-white font-medium">{row.label}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Traditional */}
              <Card className="h-full">
                <CardContent className="p-0">
                  <div className="bg-background px-6 py-4 rounded-t-md font-bold text-foreground text-[#025928]">Traditional Learning</div>
                  <div className="p-6 space-y-6">
                    {comparison.map((row) => (
                      <div key={row.label} className="flex items-start gap-2 text-muted-foreground">
                        <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* KnowGrow */}
              <Card className="h-full">
                <CardContent className="p-0 bg-[#E8F8ED]">
                  <div className="bg-background px-6 py-4 bg-[#E8F8ED] rounded-t-md font-bold text-foreground text-[#025928]">KnowGrow Learning</div>
                  <div className="p-6 space-y-6">
                    {comparison.map((row) => (
                      <div key={row.label} className="flex items-start gap-2 text-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-[#025928]">{row.knowgrow}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="py-20 bg-background bg-[#E8F8ED]"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#025928] text-foreground mb-2">What Our Users Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how KnowGrow has transformed learning experiences for students and educators alike.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t) => (
                <Card key={t.name} className="h-full shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarFallback>{t.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-foreground">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">“{t.quote}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="py-16 bg-gradient-subtle"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#025928] text-foreground">Our Impact By Numbers</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="mx-auto w-28 h-28 rounded-full grid place-items-center pb-2 border border-primary/90 border-2 text-4xl font-bold text-primary">
                    {s.number}
                  </div>
                  <div className="mt-3 font-medium text-foreground text-[#025928]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="py-20 bg-background"
          style={{
            background: "linear-gradient(to bottom, #E8F8ED 0%, rgba(10,191,83,0.3) 50%, #E8F8ED 100%)",
            borderRadius: "1.5rem",
            padding: "3rem 1rem"
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#025928] text-foreground mb-4">
              Ready to Experience the Future of Learning?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of learners growing their knowledge every day.
            </p>
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">Start Your Free Trial</Button>
            <div className="mt-3 text-sm text-muted-foreground">No credit card required · Cancel anytime</div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
