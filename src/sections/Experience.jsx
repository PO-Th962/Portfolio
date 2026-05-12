const experience = [
  {
    period: "2025 - 2026",
    date: "Oct 2025-10-27 - 2025-02-06",
    role: "Junior Developer",
    company: "IT Intern | Wisesoft Co., Ltd.",
    description:
      "Participated in the migration and modernization of the Government Electronic Procurement System (e-GP) from version 4 to 5 (GGP5). Responsible for refactoring and re-developing legacy code into a modern architecture.",
    responsibilities: [
      "Frontend Development: Developed and implemented responsive web interfaces (HTML/CSS) following strictly defined UI/UX Prototypes.",
      "API Integration: Successfully integrated frontend components with backend services by verifying and testing data structures through Swagger UI.",
      "System Migration: Collaborated with the development team to ensure seamless data flow and functionality during the transition from the legacy system to the new version.",
    ],
    technologies: [
      "Java",
      "TypeScript",
      "Spring Boot",
      "Docker",
      "MySQL",
      "Git",
      "Angular",
      "Node.js",
    ],
    current: true,
  },

  {
    period: "2025",
    date: "2025-04-16 - 2025-09-20",
    role: "Personal Project",
    company: "-",
    description:
      "Developed a centralized food inventory management system using MongoDB and the MERN stack. Designed the system architecture to handle real-time tracking and automated alerts, resulting in improved resource efficiency.",
    responsibilities: [
      "System Analysis & Design: Conducted requirements gathering and designed the system architecture, focusing on a centralized food resource management solution.",
      "Full-stack Development: Developed both frontend and backend using the MERN Stack (MongoDB, Express, React, Node.js) to ensure seamless data flow.",
      "Database Engineering (MongoDB): Designed and managed a NoSQL database schema, utilizing MongoDB’s flexibility to handle diverse food categories and expiration data.",
      "Feature Implementation: Built core functionalities such as Real-time Inventory Tracking, Automated Expiration Alerts, and an Analytical Reporting Dashboard.",
      "Security & Optimization: Implemented JWT Authentication for secure user access and optimized API queries to improve system performance.",
      "Testing & Debugging: Performed rigorous testing to ensure data integrity and a bug-free user experience across various devices.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Node.js",
      "Express",
      "React",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider uppercase 
          animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 
          animate-fade-in animation-delay-100 
          text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes
            </span>
          </h2>

          <p
            className="text-muted-foreground 
          animate-fade-in animation-delay-200"
          >
            As a fresh graduate in Computer Science, I have dedicated my
            academic years to mastering the fundamentals of system logic and
            modern technology. My journey involved hands-on experience through
            academic projects, where I developed a strong ability to analyze
            requirements and deliver efficient digital solutions. Throughout my
            studies, I have been fortunate to collaborate with mentors and peers
            who challenged me to think critically. I am now eager to bring my
            technical skills and fresh perspectives to a professional team,
            ready to contribute and grow within a dynamic organization.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="timeline-glow absolute left-0 md:left-1/2 
            top-0 bottom-0 w-[2px] bg-gradient-to-b 
            from-primary/70 via-primary/30 to-transparent 
            md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
          />

          {/* Experiences items */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-0 md:left-1/2 top-0 w-3 h-3 
                bg-primary rounded-full -translate-x-1/2 
                ring-4 ring-background z-10 "
                >
                  {exp.current && (
                    <div
                      className="absolute inset-0 
                  bg-primary rounded-full animate-ping opacity-75"
                    ></div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border 
                      border-primary/30 hover:border-primary/50 
                      transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-sm text-primary font-medium">
                      {exp.date}
                    </h3>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed italic border-l-2 border-primary/20 pl-4">
                      {exp.description}
                    </p>
                    {exp.responsibilities && (
                      <div className="mt-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-3 block">
                          Key Responsibilities:
                        </span>
                        <ul className={`space-y-3 text-sm text-muted-foreground ${idx % 2 === 0 ? "md:text-right" : "text-left"}`}>
                          {exp.responsibilities.map((item, resIdx) => (
                            <li key={resIdx} className={`flex gap-3 group/item ${idx % 2 === 0 ? "md:flex-row-reverse" : "flex-row"}`}>
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_var(--color-primary)] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                              <span className="flex-1 group-hover/item:text-foreground transition-colors leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
