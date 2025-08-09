import { Brain, Mail, Phone, MapPin, Youtube, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Courses", href: "#courses" },
      { name: "Pricing", href: "#pricing" },
      { name: "For Teams", href: "#teams" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Community", href: "#community" },
      { name: "Blog", href: "#blog" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Partners", href: "#partners" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ]
  };

  const socialLinks = [
    { icon: Youtube, href: "#youtube", label: "YouTube" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Instagram, href: "#instagram", label: "Instagram" }
  ];

  return (
    <footer className="bg-[#025928] text-background">
      {/* Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 z-50 shadow-growth">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm">👋 Ready to Learn?</div>
            <div className="text-xs opacity-90">Start your journey today</div>
          </div>
          <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
            Start Free
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 bg-[#025928]">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">KnowGrow</span>
            </div>
            
            <p className="text-background/80 mb-6 max-w-sm">
              Empowering students across India with AI-powered adaptive learning. 
              Learn at your pace, grow at your speed.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@knowgrow.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-smooth text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-smooth text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-smooth text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-smooth text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-background/60 text-sm">
              © 2024 KnowGrow. All rights reserved. Made with ❤️ for Indian students.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-smooth"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;