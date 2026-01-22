import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyVivianSection from '@/components/WhyVivianSection';
import LoreSection from '@/components/LoreSection';
import ChatSection from '@/components/ChatSection';
import TokenSection from '@/components/TokenSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyVivianSection />
      <LoreSection />
      <ChatSection />
      <TokenSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
