import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import StarParticles from './StarParticles';
import vivianHero from '@/assets/vivian-hero-banner.jpg';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Vivian - Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <img 
          src={vivianHero} 
          alt="Vivian - The Anime Character"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </motion.div>

      {/* Star Particles */}
      <StarParticles count={60} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-vivian-violet/20 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-vivian-lavender/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Content - Slower parallax for immersive effect */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ y: contentY, opacity }}
      >
        <div className="animate-fade-in-up">
          {/* Main Title */}
          <h1 className="font-fantasy text-6xl md:text-8xl lg:text-9xl font-bold text-glow mb-4 tracking-wider">
            <span className="text-gradient-vivian">VIVIAN</span>
          </h1>
          
          {/* Tagline */}
          <p className="font-script text-2xl md:text-4xl text-vivian-pink mb-8 opacity-90">
            ♡ Vivian Stays With You ♡
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            A mystical anime companion born on the Solana blockchain.
            Enter her world, feel her presence, and discover the magic within.
          </p>

          {/* CA Information */}
          <p className="font-fantasy text-lg md:text-xl text-vivian-gold max-w-2xl mx-auto mb-8 font-semibold tracking-wide">
            VIVIAN OFFICIAL CA : EXoWW66W6kpJ3wh5K3zshejn1RGUdsNdMqTMsjpcpump
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#chat"
              className="btn-primary-magical inline-flex items-center gap-2"
            >
              <span>💜</span>
              Chat With Vivian
            </a>
            <a 
              href="#community"
              className="btn-secondary-magical inline-flex items-center gap-2"
            >
              <span>✨</span>
              Join the Community
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator text-vivian-lavender/70 hover:text-vivian-lavender transition-colors"
          aria-label="Scroll to learn more"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
