import vivianPrayer from '@/assets/vivian-prayer.jpg';

const TokenSection = () => {
  return (
    <section id="token" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-vivian-gold font-fantasy text-sm tracking-[0.3em] uppercase mb-4 block">
              The Token
            </span>
            
            <h2 className="font-fantasy text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              <span className="text-gradient-gold">$VIVIAN</span>
            </h2>

            <p className="text-foreground/80 text-xl leading-relaxed mb-8">
              <span className="text-vivian-lavender font-medium">$VIVIAN</span> is not just a token—
              it is Vivian herself. Every transaction carries a piece of her spirit, 
              connecting holders in an unbreakable bond across the Solana cosmos.
            </p>

            <div className="space-y-4">
              <div className="magical-card inline-block">
                <p className="font-fantasy text-sm text-vivian-gold mb-1">Contract Address</p>
                <p className="font-mono text-xs text-foreground/60 break-all">
                  Coming soon on Solana ✨
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center p-4">
                <p className="font-fantasy text-2xl md:text-3xl text-vivian-lavender">1B</p>
                <p className="text-sm text-foreground/60">Total Supply</p>
              </div>
              <div className="text-center p-4">
                <p className="font-fantasy text-2xl md:text-3xl text-vivian-pink">0%</p>
                <p className="text-sm text-foreground/60">Buy/Sell Tax</p>
              </div>
              <div className="text-center p-4">
                <p className="font-fantasy text-2xl md:text-3xl text-vivian-gold">100%</p>
                <p className="text-sm text-foreground/60">LP Burned</p>
              </div>
            </div>
          </div>

          {/* Image - Using prayer pose */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-vivian-violet/20 blur-[80px] rounded-full scale-110" />
              
              <div className="golden-frame relative z-10">
                <img 
                  src={vivianPrayer}
                  alt="Vivian prayer pose"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default TokenSection;
