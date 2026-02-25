import { motion } from 'motion/react';
import { Heart, ShieldCheck, Globe, Gift } from 'lucide-react';

export default function Donations() {
  const amounts = [10, 25, 50, 100, 250, 500];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-nia-blue mb-6">Support Our Cause</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Your contributions help us keep cultural traditions alive and support community members in need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Why Donate */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-nia-blue">How Your Donation Helps</h2>
            <div className="space-y-6">
              {[
                { icon: <Globe className="text-nia-blue" />, title: "Cultural Preservation", desc: "Funding for festivals, language classes, and traditional arts workshops." },
                { icon: <Heart className="text-nia-orange" />, title: "Community Welfare", desc: "Support programs for seniors, students, and families in transition." },
                { icon: <Gift className="text-nia-green" />, title: "Youth Programs", desc: "Developing initiatives for the next generation to connect with their roots." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-green-50 rounded-3xl border border-green-100 flex items-start gap-4">
              <ShieldCheck className="text-green-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-green-800">Secure & Transparent</h4>
                <p className="text-sm text-green-700">NIA is a registered non-profit. All donations are handled securely and used exclusively for community projects.</p>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-serif font-bold text-nia-blue mb-8 text-center">Make a Donation</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-4">Select Amount (EUR)</label>
                <div className="grid grid-cols-3 gap-4">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      className="py-3 rounded-xl border-2 border-slate-100 hover:border-nia-orange hover:bg-nia-orange/5 font-bold transition-all"
                    >
                      €{amt}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-nia-orange outline-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-slate-700">Frequency</label>
                <div className="flex gap-4">
                  <button className="flex-1 py-3 rounded-xl bg-nia-orange text-white font-bold">One-time</button>
                  <button className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">Monthly</button>
                </div>
              </div>

              <button className="w-full btn-primary py-4 text-lg">
                Proceed to Payment
              </button>
              
              <p className="text-center text-xs text-slate-400">
                By donating, you agree to our terms and privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
