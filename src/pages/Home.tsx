import { motion } from 'motion/react';
import { ArrowRight, Calendar, Users, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/culture/1920/1080"
            alt="Cultural background"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Bridging <span className="text-nia-orange">Netherlands</span> & <span className="text-nia-green">India</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-200 font-light leading-relaxed">
              The Netherlands India Organization (NIA) is dedicated to fostering cultural exchange, community support, and professional networking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/membership" className="btn-primary text-lg px-8 py-4">
                Become a Member
              </Link>
              <Link to="/events" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2">
                Explore Events <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-nia-blue mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-nia-orange mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide a platform for the Indian diaspora and Dutch friends to connect, celebrate, and grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="text-nia-orange" size={32} />,
                title: "Cultural Events",
                desc: "From Diwali to Holi, we host grand celebrations that bring the spirit of India to the Netherlands."
              },
              {
                icon: <Users className="text-nia-blue" size={32} />,
                title: "Community Support",
                desc: "Helping newcomers integrate, providing networking opportunities, and supporting local initiatives."
              },
              {
                icon: <Globe className="text-nia-green" size={32} />,
                title: "Bilateral Relations",
                desc: "Promoting business, educational, and cultural ties between the two great nations."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-nia-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-nia-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-nia-green/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
            Ready to join our vibrant community?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Membership gives you exclusive access to events, discounts, and a network of professionals and families.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/membership" className="btn-primary px-10 py-4 text-lg">
              Join NIA Today
            </Link>
            <Link to="/donations" className="bg-white text-nia-blue hover:bg-slate-100 px-10 py-4 rounded-full font-medium transition-all">
              Support Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
