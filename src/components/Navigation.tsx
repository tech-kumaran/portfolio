import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.replace('#', '')).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(href.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`relative flex items-center justify-between w-full max-w-5xl h-16 sm:h-20 px-6 sm:px-8 rounded-2xl transition-all duration-500 border border-white/10 ${isScrolled
            ? 'bg-slate-900/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)] scale-95'
            : 'bg-slate-900/20 backdrop-blur-md shadow-none scale-100'
            }`}
        >
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <motion.button
            onClick={() => scrollToSection('#')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 flex items-center gap-3 text-xl font-bold text-white tracking-tight"
          >
            <img src="/images/logo-round.svg" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
            <span>Kumaran<span className="text-blue-500">.</span></span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1 relative z-10">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId || (item.href === '#' && activeSection === '');

              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative rounded-xl ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-dock-pill"
                      className="absolute inset-0 bg-blue-600/20 border border-blue-500/20 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:block px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-blue-600/20"
            >
              Contact
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-3 text-slate-400 hover:text-white bg-white/5 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navItems.map((item, index) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId || (item.href === '#' && activeSection === '');

                return (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full py-4 text-2xl font-bold rounded-2xl border transition-all ${isActive
                      ? 'bg-blue-600/10 text-blue-500 border-blue-500/20 scale-105'
                      : 'text-slate-400 border-transparent hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-4 py-4 bg-blue-600 text-white text-xl font-bold rounded-2xl shadow-xl shadow-blue-600/20"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
