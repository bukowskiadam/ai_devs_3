import OpenAI from "npm:openai";

import { OPENAI_API_KEY } from "./env.ts";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

export async function chatCompletion(
    messages: OpenAI.ChatCompletionMessageParam[],
) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages,
        temperature: 1,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        response_format: {
            "type": "text",
        },
    });

    return response.choices[0].message.content!;
}
