import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-nia-blue mb-6">NIA Blog</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stories, news, and insights from the Indo-Dutch community.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nia-orange"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, i) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {format(new Date(post.date), 'MMM d, yyyy')}</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-nia-blue mb-4 group-hover:text-nia-orange transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                    {post.content}
                  </p>
                  <div className="mt-auto">
                    <button className="text-nia-orange font-bold flex items-center gap-2 group/btn">
                      Read More <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
