import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Map each trending item to a course details ID route
const trendingCourses = [
  { id: "react-typescript", title: "React + TypeScript: Pro Setup & Patterns", instructor: "Shawn Wang", rating: 4.7, learners: "120k", image: "⚛️" },
  { id: "nextjs-ts", title: "Next.js 14 with App Router & TypeScript", instructor: "Lee Robinson", rating: 4.8, learners: "95k", image: "▲" },
  { id: "node-api-ts", title: "Node.js API Design with TypeScript", instructor: "Yoni Goldberg", rating: 4.6, learners: "80k", image: "🟢" },
  { id: "tailwind-master", title: "Tailwind CSS Mastery 2025", instructor: "Adam Wathan", rating: 4.8, learners: "110k", image: "🌬️" },
  { id: "prisma-postgres-ts", title: "Prisma & PostgreSQL with TS: From Zero to Pro", instructor: "Prisma Team", rating: 4.7, learners: "70k", image: "🐘" },
  { id: "react-testing-vitest", title: "Testing React Apps with Vitest & RTL", instructor: "Kent C. Dodds", rating: 4.7, learners: "60k", image: "✅" },
];

export default function TrendingSkills() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="pt-24 pb-10 bg-gradient-subtle"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Trending Stack: <span className="bg-gradient-growth bg-clip-text text-transparent">TypeScript + React</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hot skills for modern frontend engineering. Curated picks to accelerate your career.
            </p>
          </div>
        </motion.section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingCourses.map((c) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="group hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate(`/course/${c.id}`)}>
                    <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-5xl">{c.image}</span>
                      <Badge className="absolute top-2 left-2">Trending</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{c.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{c.instructor}</p>
                      <div className="text-sm text-muted-foreground">Rating {c.rating} • {c.learners} learners</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


