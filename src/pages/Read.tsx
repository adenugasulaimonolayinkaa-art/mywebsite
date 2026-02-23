import { useEffect, useState } from 'react';
import { Calendar, Share2, Check } from 'lucide-react';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  image?: string;
}

// Sample posts with full content
const samplePosts: Post[] = [
  {
    slug: 'the-space-between-thoughts',
    title: 'The Space Between Thoughts',
    date: '2024-01-15',
    excerpt: 'In the silence between two thoughts lies a vast expanse of awareness.',
    image: '/images/hero-face.jpg',
    body: `In the silence between two thoughts lies a vast expanse of awareness. It is here, in this seemingly empty space, that we discover the true nature of consciousness.

We spend most of our lives chasing thoughts, following them down endless corridors of memory and imagination. We believe we are the voice in our head, the narrator of our experience. But what happens when we stop listening? What remains when the mind grows quiet?

The space between thoughts is not empty. It is full of presence, of being, of the simple fact of awareness itself. This awareness does not judge, does not seek, does not fear. It simply is.

To find this space, we need not stop thinking. We need only become aware of the gaps. Notice the pause after one thought fades and before the next arises. In that pause, however brief, there is a window into something deeper.

With practice, these gaps grow wider. The silence becomes more apparent than the noise. And slowly, we begin to recognize that we are not the thinker of thoughts, but the awareness in which thoughts arise and pass away.

This recognition changes everything. It frees us from the tyranny of our own minds. We no longer need to believe every thought that appears. We can simply observe them, like clouds passing through an endless sky.

The space between thoughts is always here, waiting to be noticed. It is the ground of our being, the silent witness of all experience. Rest in it, and find peace.`,
  },
  {
    slug: 'on-observing-the-observer',
    title: 'On Observing the Observer',
    date: '2024-01-08',
    excerpt: 'Who is it that watches the mind?',
    image: '/images/mirror.jpg',
    body: `Who is it that watches the mind? This question, when held with patience, begins to dissolve the illusion of separation between self and awareness.

We are so accustomed to being lost in our experience that we rarely step back to notice who is experiencing. We see the world, feel emotions, think thoughts—but who is the one who sees, feels, and thinks?

The mind will offer answers: "I am my name, my history, my personality, my roles." But these are all objects of awareness, not awareness itself. You are aware of your name, aware of your history, aware of your personality. Who is aware of all of these?

To turn attention back upon itself is the essence of self-inquiry. It is not a thinking process but a direct looking. Look for the looker. Find the finder.

What you discover is not another thing, not another object in consciousness. You discover the empty, aware capacity in which all things appear. You discover that you are not in the world; the world is in you.

This is not philosophy. It is the most direct and intimate experience possible. It is what you have always been, beneath the layers of identification and belief.

The observer cannot be observed as an object. It is the observing itself, the pure knowing that makes all experience possible. Rest as that. Be that. You are already free.`,
  },
  {
    slug: 'the-art-of-stillness',
    title: 'The Art of Stillness',
    date: '2024-01-01',
    excerpt: 'In a world that demands constant motion, stillness becomes a radical act.',
    image: '/images/still-water.jpg',
    body: `In a world that demands constant motion, stillness becomes a radical act. Not the stillness of inaction, but the stillness of complete presence.

We have forgotten how to be still. We fill every moment with distraction—screens, noise, activity, consumption. Silence makes us uncomfortable. Empty time feels like waste. We have become addicted to doing.

But there is a deeper stillness that has nothing to do with external circumstances. It is the stillness of awareness itself, unmoved by the chaos of the world. This stillness is available in every moment, whether you are sitting in meditation or walking through a crowded street.

To find it, you need only stop. Stop running. Stop seeking. Stop trying to become something other than what you are. In that stopping, you discover what has always been here.

Stillness is not passive. It is the ground from which all true action arises. When you act from stillness, your actions are clear, efficient, and free from the compulsions of ego. You do what needs to be done, without drama or attachment.

The art of stillness is the art of being. It requires no special technique, no years of practice. It requires only the willingness to be present, to let go of the stories and strategies that keep you trapped in the mind.

Sit quietly. Breathe. Notice what is here, now, before any thought arises. That is stillness. That is home.`,
  },
  {
    slug: 'the-mirror-of-awareness',
    title: 'The Mirror of Awareness',
    date: '2023-12-25',
    excerpt: 'Awareness is like a mirror. It reflects all that appears before it without judgment, without preference.',
    image: '/images/mirror.jpg',
    body: `Awareness is like a mirror. It reflects all that appears before it without judgment, without preference. The mirror does not reject the ugly or cling to the beautiful. It simply reflects.

In the same way, true awareness welcomes all experience. It does not say "this is good" or "this is bad." It does not say "I want this" or "I don't want that." It simply knows.

This is the nature of pure consciousness. It is open, empty, and luminous. Everything arises in it, dwells in it, and dissolves back into it. Nothing is excluded. Nothing is held.

When we identify with the objects in the mirror—our thoughts, feelings, and sensations—we suffer. We believe ourselves to be limited, separate, vulnerable. But we are the mirror itself, infinite and free.

To realize this is liberation. Not liberation from the world, but liberation in the world. You can still play your roles, pursue your goals, engage with life. But you do so from a place of freedom, not bondage.

The mirror remains unchanged no matter what appears in it. In the same way, your true nature remains pure and perfect no matter what experiences come and go. This is the good news that all spiritual traditions point to.

You are already what you seek. You have always been the mirror of awareness.`,
  },
  {
    slug: 'shadows-and-light',
    title: 'Shadows and Light',
    date: '2023-12-18',
    excerpt: 'We cannot have light without shadow. They are inseparable, two aspects of a single reality.',
    image: '/images/shadow.jpg',
    body: `We cannot have light without shadow. They are inseparable, two aspects of a single reality. And yet we spend so much of our lives trying to eliminate the shadows, chasing only the light.

This is the root of much of our suffering. We reject the difficult emotions, the uncomfortable truths, the parts of ourselves we find unacceptable. We push them into the shadows and pretend they don't exist.

But what we resist persists. The shadows grow larger in our denial, casting their influence from the unconscious realms of our psyche. They emerge in unexpected ways—in our relationships, our health, our dreams.

The path of awareness is not about transcending the shadows but embracing them. It is about shining the light of consciousness into the dark corners of our experience, not to eliminate them, but to know them fully.

When we meet our shadows with awareness, something remarkable happens. They lose their power over us. We discover that what we feared was not so fearsome after all. The anger, the grief, the shame—these are just energies moving through awareness, no different from joy or love.

Integration is the goal, not elimination. We become whole by welcoming all parts of ourselves, the light and the dark. This is the alchemical work of consciousness—to transform lead into gold by bringing everything into the light of awareness.

Your shadows are not obstacles on the path. They are the path. Walk through them with courage and compassion, and discover the wholeness that has always been yours.`,
  },
  {
    slug: 'the-doorway-of-now',
    title: 'The Doorway of Now',
    date: '2023-12-11',
    excerpt: 'The present moment is the only doorway to consciousness.',
    image: '/images/open-door.jpg',
    body: `The present moment is the only doorway to consciousness. Not the past, with its memories and regrets. Not the future, with its hopes and fears. Only here, only now.

This sounds simple, perhaps even obvious. But how rarely do we actually inhabit the present moment? The mind is constantly pulling us away—into yesterday's conversation, tomorrow's meeting, next year's plans. We live in time, not in presence.

But time is a mental construct. The past exists only as memory, the future only as imagination. Both are thoughts appearing in the present. The only reality is now.

To enter the present moment is to step out of the stream of thinking. It is to shift attention from the content of consciousness to consciousness itself. This shift changes everything.

In the now, there is no problem. Problems exist only in time—in the past ("I shouldn't have done that") or in the future ("What if something goes wrong?"). In the present, there is only what is, and our response to it.

The doorway of now is always open. It requires no special circumstances, no preparation, no practice. It requires only the willingness to stop, to breathe, to notice what is actually here.

Step through that doorway, again and again, until you realize that you never left. You have always been here, now, in the eternal present of awareness.`,
  },
];

export function Read() {
  const [posts] = useState<Post[]>(samplePosts);
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check for hash in URL to expand specific post
    const hash = window.location.hash.slice(1);
    if (hash) {
      setExpandedPost(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = async (post: Post) => {
    const url = `${window.location.origin}/read#${post.slug}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopiedSlug(post.slug);
        setTimeout(() => setCopiedSlug(null), 2000);
      } catch {
        // Clipboard failed
      }
    }
  };

  const togglePost = (slug: string) => {
    setExpandedPost(expandedPost === slug ? null : slug);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#666] mb-4">
            All Writings
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Read
          </h1>
          <p className="text-lg text-[#888] max-w-2xl leading-relaxed">
            Reflections on consciousness, awareness, and the art of being present.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              id={post.slug}
              className={`border border-[#1a1a1a] bg-[#0f0f0f] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Post Header - Always Visible */}
              <button
                onClick={() => togglePost(post.slug)}
                className="w-full p-8 text-left group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Image */}
                  <div className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden bg-[#111]">
                    <img
                      src={post.image || '/images/empty-chair.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#666]">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-light text-[#e5e5e5] group-hover:text-white transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#777] leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-2">
                      <span className="text-xs tracking-[0.2em] uppercase text-[#666] group-hover:text-[#888] transition-colors duration-300">
                        {expandedPost === post.slug ? 'Collapse' : 'Read More'}
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedPost === post.slug ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-4 border-t border-[#1a1a1a]">
                  <div className="prose prose-invert prose-lg max-w-none">
                    {post.body.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-[#aaa] leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Share Button */}
                  <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
                    <button
                      onClick={() => handleShare(post)}
                      className="flex items-center gap-2 text-sm text-[#666] hover:text-[#e5e5e5] transition-colors duration-300"
                    >
                      {copiedSlug === post.slug ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Link Copied</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
