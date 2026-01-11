import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ background: 'linear-gradient(90deg, #0b0716 0%, #110720 100%)' }}
      className="text-slate-300 py-8"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Kumaran. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm flex items-center justify-center gap-2">
            Built with
            <Heart size={16} className="ml-1 text-pink-500 fill-pink-500 transition-transform duration-200 ease-in-out hover:scale-110" />
            using React, TypeScript & Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
