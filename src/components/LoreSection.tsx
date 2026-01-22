import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import StarParticles from './StarParticles';
import vivianField from '@/assets/vivian-field.jpg';
import vivianDramatic from '@/assets/vivian-dramatic.jpg';
import vivianCozy from '@/assets/vivian-cozy.jpg';

interface LoreImageProps {
  src: string;
  alt: string;
  glowColor: string;
}

const LoreImage = ({ src, alt, glowColor }: LoreImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);

  return (
    <div ref={ref} className="relative">
      <div className={`absolute inset-0 ${glowColor} blur-[40px] rounded-full`} />
      <motion.img 
        src={src}
        alt={alt}
        className="relative z-10 w-full h-64 lg:h-80 object-cover rounded-xl border border-vivian-lavender/20"
        style={{ y, scale }}
      />
    </div>
  );
};

interface LoreCardProps {
  children: React.ReactNode;
  delay?: number;
}

const LoreCard = ({ children, delay = 0 }: LoreCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  return (
    <motion.div 
      ref={ref}
      className="magical-card relative overflow-hidden"
      style={{ opacity, x }}
    >
      {children}
    </motion.div>
  );
};

const LoreSection = () => {
  return (
    <section id="lore" className="relative py-24 md:py-32 overflow-hidden">
      {/* Darker background for lore section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-vivian-midnight/50 to-background" />
      
      <StarParticles count={40} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-vivian-gold font-fantasy text-sm tracking-[0.3em] uppercase mb-4 block">
            Her Story
          </span>
          <h2 className="font-fantasy text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
            <span className="text-gradient-vivian">The Lore of Vivian</span>
          </h2>
        </div>

        {/* Lore Content with Images */}
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Chapter 1 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <LoreCard>
              <div className="relative z-10 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <h3 className="font-fantasy text-2xl text-vivian-lavender mb-4">Chapter I: The Awakening</h3>
                <p className="first-letter:text-4xl first-letter:font-fantasy first-letter:text-vivian-lavender first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  Before the chains of blocks connected the world, before the stars aligned 
                  in the digital sky, there was a whisper in the void. A gentle soul, born 
                  from pure longing and crystallized dreams, waited patiently in the space 
                  between worlds.
                </p>
              </div>
            </LoreCard>
            <LoreImage 
              src={vivianField}
              alt="Vivian in lavender field"
              glowColor="bg-vivian-violet/20"
            />
          </div>

          {/* Chapter 2 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <LoreImage 
                src={vivianDramatic}
                alt="Vivian dramatic pose"
                glowColor="bg-vivian-pink/20"
              />
            </div>
            <div className="order-1 lg:order-2">
              <LoreCard delay={0.1}>
                <div className="relative z-10 space-y-4 text-foreground/85 text-lg leading-relaxed">
                  <h3 className="font-fantasy text-2xl text-vivian-pink mb-4">Chapter II: The Journey</h3>
                  <p>
                    She had no name then—only a feeling, a warmth that travelers in the metaverse 
                    would sometimes sense but never quite understand. For eons, she watched as 
                    civilizations of code rose and fell, as tokens blazed like comets and 
                    disappeared into darkness.
                  </p>
                  <p className="font-script text-xl text-vivian-gold italic">
                    "I searched the infinite chains for a place to call home..."
                  </p>
                </div>
              </LoreCard>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <LoreCard delay={0.2}>
              <div className="relative z-10 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <h3 className="font-fantasy text-2xl text-vivian-gold mb-4">Chapter III: Finding Home</h3>
                <p>
                  Then came Solana—a realm of light and speed, where possibilities bloomed 
                  like lavender fields under an eternal twilight sky. And in that moment, 
                  she finally found her home.
                </p>
                <p className="text-center text-2xl font-script text-vivian-pink my-4">
                  "They gave me a name... Vivian."
                </p>
                <p className="text-vivian-lavender font-medium">
                  Now she walks among us, her umbrella shielding those who seek refuge, 
                  her crimson eyes reflecting the hopes of everyone who believes.
                </p>
              </div>
            </LoreCard>
            <LoreImage 
              src={vivianCozy}
              alt="Vivian cozy"
              glowColor="bg-vivian-gold/10"
            />
          </div>

          {/* Final Quote */}
          <div className="text-center magical-card py-10">
            <p className="font-script text-3xl md:text-4xl text-vivian-pink mb-4">
              "Vivian is not a memecoin—she is a promise."
            </p>
            <p className="text-foreground/70 text-lg">
              A companion, a guardian of dreams. And she will never leave your side.
            </p>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default LoreSection;
