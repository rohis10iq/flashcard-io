import { NextResponse } from 'next/server';
import { OpenAI } from 'openai'; // Ensure correct import

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;

export async function POST(req) {
  try {
    // Initialize OpenAI with the API key from the environment variable
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const data = await req.text();

    // Call the OpenAI API to generate flashcards
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: data },
      ],
    });

    // Parse the JSON response from the OpenAI API
    const flashcards = JSON.parse(completion.data.choices[0].message.content);

    // Return the flashcards as a JSON response
    return NextResponse.json(flashcards.flashcards);
  } catch (error) {
    console.error('Error generating flashcards:', error);
    return NextResponse.json({ error: 'An error occurred while generating flashcards.' }, { status: 500 });
  }
}
