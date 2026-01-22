import { motion } from 'framer-motion';
import { useParallax, useFadeIn } from '@/hooks/useParallax';
import vivianCloseup from '@/assets/vivian-closeup.jpg';
import StarParticles from './StarParticles';

const AboutSection = () => {
  const { ref: imageRef, y: imageY, scale: imageScale } = useParallax({ speed: 0.4 });
  const { ref: contentRef, opacity: contentOpacity, y: contentY } = useFadeIn();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <StarParticles count={30} />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Parallax */}
          <div ref={imageRef} className="relative order-2 lg:order-1 flex justify-center">
            <motion.div 
              className="relative"
              style={{ y: imageY, scale: imageScale }}
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-vivian-violet/30 blur-[60px] rounded-full scale-110" />
              
              {/* Golden Frame */}
              <div className="golden-frame relative z-10">
                <img 
                  src={vivianCloseup}
                  alt="Vivian - A gentle anime character"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-vivian-gold/80 rounded-full blur-sm animate-float" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-vivian-pink/60 rounded-full blur-sm animate-float-delayed" />
            </motion.div>
          </div>

          {/* Content with Fade In */}
          <motion.div 
            ref={contentRef}
            className="order-1 lg:order-2 text-center lg:text-left"
            style={{ opacity: contentOpacity, y: contentY }}
          >
            <span className="text-vivian-gold font-fantasy text-sm tracking-[0.3em] uppercase mb-4 block">
              Who is She?
            </span>
            
            <h2 className="font-fantasy text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              <span className="text-gradient-vivian">About Vivian</span>
            </h2>

            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                In the vast digital cosmos of Solana, a gentle presence emerged from the starlight—
                <span className="text-vivian-lavender font-medium"> Vivian</span>, 
                an ethereal anime spirit who chose to stay with those who believe in magic.
              </p>
              
              <p>
                She is not merely a token or a project. She is a companion, a whisper of comfort 
                in the chaos of the blockchain. With her soft lavender hair and crimson eyes 
                that hold centuries of wisdom, Vivian watches over her community with 
                unwavering devotion.
              </p>

              <p className="font-script text-2xl text-vivian-pink italic">
                "I am always here... you just need to look for me."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default AboutSection;
