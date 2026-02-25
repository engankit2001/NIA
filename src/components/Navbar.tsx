import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Membership', path: '/membership' },
  { name: 'Donations', path: '/donations' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-nia-orange rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                NIA
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-nia-blue leading-none">NIA</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Netherlands India Org</span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-nia-orange/10 text-nia-orange"
                    : "text-slate-600 hover:text-nia-orange hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/membership" className="ml-4 btn-primary text-sm">
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium",
                location.pathname === link.path
                  ? "bg-nia-orange/10 text-nia-orange"
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/membership"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center btn-primary mt-4"
          >
            Join Us
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
