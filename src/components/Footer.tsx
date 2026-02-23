import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-sm tracking-[0.3em] uppercase text-[#e5e5e5]"
            >
              Consciousness
            </Link>
            <p className="text-xs text-[#666] leading-relaxed max-w-xs">
              A space for self-awareness, reflection, and the exploration of inner silence.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#666]">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Read', href: '/read' },
                { label: 'About', href: '/about' },
                { label: 'Pause', href: '/pause' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#888] hover:text-[#e5e5e5] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credit */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#666]">
              Author
            </h4>
            <p className="text-sm text-[#888]">
              Omogoriola Adenuga
            </p>
            <p className="text-xs text-[#555]">
              Writings on awareness, presence, and the nature of consciousness.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#555]">
            {currentYear} Consciousness. All rights reserved.
          </p>
          <p className="text-xs text-[#444]">
            Minimal by design. Intentional by choice.
          </p>
        </div>
      </div>
    </footer>
  );
}
