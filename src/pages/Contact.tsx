import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setIsSent(true);
      reset();
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-nia-blue mb-6">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-nia-orange/10 rounded-xl flex items-center justify-center text-nia-orange shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Email Us</h3>
                  <p className="text-slate-500">info@nia-org.nl</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-nia-blue/10 rounded-xl flex items-center justify-center text-nia-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Call Us</h3>
                  <p className="text-slate-500">+31 (0) 20 123 4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-nia-green/10 rounded-xl flex items-center justify-center text-nia-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Visit Us</h3>
                  <p className="text-slate-500">Amsterdam, Netherlands</p>
                </div>
              </div>
            </div>

            <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/map/400/300" 
                alt="Map placeholder" 
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2">
                  <MapPin size={16} className="text-nia-orange" /> NIA Office
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Your Name</label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-nia-orange outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-nia-orange outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Subject</label>
                  <input
                    {...register('subject', { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-nia-orange outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-nia-orange outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium"
                  >
                    Thank you! Your message has been sent.
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
