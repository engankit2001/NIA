import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="py-24 bg-nia-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Founded in 1985, NIA has been the heartbeat of the Indian community in the Netherlands for nearly four decades.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
          <img 
            src="https://picsum.photos/seed/history/800/800" 
            alt="History" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-nia-orange/10 rounded-2xl flex items-center justify-center text-nia-orange mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-nia-blue mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To promote Indian culture, heritage, and values in the Netherlands while facilitating the successful integration of the Indian diaspora into Dutch society. We strive to be a bridge that connects two rich cultures.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-nia-green/10 rounded-2xl flex items-center justify-center text-nia-green mb-6">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-nia-blue mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                A vibrant, inclusive, and empowered Indo-Dutch community that contributes significantly to the social, cultural, and economic fabric of the Netherlands while maintaining strong ties with India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-nia-blue mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-nia-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-red-500" />, title: "Inclusivity", desc: "Welcoming everyone regardless of background." },
              { icon: <Award className="text-yellow-500" />, title: "Excellence", desc: "Striving for the highest quality in our events." },
              { icon: <Globe className="text-blue-500" />, title: "Unity", desc: "Bringing people together across borders." },
              { icon: <Target className="text-green-500" />, title: "Integrity", desc: "Operating with transparency and honesty." },
            ].map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
