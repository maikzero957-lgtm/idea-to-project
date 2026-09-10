import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { idea } = await request.json();

    if (!idea || idea.trim().length === 0) {
      return NextResponse.json(
        { error: 'Idea is required' },
        { status: 400 }
      );
    }

    const prompt = `
You are a professional business consultant. Based on the following idea, generate a comprehensive business plan in JSON format.

Idea: ${idea}

Please provide the response in the following JSON structure (respond ONLY with valid JSON, no additional text):
{
  "brandName": "A creative and professional brand name",
  "businessPlan": "A detailed business plan overview (2-3 paragraphs)",
  "targetAudience": "Description of the target audience and market segment",
  "services": "List of main services or products to offer",
  "marketing": "Creative marketing and promotional ideas",
  "costs": "Initial cost estimation breakdown"
}

Respond in the same language as the idea provided.
    `;

    const message = await openai.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type');
    }

    let jsonContent = content.text;
    // Try to extract JSON if it's wrapped in markdown code blocks
    const jsonMatch = jsonContent.match(/```json\n?([\s\S]*?)\n?```/);
    if (jsonMatch) {
      jsonContent = jsonMatch[1];
    }

    const result = JSON.parse(jsonContent);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error generating business plan:', error);
    return NextResponse.json(
      { error: 'Failed to generate business plan' },
      { status: 500 }
    );
  }
}
