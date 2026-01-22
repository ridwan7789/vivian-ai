const SPEAK_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/vivian-speak`;

export async function speakVivian(text: string): Promise<HTMLAudioElement> {
  const response = await fetch(SPEAK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: "Connection failed" }));
    throw new Error(errorData.error || "Vivian couldn't speak right now...");
  }

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);
  
  return audio;
}
