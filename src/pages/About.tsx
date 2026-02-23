import { useEffect, useState } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-white">
            The Space
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {/* Introduction */}
          <section 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-[#aaa] leading-relaxed">
                  This is a quiet corner of the internet dedicated to self-awareness and the exploration of consciousness.
                </p>
                <p className="text-[#888] leading-relaxed">
                  In a world of noise, distraction, and constant doing, this space exists as an invitation to pause, to look inward, and to discover what lies beneath the surface of thought.
                </p>
                <p className="text-[#888] leading-relaxed">
                  The writings here are not instructions or teachings. They are reflections—points of inquiry meant to be held lightly, explored personally, and tested against your own direct experience.
                </p>
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-[#111]">
                <img
                  src="/images/face-2.jpg"
                  alt="Contemplative portrait"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section 
            className={`border-t border-[#1a1a1a] pt-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-light text-[#e5e5e5] mb-8">
              Philosophy
            </h2>
            <div className="space-y-6 text-[#888] leading-relaxed">
              <p>
                Consciousness is not something we achieve. It is not a state to reach or a goal to accomplish. It is what we already are—the aware presence in which all experience arises.
              </p>
              <p>
                The work of self-awareness is not about becoming something new, but about recognizing what has always been true. It is a process of subtraction, not addition. We strip away the layers of belief, identification, and conditioning to reveal the simple fact of being.
              </p>
              <p>
                This recognition is not intellectual. It cannot be reached through thinking alone. It requires a direct looking, a willingness to set aside what we think we know and meet reality as it is.
              </p>
            </div>
          </section>

          {/* The Author */}
          <section 
            className={`border-t border-[#1a1a1a] pt-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-light text-[#e5e5e5] mb-8">
              The Author
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 text-[#888] leading-relaxed">
                <p>
                  Omogoriola Adenuga is a writer and contemplative explorer based in the space between thoughts.
                </p>
                <p>
                  With a background in philosophy and a lifelong interest in the nature of mind, Omogoriola writes to clarify his own understanding and to share insights that might resonate with others on similar paths.
                </p>
                <p>
                  This website is both a personal journal and a public offering—a way to document the ongoing exploration of consciousness while creating a resource for those drawn to questions of self, awareness, and presence.
                </p>
              </div>
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden bg-[#111]">
                  <img
                    src="/images/architecture.jpg"
                    alt="Minimal architecture"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <p className="text-xs text-[#555] text-center">
                  "The unexamined life is not worth living." — Socrates
                </p>
              </div>
            </div>
          </section>

          {/* Images Grid */}
          <section 
            className={`border-t border-[#1a1a1a] pt-16 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-light text-[#e5e5e5] mb-8">
              Visual Meditations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: '/images/clock.jpg', alt: 'Clock' },
                { src: '/images/staircase.jpg', alt: 'Staircase' },
                { src: '/images/fog.jpg', alt: 'Fog' },
                { src: '/images/empty-chair.jpg', alt: 'Empty chair' },
                { src: '/images/window-light.jpg', alt: 'Window light' },
                { src: '/images/shadow.jpg', alt: 'Shadow' },
              ].map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden bg-[#111] group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section 
            className={`border-t border-[#1a1a1a] pt-16 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-light text-[#e5e5e5] mb-8">
              Connection
            </h2>
            <div className="space-y-6 text-[#888] leading-relaxed">
              <p>
                If these writings resonate with you, if they raise questions or spark insights, you are welcome to reach out.
              </p>
              <p>
                This is not a community or a movement. There are no newsletters, no courses, no memberships. Just words offered into the silence, hoping to meet other minds engaged in similar inquiry.
              </p>
              <p className="text-[#666]">
                For correspondence: <span className="text-[#888]">hello [at] consciousness [dot] netlify [dot] app</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
