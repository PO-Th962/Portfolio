import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Analyzing and designing information systems to improve workflow efficiency.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Ensuring data integrity and security through robust database management.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Dedicated to troubleshooting and providing effective technical support.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying updated with modern digital tools and government e-service standards.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*  Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm tracking-wider uppercase">
                About me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Computer Science graduate from Chiang Mai Rajabhat
                University with a strong passion for Information Technology and
                Digital Solutions. I specialize in analyzing complex problems
                and implementing efficient technology to drive organizational
                success.
              </p>
              <p>
                I have a solid foundation in System Analysis, Database
                Management, and Network Infrastructure. My approach combines
                technical theoretical knowledge with a keen eye for practical
                application and user-centric design.
              </p>
              <p>
                When I'm not exploring new tech trends, you'll find me analyzing
                data, optimizing system workflows, or sharing technology
                insights within the community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className=" text-lg font-medium italic text-muted-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful - products that users love to
                use and developers love to maintain.
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className=" grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 animate-fade-in "
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
