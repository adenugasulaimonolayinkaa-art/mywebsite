import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

// Sample posts - in production, these would come from the CMS
const samplePosts: Post[] = [
  {
    slug: 'the-space-between-thoughts',
    title: 'The Space Between Thoughts',
    date: '2024-01-15',
    excerpt: 'In the silence between two thoughts lies a vast expanse of awareness. It is here, in this seemingly empty space, that we discover the true nature of consciousness.',
    image: '/images/hero-face.jpg',
  },
  {
    slug: 'on-observing-the-observer',
    title: 'On Observing the Observer',
    date: '2024-01-08',
    excerpt: 'Who is it that watches the mind? This question, when held with patience, begins to dissolve the illusion of separation between self and awareness.',
    image: '/images/mirror.jpg',
  },
  {
    slug: 'the-art-of-stillness',
    title: 'The Art of Stillness',
    date: '2024-01-01',
    excerpt: 'In a world that demands constant motion, stillness becomes a radical act. Not the stillness of inaction, but the stillness of complete presence.',
    image: '/images/still-water.jpg',
  },
];

export function Home() {
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // In production, fetch posts from CMS
    // For now, use sample posts
    const fetchPosts = async () => {
      try {
        // Attempt to load posts from the content directory
        const response = await fetch('/content/posts.json');
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts.slice(0, 3));
        }
      } catch {
        // Fallback to sample posts
        setPosts(samplePosts);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-face.jpg"
            alt="Contemplative portrait"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </div>

        {/* Content */}
        <div 
          className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#888] mb-8">
            By Omogoriola Adenuga
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-8 leading-tight">
            Consciousness
          </h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl mx-auto leading-relaxed mb-12">
            A space for self-awareness, reflection, and the quiet exploration of what it means to be present.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/read"
              className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#e5e5e5] hover:text-white transition-colors duration-300"
            >
              <span>Begin Reading</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/pause"
              className="text-sm tracking-[0.2em] uppercase text-[#666] hover:text-[#999] transition-colors duration-300"
            >
              Take a Pause
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#444] to-transparent animate-pulse" />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#666] mb-4">
                Recent Writings
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Latest Reflections
              </h2>
            </div>
            <Link
              to="/read"
              className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#888] hover:text-[#e5e5e5] transition-colors duration-300"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <Link to={`/read#${post.slug}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#111]">
                    <img
                      src={post.image || '/images/empty-chair.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#666]">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-xl font-light text-[#e5e5e5] group-hover:text-white transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#777] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="space-y-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#ccc] leading-relaxed">
              "The quieter you become, the more you are able to hear."
            </p>
            <footer className="text-sm text-[#666] tracking-[0.2em] uppercase">
              — Rumi
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
