import StarParticles from './StarParticles';

const Footer = () => {
  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-vivian-midnight/80 to-transparent" />
      
      <StarParticles count={20} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Quote */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl md:text-4xl text-vivian-pink mb-4">
            "Vivian stays with you. Always."
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className="text-vivian-gold animate-twinkle"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                ✦
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-foreground/60">
          <a href="#about" className="hover:text-vivian-lavender transition-colors">About</a>
          <a href="#lore" className="hover:text-vivian-lavender transition-colors">Lore</a>
          <a href="#chat" className="hover:text-vivian-lavender transition-colors">Chat</a>
          <a href="#token" className="hover:text-vivian-lavender transition-colors">Token</a>
          <a href="#community" className="hover:text-vivian-lavender transition-colors">Community</a>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="font-fantasy text-2xl text-gradient-vivian mb-2">VIVIAN</p>
          <p className="text-xs text-foreground/40">
            © 2026 Vivian. A Solana Anime Experience. All rights reserved.
          </p>
          <p className="text-xs text-foreground/30 mt-2">
            $VIVIAN is a meme coin with no intrinsic value or financial return expectation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
