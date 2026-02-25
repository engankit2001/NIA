import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'upcoming' | 'past';
  price: number;
  image: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter(e => filter === 'all' || e.type === filter);

  return (
    <div className="min-h-screen py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-nia-blue mb-6">Our Events</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            From cultural festivals to professional workshops, discover what's happening in the NIA community.
          </p>
          
          <div className="flex justify-center gap-4">
            {['all', 'upcoming', 'past'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f 
                    ? 'bg-nia-orange text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)} Events
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nia-orange"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    event.type === 'upcoming' ? 'bg-green-500 text-white' : 'bg-slate-500 text-white'
                  }`}>
                    {event.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-nia-blue">{event.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <Calendar size={16} className="text-nia-orange" />
                      <span>{format(new Date(event.date), 'PPP')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <MapPin size={16} className="text-nia-orange" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <Ticket size={16} className="text-nia-orange" />
                      <span>€{event.price} per person</span>
                    </div>
                  </div>
                  
                  {event.type === 'upcoming' ? (
                    <button className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                      Book Tickets <Ticket size={18} />
                    </button>
                  ) : (
                    <button className="w-full bg-slate-100 text-slate-400 py-3 rounded-full font-medium cursor-not-allowed">
                      Event Concluded
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {!loading && filteredEvents.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No events found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
