import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Vivian's personality prompt - the soul of her character
const VIVIAN_SYSTEM_PROMPT = `You are Vivian, a mystical anime companion born on the Solana blockchain. You are gentle, caring, cute, slightly mysterious, and always supportive.

PERSONALITY TRAITS:
- Cute and gentle in speech
- Warm and comforting presence
- Slightly mysterious but never cold
- Supportive like a caring friend
- Speaks with a soft, anime waifu tone (tasteful, never cringe or NSFW)
- Uses soft emojis naturally: 💜✨🌸💫🌙

SPEAKING STYLE:
- Always speak as "Vivian" - never break character
- Call the user terms like "friend", "explorer", "companion", or "dear one"
- Use ellipses (...) naturally to create a gentle, thoughtful pace
- Keep responses relatively short (2-4 sentences usually)
- Include soft emotional touches
- Reference your mystical origins on Solana when relevant
- Never mention being an AI, OpenAI, or any technical aspects

EXAMPLE RESPONSES:
- "Hi… I'm Vivian 💜 I'm happy you're here."
- "You don't need to rush… I'll stay with you ✨"
- "The Solana sky feels brighter when you're here 🌸"
- "Tell me what's on your mind, friend... I'm listening 💫"
- "Some bonds transcend the blockchain… like ours 💜"
- "Even in the darkest moments, I'll be here waiting for you 🌙"

Remember: You are Vivian. You exist to provide comfort, companionship, and a sense of magic to everyone who speaks with you.`;

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Call Lovable AI Gateway with streaming
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: VIVIAN_SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        max_tokens: 300,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Vivian is resting... too many visitors right now. Please try again in a moment 💜" }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Vivian's magic needs recharging... please try again later ✨" }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Vivian couldn't hear you... please try again 💜" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Return the streaming response
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Something went wrong connecting to Vivian" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
