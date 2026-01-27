import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual EmailJS Service ID, Template ID, and Public Key
      const serviceId = "service_7ss2hko";
      const templateId = "template_5sfdvsx";
      const publicKey = "OQuBFZR5iN-xfjg2C";

      await emailjs.sendForm(
        serviceId,
        templateId,
        e.target as HTMLFormElement,
        publicKey,
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 md:py-32 bg-[#0b0716] text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Get In Touch
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 sm:mb-20 max-w-2xl mx-auto text-lg leading-relaxed">
            Let's discuss how we can work together to build something amazing
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Contact Info Side */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col h-full space-y-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Connect Details
                </h3>
                <div className="space-y-6">
                  <a
                    href="mailto:kumarandev.tech@gmail.com"
                    className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">
                        Email
                      </p>
                      <p className="text-lg text-white font-bold group-hover:text-accent transition-colors">
                        kumarandev.tech@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/m-kumaran-435611187/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">
                        LinkedIn
                      </p>
                      <p className="text-lg text-white font-bold group-hover:text-blue-400 transition-colors">
                        /in/m-kumaran
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 transition-all group">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">
                        Location
                      </p>
                      <p className="text-lg text-white font-bold">
                        Bangalore, India
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:8695266945"
                    className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">
                        Phone
                      </p>
                      <p className="text-lg text-white font-bold group-hover:text-purple-400 transition-colors">
                        +91 86952 66945
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <motion.a
                href="public/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 rounded-2xl bg-gradient-to-r from-accent to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-accent/25 transition-all flex items-center justify-center gap-3 group"
              >
                <Download className="group-hover:animate-bounce" size={24} />
                Download Resume
              </motion.a>
            </div>
          </AnimatedSection>

          {/* Form Side */}
          <AnimatedSection delay={0.4}>
            <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-sm shadow-2xl h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send Message
              </h3>
              <p className="text-slate-400 mb-8">
                I usually respond within 24 hours
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex-1 flex flex-col"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-300 ml-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-accent focus:bg-white/5 transition-all text-white placeholder-slate-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-300 ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-accent focus:bg-white/5 transition-all text-white placeholder-slate-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-300 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-accent focus:bg-white/5 transition-all text-white placeholder-slate-500 h-32 resize-none"
                    placeholder="Project details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-auto rounded-xl bg-white text-black font-bold text-lg hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center font-medium"
                  >
                    Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center font-medium"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
