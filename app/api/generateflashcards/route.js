import { NextResponse } from 'next/server';
import OpenAI from 'openai';

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
  // Initialize OpenAI with your API key
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API, // Corrected the environment variable access
  });

  const data = await req.text();

  try {
    // Call OpenAI API to create chat completion
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: data },
      ],
      model: 'gpt-4', // Make sure to use the correct model name
    });

    // Parse the JSON response from the OpenAI API
    const flashcards = JSON.parse(completion.choices[0].message.content);

    // Return the flashcards as a JSON response
    return NextResponse.json(flashcards.flashcards);

  } catch (error) {
    // Handle any errors that might occur during the API call or response parsing
    console.error("Error creating flashcards:", error);
    return NextResponse.json({ error: "Failed to create flashcards" }, { status: 500 });
  }
}
