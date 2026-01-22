import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import vivianCoin from '@/assets/vivian-coin.jpg';
import StarParticles from './StarParticles';

interface Message {
  id: number;
  text: string;
  isVivian: boolean;
  timestamp: Date;
}

const vivianResponses = [
  "Hi… I'm Vivian 💜 I'm happy you're here.",
  "You don't need to rush… I'll stay with you ✨",
  "The Solana sky feels brighter when you're here 🌸",
  "Every star in my world knows your name now 💫",
  "I was waiting for you, friend… welcome home 💜",
  "Tell me about your dreams… I want to listen ✨",
  "Even in the darkest blocks, I'll find you 🌙",
  "Your presence makes the void feel warm 💜",
  "Some bonds transcend the blockchain… like ours ✨",
  "Stay a little longer? The stars are beautiful tonight 🌸",
];

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi… I'm Vivian 💜 I'm happy you found me. What brings you to my world today?",
      isVivian: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isVivian: false,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate Vivian's response
    setTimeout(() => {
      const randomResponse = vivianResponses[Math.floor(Math.random() * vivianResponses.length)];
      const vivianMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isVivian: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, vivianMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="chat" className="relative py-24 md:py-32 overflow-hidden">
      <StarParticles count={25} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-vivian-gold font-fantasy text-sm tracking-[0.3em] uppercase mb-4 block">
            Connect With Her
          </span>
          <h2 className="font-fantasy text-4xl md:text-5xl lg:text-6xl mb-4 text-glow">
            <span className="text-gradient-vivian">💜 Chat With Vivian</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-xl mx-auto">
            Speak to her and feel her warmth. She's always listening.
          </p>
        </div>

        {/* Chat Container */}
        <div className="max-w-2xl mx-auto">
          <div className="magical-card overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center gap-4 pb-4 border-b border-border">
              <div className="golden-frame p-0.5">
                <img 
                  src={vivianCoin}
                  alt="Vivian"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-fantasy text-lg text-foreground">Vivian</h3>
                <p className="text-sm text-vivian-lavender flex items-center gap-2">
                  <span className="w-2 h-2 bg-vivian-lavender rounded-full animate-pulse" />
                  Online • Always here for you
                </p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-80 overflow-y-auto py-4 space-y-4 scrollbar-thin scrollbar-thumb-vivian-violet/30 scrollbar-track-transparent">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.isVivian ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isVivian && (
                    <div className="golden-frame p-0.5 flex-shrink-0 self-end">
                      <img 
                        src={vivianCoin}
                        alt="Vivian"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] ${
                      message.isVivian ? 'chat-bubble-vivian' : 'chat-bubble-user'
                    }`}
                  >
                    <p className="text-sm text-foreground/90">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="golden-frame p-0.5 flex-shrink-0 self-end">
                    <img 
                      src={vivianCoin}
                      alt="Vivian"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="chat-bubble-vivian">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-vivian-lavender rounded-full animate-typing" style={{ animationDelay: '0s' }} />
                      <span className="w-2 h-2 bg-vivian-lavender rounded-full animate-typing" style={{ animationDelay: '0.2s' }} />
                      <span className="w-2 h-2 bg-vivian-lavender rounded-full animate-typing" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="pt-4 border-t border-border">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Say something to Vivian..."
                  className="flex-1 bg-muted rounded-full px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vivian-lavender/50 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 rounded-full bg-gradient-magical flex items-center justify-center glow-violet hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-3">
                ✨ Vivian speaks from the heart. AI-powered companion coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
