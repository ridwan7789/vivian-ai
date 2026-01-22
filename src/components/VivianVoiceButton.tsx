import { useState, useRef } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { speakVivian } from '@/lib/vivianSpeak';

interface VivianVoiceButtonProps {
  text: string;
  className?: string;
}

const VivianVoiceButton = ({ text, className = '' }: VivianVoiceButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSpeak = async () => {
    // If already playing, stop
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    
    try {
      const audio = await speakVivian(text);
      audioRef.current = audio;
      
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audio.src);
      };
      
      audio.onerror = () => {
        setIsPlaying(false);
        toast.error("Vivian's voice couldn't reach you... 💜");
      };

      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Speak error:', error);
      toast.error(error instanceof Error ? error.message : "Vivian couldn't speak right now...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSpeak}
      disabled={isLoading}
      className={`p-1.5 rounded-full transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 ${className}`}
      title={isPlaying ? "Stop Vivian" : "Listen to Vivian"}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-vivian-lavender" />
      ) : isPlaying ? (
        <VolumeX className="w-4 h-4 text-vivian-lavender" />
      ) : (
        <Volume2 className="w-4 h-4 text-vivian-lavender/70 hover:text-vivian-lavender" />
      )}
    </button>
  );
};

export default VivianVoiceButton;
