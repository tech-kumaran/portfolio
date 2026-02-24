import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Qoruz App – Influencer Marketing Platform",
      description:
        "Worked on Qoruz’s core B2B application used by brands and agencies to manage influencer campaigns, subscriptions, and performance analytics.",
      tech: [
        "React.js",
        "JavaScript",
        "Styled Components",
        "Redux",
        "REST APIs",
      ],
      features: [
        "Migrated legacy frontend modules to modern React using hooks",
        "Built and maintained influencer campaign dashboards and analytics",
        "Handled complex API-driven UI states and large datasets",
        "Developed subscription, plan summary, and access control modules",
        "Improved performance, UX, and maintainability of production features",
      ],
      liveUrl: "https://app.qoruz.com/",
      image: "/images/qoruz.png",
    },
    {
      title: "Qoruz Website – Marketing & Public Pages",
      description:
        "Contributed to the Qoruz public website focusing on performance, UI improvements, and content-driven pages for user acquisition.",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Developed responsive landing pages and marketing sections",
        "Improved SEO-friendly components and page performance",
        "Implemented reusable UI components for consistent branding",
        "Collaborated with design and product teams for UI enhancements",
      ],
      liveUrl: "https://qoruz.com/",
      image: "/images/qoruz_website.png",
    },
    {
      title: "HashFame – Influencer Marketing Platform",
      description:
        "A professional space where creators and brands connect with clarity, discover real opportunities, and build partnerships that move work forward.",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Built responsive and SEO-optimized pages to support fast influencer discovery",
        "Implemented UI flows that help brands connect with creators in seconds",
        "Developed reusable components aligned with HashFame’s brand identity",
        "Optimized performance and accessibility for public-facing pages",
        "Collaborated with product and design teams to improve conversion-focused UX",
      ],
      liveUrl: "https://hashfame.com/",
      image: "/images/hashfame.png",
    },
    {
      title: "YouTube Clone",
      description:
        "A high-fidelity YouTube clone built for a seamless video streaming experience.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "JavaScript",
        "YouTube API",
      ],
      features: [
        "Integrated YouTube Data API for real-time video fetching and search",
        "Implemented complex state management using Redux for video playback",
        "Developed a responsive UI with Tailwind CSS",
        "Optimized performance with lazy loading and efficient API consumption",
      ],
      liveUrl: "https://ytgamma.vercel.app/",
      image: "/images/youtube.png",
    },

    {
      title: "Todo Application",
      description:
        "A modern task management application focused on efficient state handling and clean UI.",
      tech: ["React.js (Vite)", "JavaScript", "Redux Toolkit"],
      features: [
        "Create, update, delete, and complete tasks",
        "Centralized state management using Redux Toolkit",
        "Integrated Dummy JSON API to simulate backend operations",
        "Reusable component architecture",
        "Responsive and user-friendly UI",
      ],
      liveUrl: "https://todo-techkumaran.vercel.app/",
      image: "/images/todo.png",
    },
    {
      title: "Zomato Clone",
      description:
        "A frontend clone of the Zomato platform showcasing restaurant listings and food menus.",
      tech: ["React.js", "TypeScript", "Redux Toolkit"],
      features: [
        "Restaurant and food item listing using dummy JSON data",
        "Search and filter functionality",
        "Global state management with Redux Toolkit",
        "Type-safe implementation using TypeScript",
        "Scalable and modular component structure",
      ],
      liveUrl: "https://zomato-techkumar.vercel.app",
      image: "/images/zomoto.png",
    },
    {
      title: "E-Commerce Product App",
      description:
        "An e-commerce product listing application built with Next.js and modern UI styling.",
      tech: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
      features: [
        "Product listing and product detail pages",
        "State management using Redux Toolkit",
        "Dummy JSON API integration for product data",
        "Responsive UI built with Tailwind CSS",
        "SEO-friendly and scalable Next.js architecture",
      ],
      liveUrl: "https://e-commerce-product-puce.vercel.app/",
      image: "/images/ecommerce.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive developer portfolio website built using TypeScript, Vite, and Tailwind CSS to showcase projects, skills, and experience.",
      tech: ["TypeScript", "Vite", "Tailwind CSS"],
      features: [
        "Strong type safety using TypeScript interfaces",
        "Project and skills showcase with clean UI",
        "Fast build and hot module replacement powered by Vite",
        "Fully responsive layout using Tailwind CSS",
        "Optimized performance and clean component structure",
      ],
      liveUrl: "",
      image: "/images/portfolio.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 md:py-32 bg-[#0b0716] text-white overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 sm:mb-20 max-w-2xl mx-auto text-lg leading-relaxed">
            Showcasing complex problem-solving and full-stack capabilities
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={0.1 + (index % 3) * 0.1}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0716] via-transparent to-transparent z-10 opactiy-80" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-accent hover:text-white transition-colors border border-white/10"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-medium rounded-full border border-white/5 group-hover:border-accent/20 group-hover:text-accent/80 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
