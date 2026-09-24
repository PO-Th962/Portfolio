import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
const projects = [
  {
    title: "Center Food - Intelligent Food Inventory Management System",
    description:
      "A centralized platform designed to optimize food stock tracking and reduce waste through real-time data analysis.",
    image: "/projects/CenterFood.jpg",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MySQL",
      "JWT",
      "Node.js",
      "Express",
      "React",
    ],
    link: "https://webtechcmru.info/",
    linkAdmin: "https://webtechcmru.info/admin/",
    linkGit: "https://github.com/panithan-dev/Center-Food",
  },

  {
    title: "Interactive Developer Portfolio",
    description:
      "A high-performance personal portfolio developed to showcase technical expertise & digital projects. Built with Vite and React for lightning-fast user experience and Tailwind CSS for a modern, responsive interface.",
    image: "/projects/React_profile.jpg",
    tags: ["Vite", "React", "Tailwind CSS", "EmailJS"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-2xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex enterprise-grade
            applications to innovative side projects. Each project demonstrates
            my commitment to quality, performance, and user experience.
          </p>
        </div>
        {/* project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60  " />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl glass hover:bg-primary hover:text-white transition-all transform hover:scale-105 group/link"
                  >
                    <ExternalLink className="w-6 h-6" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">
                      Visit Site
                    </span>
                  </a>
                  {project.linkAdmin && (
                    <a
                      href={project.linkAdmin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-xl glass hover:bg-highlight hover:text-white transition-all transform hover:scale-105 group/link"
                    >
                      <ShieldCheck className="w-6 h-6" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">
                        Admin Panel
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between group">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface 
                    text-[10px] uppercase tracking-wider font-semibold border border-border/50 
                    text-muted-foreground hover:border-primary/50 
                    hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary flex items-center gap-1.5 hover:underline decoration-2 underline-offset-4"
                  >
                    LIVE DEMO <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  {project.linkAdmin && (
                    <a
                      href={project.linkAdmin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-muted-foreground flex items-center gap-1.5 hover:text-highlight transition-colors"
                    >
                      ADMIN PANEL <ShieldCheck className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};
