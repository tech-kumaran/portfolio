import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const currentMonthYear = new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' });

  const experiences = [
    {
      period: `Oct 2024 - ${currentMonthYear}`,
      role: 'Software Engineer',
      company: 'Qoruz',
      location: 'Bengaluru, Karnataka, India',
      responsibilities: [
        'Developed and maintained complex React.js applications with modular and reusable components',
        'Migrated legacy frontend modules to modern React-based architecture, improving maintainability and performance by refactoring old class-based components into functional ones with hooks.',
        'Optimized application performance and improved page load times by 30%',
        'Collaborated with backend, design, and QA teams for smooth feature delivery across Authentication, Subscription, and Analytics dashboards',
        'Built custom hooks to improve code reusability and reduced duplication by 40%',
        'Mentored junior developers and performed regular code reviews'
      ]
    },
    {
      period: 'Aug 2022 - Nov 2024',
      role: 'Junior Software Engineer',
      company: 'Qoruz',
      location: 'India',
      responsibilities: [
        'Implemented dynamic UI features with conditional rendering and multiple data states (loading, empty, error)',
        'Built interactive data visualizations using Highcharts for influencer insights and market trends',
        'Managed asynchronous data integration using REST APIs, Promises, and Axios',
        'Created responsive layouts for complex marketing modules and internal dashboards',
        'Utilized Tailwind CSS for efficient and scalable styling'
      ]
    },
    {
      period: 'Oct 2021 - Jul 2022',
      role: 'Internship Trainee',
      company: 'Qoruz',
      location: 'India',
      responsibilities: [
        'Supported the product team in developing and testing reusable UI components',
        'Assisted in the implementation of the company’s design system using Bootstrap and CSS',
        'Learned and applied frontend best practices in a fast-paced production environment'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 bg-[#0b0716] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Work Experience
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 sm:mb-24 max-w-2xl mx-auto text-lg leading-relaxed">
            My professional journey and key contributions
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-slate-700 to-transparent transform sm:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-24">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`relative flex flex-col sm:flex-row gap-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}>

                  {/* Timeline Node */}
                  <div className="absolute left-[28px] sm:left-1/2 w-4 h-4 bg-[#0b0716] border-[3px] border-accent rounded-full z-20 transform -translate-x-1/2 mt-1.5 sm:mt-8 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

                  {/* Date Badge (Mobile: Hidden inside card, Desktop: Opposite side) */}
                  <div className={`hidden sm:flex flex-1 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                    <div className="mt-6 flex items-center gap-2 text-slate-400 font-medium">
                      <Calendar size={18} className="text-accent" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 ml-12 sm:ml-0">
                    <motion.div
                      whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)' }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative group overflow-hidden transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        {/* Mobile Date */}
                        <div className="flex sm:hidden items-center gap-2 text-accent text-sm font-bold mb-3">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.role}</h3>

                        <div className="flex items-center gap-2 text-slate-300 mb-6 font-medium">
                          <Briefcase size={16} className="text-blue-400" />
                          <span>{exp.company}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-sm text-slate-400">{exp.location}</span>
                        </div>

                        <ul className="space-y-4">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-3 text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                              <span className="text-accent mt-[5px] text-lg leading-none active">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
