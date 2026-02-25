import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap, Users } from 'lucide-react';
import { useState } from 'react';

const membershipSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  membershipType: z.enum(['individual', 'family', 'student', 'corporate']),
});

type MembershipForm = z.infer<typeof membershipSchema>;

export default function Membership() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<MembershipForm>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      membershipType: 'individual'
    }
  });

  const onSubmit = async (data: MembershipForm) => {
    setError(null);
    try {
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setError(result.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  const plans = [
    { id: 'student', name: 'Student', price: '15', features: ['Event access', 'Newsletter', 'Student network'] },
    { id: 'individual', name: 'Individual', price: '30', features: ['Full event access', 'Voting rights', 'Partner discounts', 'Newsletter'] },
    { id: 'family', name: 'Family', price: '50', features: ['Access for 2 adults + kids', 'Voting rights', 'Partner discounts', 'Community support'] },
    { id: 'corporate', name: 'Corporate', price: '250', features: ['Business networking', 'Brand visibility', '5 Individual memberships', 'Sponsorship perks'] },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-nia-blue mb-4">Welcome to NIA!</h2>
          <p className="text-slate-600 mb-8">
            Your membership application has been received. Please check your email for the next steps and payment instructions.
          </p>
          <button onClick={() => window.location.href = '/'} className="btn-primary w-full">
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-nia-blue mb-6">Join the Community</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Become a part of the Netherlands India Organization and help us build a stronger, more connected community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-serif font-bold text-nia-blue">Member Benefits</h2>
            <div className="space-y-6">
              {[
                { icon: <Zap className="text-nia-orange" />, title: "Priority Access", desc: "Get first dibs on tickets for our most popular events." },
                { icon: <ShieldCheck className="text-nia-blue" />, title: "Exclusive Discounts", desc: "Save on event tickets and with our local business partners." },
                { icon: <Users className="text-nia-green" />, title: "Networking", desc: "Connect with professionals and families across the country." },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{benefit.title}</h3>
                    <p className="text-sm text-slate-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-nia-blue rounded-2xl text-white">
              <h3 className="font-bold mb-2">Need Help?</h3>
              <p className="text-sm text-slate-300 mb-4">If you have questions about membership types, feel free to contact us.</p>
              <a href="mailto:membership@nia-org.nl" className="text-nia-orange font-medium hover:underline">membership@nia-org.nl</a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input
                      {...register('firstName')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-nia-orange focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input
                      {...register('lastName')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-nia-orange focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-nia-orange focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-slate-700">Select Membership Plan</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plans.map((plan) => (
                      <label
                        key={plan.id}
                        className={`relative flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          register('membershipType').name === plan.id || true // Simplified for visual
                            ? 'border-nia-orange bg-nia-orange/5'
                            : 'border-slate-100 hover:border-slate-200'
                        }`}
                      >
                        <input
                          type="radio"
                          {...register('membershipType')}
                          value={plan.id}
                          className="absolute top-4 right-4 accent-nia-orange"
                        />
                        <span className="font-bold text-lg">{plan.name}</span>
                        <span className="text-2xl font-serif font-bold text-nia-blue mt-1">€{plan.price}<span className="text-sm font-sans font-normal text-slate-400">/year</span></span>
                        <ul className="mt-4 space-y-1">
                          {plan.features.slice(0, 3).map((f, i) => (
                            <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-green-500" /> {f}
                            </li>
                          ))}
                        </ul>
                      </label>
                    ))}
                  </div>
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Complete Registration'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
