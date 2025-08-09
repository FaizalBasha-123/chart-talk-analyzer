import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Globe, Award, BookOpen, Heart, Star } from "lucide-react";

// Local illustrative images (used for story cards)
import heroAlt from "@/assets/hero-transformation.jpg";
import storyA from "@/assets/traditional-learning-problems.jpg";
import storyB from "@/assets/adaptive-ui.jpg";
import storyC from "@/assets/student-personas.jpg";

// Map assets to timeline image variables
const imgFrame1 = storyA;
const imgFrame2 = storyB;
const imgFrame3 = storyC;
const imgFrame4 = heroAlt;

function TimelineSection() {
  const timelineItems = [
    {
      year: "2018",
      title: "The Idea",
      description:
        "KnowGrow began as a research project between education specialists and AI engineers seeking to solve the one-size-fits-all problem in education.",
      image: imgFrame1,
      align: "left",
    },
    {
      year: "2019",
      title: "First Prototype",
      description:
        "Our team developed the first prototype of the adaptive learning algorithm, testing it with a small group of university students.",
      image: imgFrame2,
      align: "right",
    },
    {
      year: "2021",
      title: "Official Launch",
      description:
        "After extensive testing and refinement, KnowGrow officially launched with 50 adaptive courses and partnerships with 5 universities.",
      image: imgFrame3,
      align: "left",
    },
    {
      year: "Today",
      title: "Growing Impact",
      description:
        "KnowGrow now serves over 500,000 learners worldwide, continuously improving our platform with advanced AI capabilities.",
      image: imgFrame4,
      align: "right",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="bg-[#ffffff] h-[1188px] relative shrink-0 w-full">
        <div className="absolute box-border content-stretch flex flex-row h-9 items-center justify-center p-0 top-16 w-full">
          <div className="flex flex-col font-['Montserrat:Bold',_sans-serif] font-bold h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#025928] text-[30px] text-center text-nowrap">
            <p className="[text-overflow:inherit] block leading-[36px] overflow-inherit whitespace-pre">Our Story</p>
          </div>
        </div>

        <div className="absolute h-[992px] left-[272px] top-[132px] w-[896px]">
          {/* Timeline line */}
          <div className="absolute bg-[rgba(10,191,83,0.2)] h-[992px] left-[446px] top-0 w-1" />

          {/* Timeline items */}
          {timelineItems.map((item, index) => {
            const topOffset = index * 264;
            const isLeft = item.align === "left";

            return (
              <div key={index} className="absolute h-[200px] w-[896px]" style={{ top: `${topOffset}px` }}>
                {/* Timeline dot */}
                <div
                  className="absolute bg-[#0abf53] rounded-[9999px] size-6 top-[88px]"
                  style={{ left: isLeft ? "434px" : "456px", transform: "translateX(-50%)" }}
                />

                {/* Content */}
                <div className={`absolute h-[152px] w-[400px] top-6 ${isLeft ? "left-0" : "left-[496px]"}`}>
                  <div
                    className={`absolute box-border content-stretch flex flex-row h-7 items-center ${isLeft ? "justify-end" : "justify-start"} left-0 p-0 top-0 w-[400px]`}
                  >
                    <div
                      className={`flex flex-col font-['Montserrat:Bold',_sans-serif] font-bold h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#0abf53] text-[20px] text-nowrap ${
                        isLeft ? "text-right" : "text-left"
                      }`}
                    >
                      <p className="block leading-[28px] whitespace-pre">{item.year}</p>
                    </div>
                  </div>

                  <div
                    className={`absolute box-border content-stretch flex flex-row h-8 items-center ${isLeft ? "justify-end" : "justify-start"} left-0 p-0 top-9 w-[400px]`}
                  >
                    <div
                      className={`flex flex-col font-['Montserrat:SemiBold',_sans-serif] font-semibold h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#025928] text-[24px] text-nowrap ${
                        isLeft ? "text-right" : "text-left"
                      }`}
                    >
                      <p className="block leading-[32px] whitespace-pre">{item.title}</p>
                    </div>
                  </div>

                  <div className="absolute h-[72px] left-0 top-20 w-[400px]">
                    <div
                      className={`absolute flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[72px] justify-center leading-[0] overflow-ellipsis overflow-hidden text-[16px] text-gray-700 top-[35.5px] translate-y-[-50%] w-[395px] ${
                        isLeft ? "left-[400px] translate-x-[-100%] text-right" : "left-0 text-left"
                      }`}
                      style={{ WebkitBoxOrient: "vertical", display: "-webkit-box" }}
                    >
                      <p className="block leading-[24px]">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`absolute bg-[rgba(0,0,0,0)] h-[200px] overflow-clip rounded-lg shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[400px] ${
                    isLeft ? "left-[496px]" : "left-8"
                  }`}
                >
                  <div
                    className="absolute bg-center bg-cover bg-no-repeat h-[200px] left-0 top-0 w-[400px]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const About = () => {
  // Basic SEO
  useEffect(() => {
    document.title = "About KnowGrow – Our Journey to Transform Education";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      const el = document.createElement("meta");
      el.setAttribute("name", "description");
      el.setAttribute(
        "content",
        "Learn about KnowGrow: our mission, vision, values, timeline, leadership, and impact. Join our community and start your free trial today."
      );
      document.head.appendChild(el);
    } else {
      metaDesc.setAttribute(
        "content",
        "Learn about KnowGrow: our mission, vision, values, timeline, leadership, and impact. Join our community and start your free trial today."
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", window.location.href);
      document.head.appendChild(link);
    } else {
      canonical.href = window.location.href;
    }
  }, []);

  const story = [
    {
      year: "2018",
      title: "The Idea",
      description:
        "A shared conviction: education should spark purpose. Early research uncovered gaps in personalization and motivation.",
      image: storyA,
    },
    {
      year: "2019",
      title: "First Prototype",
      description:
        "We launched a simple mentoring + skills prototype with a small student cohort and iterated rapidly.",
      image: storyB,
    },
    {
      year: "2021",
      title: "Official Launch",
      description:
        "After 20+ pilots, KnowGrow officially launched with adaptive learning paths and mentor-supported courses.",
      image: storyC,
    },
    {
      year: "Today",
      title: "Growing Impact",
      description:
        "Serving learners globally with an ever-expanding curriculum and a vibrant, supportive community.",
      image: heroAlt,
    },
  ];

  const team = [
    { name: "Dr. Emily Chen", role: "CEO & Co‑Founder", background: "Former professor; 15+ years in EdTech and student success." },
    { name: "Michael Rodriguez", role: "CTO & Co‑Founder", background: "Ex‑Google; leads platform architecture and AI initiatives." },
    { name: "Dr. Sarah Johnson", role: "Head of Learning Science", background: "Learning design and assessment expert." },
  ];

  const values = [
    { icon: BookOpen, title: "Learner‑Centric", desc: "Everything begins with the learner’s goals and context." },
    { icon: Users, title: "Inclusivity", desc: "Accessible, supportive learning for all backgrounds." },
    { icon: Heart, title: "Continuous Growth", desc: "Relentless improvement through feedback and reflection." },
    { icon: Globe, title: "Evidence‑Based", desc: "Informed by research; validated by results." },
  ];

  const stats = [
    { label: "Active Learners", value: "500k+" },
    { label: "Countries Reached", value: "42" },
    { label: "Education Partners", value: "250+" },
    { label: "User Retention Rate", value: "85%" },
  ];

  const partners = [
    { name: "EduBridge", abbr: "EB" },
    { name: "Harbor Univ.", abbr: "HU" },
    { name: "MSF", abbr: "MSF" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pt-28 pb-16 bg-[#E8F8ED]"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center pt-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About <span className="bg-gradient-growth bg-clip-text text-transparent">KnowGrow</span>
              </h1>
              <p className="text-lg md:text-xl text-[#025928] text-muted-foreground mb-8 max-w-xl">
              Our Journey to Transform Education
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              We're on a mission to make education more personalized, accessible, and effective through the power of adaptive AI technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">Join Our Community</Button>
                <Button variant="secondary" size="lg" className="border-border">Start Free Trial</Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-growth">
                <img
                  src="lovable-uploads\about-knowgrow.png"
                  alt="About KnowGrow page preview"
                  loading="lazy"
                  className="w-full rounded-xl shadow-growth object-cover object-fit object-center"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Story Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TimelineSection />
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-subtle"
        >
        <div className="bg-[#e8f8ed] h-[500.5px] relative shrink-0 w-full">
      <div className="absolute h-[372.5px] left-52 top-16 w-[1024px]">
        {/* Mission Card */}
        <div className="absolute bg-[#ffffff] h-[372.5px] left-0 overflow-clip rounded-lg shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[480px]">
          <div className="absolute bg-[rgba(10,191,83,0.1)] left-8 rounded-[9999px] size-[62px] top-8">
            <div className="absolute left-4 size-[30px] top-4">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 30 30"
              >
                 <g clipPath="url(#clip0_1_637)">
                   <path d="M15 4C10.582 4 7 7.582 7 12s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8Zm0 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6Zm-1 3v6l5-3-5-3Z" fill="#0ABF53" />
                 </g>
                <defs>
                  <clipPath id="clip0_1_637">
                    <rect fill="white" height="30" width="30" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="absolute box-border content-stretch flex flex-row h-8 items-center justify-start left-8 p-0 top-[117px] w-[416px]">
            <div className="flex flex-col font-['Montserrat:Bold',_sans-serif] font-bold h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#025928] text-[24px] text-left text-nowrap">
              <p className="block leading-[32px] whitespace-pre">Our Mission</p>
            </div>
          </div>

          <div className="absolute h-[175.5px] left-8 top-[165px] w-[416px]">
            <div className="absolute flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[174px] justify-center leading-[0] left-0 overflow-ellipsis overflow-hidden text-[18px] text-gray-700 text-left top-[87.13px] translate-y-[-50%] w-[413.656px]" style={{ WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>
              <p className="block leading-[29.25px]">{`To democratize education through adaptive technology that responds to each learner's unique needs, making high-quality education accessible, engaging, and effective for everyone, regardless of their background or learning style.`}</p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="absolute bg-[#ffffff] h-[372.5px] left-[544px] overflow-clip rounded-lg shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[480px]">
          <div className="absolute bg-[rgba(10,191,83,0.1)] left-8 rounded-[9999px] size-[62px] top-8">
            <div className="absolute left-4 size-[30px] top-4">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 30 30"
              >
                 <g clipPath="url(#clip0_1_664)">
                   <path d="M15 4C10.029 4 6 8.029 6 13s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9Zm0 2c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7Zm-1 3v8l6-4-6-4Z" fill="#0ABF53" />
                 </g>
                <defs>
                  <clipPath id="clip0_1_664">
                    <rect fill="white" height="30" width="30" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="absolute box-border content-stretch flex flex-row h-8 items-center justify-start left-8 p-0 top-[117px] w-[416px]">
            <div className="flex flex-col font-['Montserrat:Bold',_sans-serif] font-bold h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#025928] text-[24px] text-left text-nowrap">
              <p className="block leading-[32px] whitespace-pre">Our Vision</p>
            </div>
          </div>

          <div className="absolute h-[146.25px] left-8 top-[165px] w-[416px]">
            <div className="absolute flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[145px] justify-center leading-[0] left-0 overflow-ellipsis overflow-hidden text-[18px] text-gray-700 text-left top-[72.5px] translate-y-[-50%] w-[412.906px]" style={{ WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>
              <p className="block leading-[29.25px]">
                A world where everyone has access to personalized education that
                adapts to their needs, empowering them to reach their full potential.
                We envision AI-powered learning as the great equalizer in global
                education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </motion.section>

        {/* Leadership Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 bg-background"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Meet Our Leadership Team</h2>
              <p className="text-muted-foreground">A community of builders, educators, and researchers.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((m) => (
                <Card key={m.name} className="hover:shadow-growth transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-growth mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-1">{m.name}</h3>
                    <p className="text-primary font-medium mb-2">{m.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.background}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-subtle"
        >
        <div className="bg-[#e8f8ed] h-[567px] relative shrink-0 w-full">
      <div className="absolute box-border content-stretch flex flex-row h-9 items-center justify-center p-0 top-16 w-full">
        <div className="flex flex-col font-['Montserrat:Bold',_sans-serif] font-bold h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#025928] text-[30px] text-center text-nowrap">
          <p className="[text-overflow:inherit] block leading-[36px] overflow-inherit whitespace-pre">
            Our Core Values
          </p>
        </div>
      </div>

      <div className="absolute box-border content-stretch flex flex-row h-6 items-center justify-center left-1/2 -translate-x-1/2 p-0 top-[116px] w-[672px]">
        <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap">
          <p className="[text-overflow:inherit] block leading-[24px] overflow-inherit whitespace-pre">
            The principles that guide everything we do at KnowGrow.
          </p>
        </div>
      </div>

      <div className="absolute h-[315px] left-1/2 -translate-x-1/2 top-[188px] w-[1024px]">
        <div className="grid grid-cols-4 gap-8 h-full w-full">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#ffffff] h-[315px] overflow-clip rounded-xl shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-[232px] flex flex-col items-center relative"
              style={{ gridColumn: `${index + 1} / span 1` }}
            >
              <div className="bg-[rgba(10,191,83,0.1)] rounded-[9999px] size-14 mt-6 flex items-center justify-center">
                <div className="h-[19.2px] w-6 text-[#0ABF53]">
                  <value.icon className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-row h-7 items-center justify-center mt-8 w-[184px]">
                <div className="flex flex-col font-['Montserrat:Bold',_sans-serif] font-bold h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#025928] text-[20px] text-center text-nowrap w-full">
                  <p className="[text-overflow:inherit] block leading-[28px] overflow-inherit whitespace-pre">
                    {value.title}
                  </p>
                </div>
              </div>

              <div className="h-[72px] mt-6 w-[184px] flex items-center justify-center">
                <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[72px] justify-center leading-[0] overflow-ellipsis overflow-hidden text-[16px] text-center text-gray-600 w-[180px]" style={{ WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>
                  <p className="block leading-[24px]">
                    {value.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 bg-background"
        style={{
          background: "linear-gradient(to bottom, #E8F8ED 0%, rgba(10,191,83,0.3) 50%, #E8F8ED 100%)",
          borderRadius: "1.5rem",
          padding: "3rem 1rem"
          }}
          >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join the KnowGrow Community</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a movement transforming how the world learns. Your growth journey starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-8">Start Your Free Trial</Button>
              <Button variant="secondary" size="lg" className="px-8 border-border">Contact Us</Button>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
