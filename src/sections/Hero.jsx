import { Button } from "@/components/button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { scrollToSection } from "../utils/scroll";
import resumeFile from "../assets/Panithan_Resume.pdf";

const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "TailwindCSS",
  "Python",
  "PostgreSQL",
  "Git",
  "Figma",
  "Next.js",
  "PostgreSQL",
  "Express.js",
  "React Native",
  "Vite",
  "Java",
  "Kotlin",
  "MongoDB",
  "Docker",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* {Bg} */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-event-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            key={i}
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Science
              </span>

              {/* Headline  */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                  Crafting
                  <span className="text-primary glow-text">Digital</span>
                  <br />
                  Experience with
                  <br />
                  <span className="font-serif italic font-normal text-white">
                    Precision
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                  Recent Computer Science graduate with expertise in Network
                  Administration and Database Management. Focused on providing
                  robust technical solutions and maintaining secure IT
                  infrastructures to support business operations.
                </p>
              </div>
              {/* CTAs */}
              <div className="flex flex-wrap gap-6 mt-12 animate-fade-in animation-delay-300">
                <Button size="lg" onClick={() => scrollToSection("#contact")}>
                  <span>Contact Me</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <a href={resumeFile} download="Panithan_Resume.pdf">
                  <AnimatedBorderButton>
                    <Download className="w-5 h-5" />
                    Download Resume
                  </AnimatedBorderButton>
                </a>
              </div>

              {/* Social Links */}
              {/* <div className="flex items-center gap-4 mt-8 animate-fade-in animation-delay-400">
                <span className="text-muted-foreground">Follow me:</span>
                <div className="flex items-center gap-4">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        className="glass p-2 rounded-full text-muted-foreground hover:text-primary transition-all hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent to-transparent 
              blur-2xl animate-pulse"
              />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/Profile-image.jpg"
                  alt="Pual Maezaio"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xl font-bold text-primary">0</div>
                  <div className="text-xs text-muted-foreground">
                    Years of experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Tags Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Technologies i work with
          </p>
          <div className="relative overflow-hidden ">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-muted-foreground/50 text-xl font-semibold hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <div
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all cursor-pointer"
        >
          <span className="text-xs uppercase tracking-wider">scroll down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
