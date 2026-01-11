import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Codesandbox } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import ProfileImage from '../components/ProfileImage';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden bg-[#0b0716] px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto relative z-10 w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 w-full text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-slate-200 text-xs font-bold tracking-wide uppercase">Available for work</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-purple-400 to-blue-500 animate-gradient">
                M. Kumaran
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Frontend Developer specializing in building <span className="text-white font-bold">exceptional digital experiences</span> with React & Next.js.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto group relative px-8 py-4 bg-accent text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">View My Work</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 sm:gap-6 justify-center lg:justify-start items-center">
              {[
                { icon: Github, href: "https://github.com/kumaran", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/m-kumaran-435611187/", label: "LinkedIn" },
                { icon: Codesandbox, href: "https://codesandbox.io/dashboard/recent?workspace=ws_CMvEAebhLKtt9pmzDCJhyF", label: "CodeSandbox" },
                { icon: Mail, href: "mailto:kumarandev.tech@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="sm:w-6 sm:h-6" />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-600 rounded-full blur-[80px] sm:blur-[100px] opacity-40 sm:opacity-50 animate-pulse" />
              <ProfileImage className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-500 flex justify-center p-2 bg-white/5 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
