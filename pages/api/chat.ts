import type { NextApiRequest, NextApiResponse } from 'next';

type Message = { role: 'user' | 'assistant' | 'system'; content: string };

type RequestBody = {
  messages: Message[];
  systemContext?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: 'Gemini API key not configured. Set GEMINI_API_KEY in .env.local' });
  }

  try {
    const { messages, systemContext } = req.body as RequestBody;
    if (!messages?.length) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    const systemContent =
      systemContext ||
      'You are a helpful AI assistant representing a software developer portfolio. Answer questions about their work, experience, skills, and projects in a friendly, professional way.';

    // Gemini expects a single prompt with the whole conversation.
    const userConversation = messages
      .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n');

    const geminiBody = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${systemContent}\n\nConversation so far:\n${userConversation}`,
            },
          ],
        },
      ],
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(geminiBody),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${errorText}`);
    }

    const json = (await response.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };

    const reply =
      json.candidates?.[0]?.content?.parts?.[0]?.text ??
      'Sorry, I could not generate a response.';

    return res.status(200).json({ message: reply });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Chat API error:', err);
    return res.status(500).json({ error: message });
  }
}
