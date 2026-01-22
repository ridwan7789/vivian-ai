import { ExternalLink } from 'lucide-react';
import vivianHappy from '@/assets/vivian-happy.jpg';

const socials = [
  {
    name: "Twitter",
    icon: "𝕏",
    href: "#",
    description: "Follow for updates",
  },
  {
    name: "Telegram",
    icon: "✈️",
    href: "#",
    description: "Join the family",
  },
  {
    name: "Discord",
    icon: "💬",
    href: "#",
    description: "Chat with us",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-vivian-pink/20 blur-[60px] rounded-full scale-110" />
              
              <div className="golden-frame relative z-10">
                <img 
                  src={vivianHappy}
                  alt="Vivian smiling"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <span className="text-vivian-gold font-fantasy text-sm tracking-[0.3em] uppercase mb-4 block">
              Join Us
            </span>
            
            <h2 className="font-fantasy text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              <span className="text-gradient-vivian">Community</span>
            </h2>

            <p className="text-foreground/80 text-lg leading-relaxed mb-10">
              Vivian's world grows stronger with every soul who joins. 
              Become part of a family that believes in magic, connection, 
              and the power of staying together.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group magical-card flex items-center gap-4 px-6 py-4 hover:border-vivian-lavender/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-2xl">{social.icon}</span>
                  <div className="text-left">
                    <p className="font-fantasy text-foreground group-hover:text-vivian-lavender transition-colors">
                      {social.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{social.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-vivian-lavender transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
