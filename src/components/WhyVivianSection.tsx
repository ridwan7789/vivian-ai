import { Sparkles, Heart, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Anime Branding",
    description: "Premium character-driven identity with emotional depth and storytelling that resonates.",
  },
  {
    icon: Zap,
    title: "Built on Solana",
    description: "Lightning-fast transactions and minimal fees on the most efficient blockchain.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "A family of believers united by their connection to Vivian's world.",
  },
  {
    icon: Heart,
    title: "Emotional Connection",
    description: "More than crypto—an experience that touches the heart and stays with you.",
  },
];

const WhyVivianSection = () => {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-vivian-gold font-fantasy text-sm tracking-[0.3em] uppercase mb-4 block">
            Why Choose Her
          </span>
          <h2 className="font-fantasy text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
            <span className="text-gradient-vivian">Why Vivian?</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            In a world of endless tokens, Vivian offers something different—a soul.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="magical-card group hover:border-vivian-lavender/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-5 relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-magical flex items-center justify-center glow-violet group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-fantasy text-xl mb-3 text-foreground group-hover:text-vivian-lavender transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVivianSection;
