import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nia-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-nia-orange rounded-lg flex items-center justify-center text-white font-bold text-xl">
                NIA
              </div>
              <span className="text-2xl font-serif font-bold">NIA</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Bridging cultures and communities between the Netherlands and India. Promoting heritage, supporting integration, and celebrating diversity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-nia-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-nia-orange transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-nia-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-nia-orange transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/about" className="hover:text-nia-orange transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-nia-orange transition-colors">Events</Link></li>
              <li><Link to="/membership" className="hover:text-nia-orange transition-colors">Membership</Link></li>
              <li><Link to="/blog" className="hover:text-nia-orange transition-colors">Blog</Link></li>
              <li><Link to="/gallery" className="hover:text-nia-orange transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/donations" className="hover:text-nia-orange transition-colors">Donate</Link></li>
              <li><Link to="/contact" className="hover:text-nia-orange transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-nia-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-nia-orange transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-nia-orange transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-nia-orange shrink-0" />
                <span>Amsterdam, Netherlands</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-nia-orange shrink-0" />
                <span>+31 (0) 20 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-nia-orange shrink-0" />
                <span>info@nia-org.nl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} Netherlands India Organization (NIA). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
