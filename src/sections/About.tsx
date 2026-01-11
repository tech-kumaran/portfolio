import { AnimatedSection } from '../components/AnimatedSection';
import { Code2, GraduationCap, Rocket } from 'lucide-react';

export function About() {
  const calculateExperience = () => {
    const startDate = new Date('2021-10-01');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears.toFixed(1);
  };

  const experienceYears = calculateExperience();

  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 bg-[#0b0716] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-16 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              About Me
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Passionate about building <span className="text-accent">modern user experiences</span>
              </h3>

              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  I’m a <span className="text-white font-semibold">Frontend Developer with {experienceYears}+ years of experience</span> specializing in building scalable, high-performance web applications using React.js, Next.js, and TypeScript.
                </p>
                <p>
                  My expertise lies in <span className="text-white font-semibold">Next.js features</span> like SSR, SSG, and performance optimization. I treat every project as an opportunity to write clean, maintainable code and deliver pixel-perfect user interfaces.
                </p>
                <p>
                  Beyond coding, I focus on <span className="text-white font-semibold">component reusability</span> and <span className="text-white font-semibold">application architecture</span> to ensure long-term scalability.
                </p>
              </div>

              <div className="pt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 text-accent font-medium text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Open to new opportunities
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Experience",
                description: `${experienceYears}+ Years Building Web Apps`,
                value: `${Math.floor(parseFloat(experienceYears))}+`,
                icon: Code2,
                color: "text-blue-400",
                bg: "bg-blue-400/10"
              },
              {
                title: "Achievements",
                description: "Zero Critical Bugs in Prod",
                value: "100%",
                icon: Rocket,
                color: "text-purple-400",
                bg: "bg-purple-400/10"
              },
              {
                title: "Education",
                description: "M.Sc in Computer Science",
                value: "2021",
                icon: GraduationCap,
                color: "text-emerald-400",
                bg: "bg-emerald-400/10"
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={0.4 + index * 0.1}>
                <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group ${index === 2 ? 'sm:col-span-2' : ''
                  }`}>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <div className={`text-3xl font-bold mb-1 ${item.color}`}>{item.value}</div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
