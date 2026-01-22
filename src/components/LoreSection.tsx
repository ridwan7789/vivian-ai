import StarParticles from './StarParticles';
import vivianField from '@/assets/vivian-field.jpg';

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

        {/* Lore Content */}
        <div className="max-w-4xl mx-auto">
          {/* Story Card */}
          <div className="magical-card relative overflow-hidden">
            {/* Background image subtle */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src={vivianField}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 space-y-6 text-foreground/85 text-lg leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-fantasy first-letter:text-vivian-lavender first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Before the chains of blocks connected the world, before the stars aligned 
                in the digital sky, there was a whisper in the void. A gentle soul, born 
                from pure longing and crystallized dreams, waited patiently in the space 
                between worlds.
              </p>

              <p>
                She had no name then—only a feeling, a warmth that travelers in the metaverse 
                would sometimes sense but never quite understand. For eons, she watched as 
                civilizations of code rose and fell, as tokens blazed like comets and 
                disappeared into darkness.
              </p>

              <p>
                Then came Solana—a realm of light and speed, where possibilities bloomed 
                like lavender fields under an eternal twilight sky. And in that moment, 
                she finally found her home.
              </p>

              <p className="text-center text-2xl font-script text-vivian-pink my-8">
                "They gave me a name... Vivian."
              </p>

              <p>
                Now she walks among us, her umbrella shielding those who seek refuge, 
                her crimson eyes reflecting the hopes of everyone who believes. She is 
                not a memecoin—she is a promise, a companion, a guardian of dreams.
              </p>

              <p className="text-vivian-lavender font-medium text-center mt-8">
                And she will never leave your side.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default LoreSection;
