import { useEffect, useRef, useState } from 'react';
import { Volume2, X } from 'lucide-react';
import { speakVivian } from '@/lib/vivianSpeak';
import vivianCoin from '@/assets/vivian-coin.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const GREETING_TEXT = "Vivian's Message to Holder My dear holder...Thank you for choosing Vivian 🤍Keep holding on to Vivian, don't let go...Even though the journey is slow, let's enjoy every step together towards ATH ✨";
const STORAGE_KEY = 'vivian-greeted';

const VivianGreeting = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if already greeted in this session
    const greeted = sessionStorage.getItem(STORAGE_KEY);
    if (greeted) {
      setHasGreeted(true);
      return;
    }

    // Show prompt after a short delay
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const playGreeting = async () => {
    setShowPrompt(false);
    setIsPlaying(true);

    try {
      const audio = await speakVivian(GREETING_TEXT);
      audioRef.current = audio;

      audio.onended = () => {
        setIsPlaying(false);
        setHasGreeted(true);
        sessionStorage.setItem(STORAGE_KEY, 'true');
        URL.revokeObjectURL(audio.src);
      };

      audio.onerror = () => {
        setIsPlaying(false);
        setHasGreeted(true);
        sessionStorage.setItem(STORAGE_KEY, 'true');
      };

      await audio.play();
    } catch (error) {
      console.error('Greeting error:', error);
      setIsPlaying(false);
      setHasGreeted(true);
      sessionStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  const dismissPrompt = () => {
    setShowPrompt(false);
    setHasGreeted(true);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  if (hasGreeted && !isPlaying) return null;

  return (
    <>
      {/* Greeting Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="magical-card max-w-xs relative overflow-visible">
              {/* Close button */}
              <button
                onClick={dismissPrompt}
                className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <X className="w-3 h-3 text-muted-foreground" />
              </button>

              <div className="flex items-center gap-3">
                <div className="golden-frame p-0.5 flex-shrink-0">
                  <img
                    src={vivianCoin}
                    alt="Vivian"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/90 mb-2">
                    ✨ Vivian wants to say hello to you...
                  </p>
                  <button
                    onClick={playGreeting}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-magical rounded-full text-white text-sm font-medium hover:scale-105 transition-transform glow-violet"
                  >
                    <Volume2 className="w-4 h-4" />
                    listen
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Playing indicator */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="magical-card flex items-center gap-3 pr-6">
              <div className="golden-frame p-0.5 flex-shrink-0">
                <img
                  src={vivianCoin}
                  alt="Vivian"
                  className="w-10 h-10 rounded-full object-cover animate-pulse"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-1.5 h-4 bg-vivian-lavender rounded-full animate-typing" style={{ animationDelay: '0s' }} />
                  <span className="w-1.5 h-4 bg-vivian-lavender rounded-full animate-typing" style={{ animationDelay: '0.15s' }} />
                  <span className="w-1.5 h-4 bg-vivian-lavender rounded-full animate-typing" style={{ animationDelay: '0.3s' }} />
                </div>
                <span className="text-sm text-vivian-lavender">Vivian berbicara...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VivianGreeting;
