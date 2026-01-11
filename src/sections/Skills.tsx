import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Terminal,
  Globe,
  Cpu,
  Palette,
  Server
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      title: 'Frameworks',
      icon: Layout,
      skills: ['React.js', 'Next.js', 'Redux', 'Context API'],
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      title: 'UI & Styling',
      icon: Palette,
      skills: ['Tailwind CSS', 'Material UI', 'Bootstrap'],
      color: 'text-pink-400',
      bg: 'bg-pink-400/10'
    },
    {
      title: 'State Management',
      icon: Cpu,
      skills: ['Redux Toolkit', 'React Query'],
      color: 'text-purple-400',
      bg: 'bg-purple-400/10'
    },
    {
      title: 'API & Data',
      icon: Server,
      skills: ['REST APIs', 'Fetch API', 'Axios'],
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
      color: 'text-orange-400',
      bg: 'bg-orange-400/10'
    },
    {
      title: 'Core Concepts',
      icon: Globe,
      skills: ['Responsive Design', 'Performance', 'SEO', 'a11y'],
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10'
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 md:py-32 bg-[#0b0716] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 sm:mb-20 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive toolset for building modern digital experiences
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 h-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={category.color} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-white/5 text-slate-300 border border-white/5 rounded-full text-xs sm:text-sm font-medium hover:bg-accent/20 hover:text-white hover:border-accent/30 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
