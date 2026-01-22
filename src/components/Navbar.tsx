import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import vivianCoin from '@/assets/vivian-coin.jpg';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Lore', href: '#lore' },
  { label: 'Chat', href: '#chat' },
  { label: 'Token', href: '#token' },
  { label: 'Community', href: '#community' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="golden-frame p-0.5">
              <img 
                src={vivianCoin}
                alt="Vivian"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
            </div>
            <span className="font-fantasy text-xl md:text-2xl text-gradient-vivian">
              VIVIAN
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/70 hover:text-vivian-lavender transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#chat"
              className="btn-primary-magical text-sm px-5 py-2.5"
            >
              Chat Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground/70 hover:text-vivian-lavender transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#chat"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary-magical text-sm px-5 py-2.5 inline-block w-full text-center"
              >
                Chat Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
