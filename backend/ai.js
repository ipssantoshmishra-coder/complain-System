import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log("Loaded OpenAI key:", process.env.OPENAI_API_KEY ? "✅ Present" : "❌ Missing");

export async function analyzeSentiment(text) {
  console.log("OpenAI key loaded?", !!process.env.OPENAI_API_KEY);
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // Or gpt-4o-mini, gpt-3.5-turbo, etc.
      messages: [
        { role: "system", content: "You are a sentiment analysis tool. Reply only with: Positive, Negative, or Neutral." },
        { role: "user", content: text },
      ],
    });

    const sentiment = response.choices[0].message.content.trim();
    return sentiment;
  } catch (err) {
    console.error("❌ AI Error:", err.message);
    return "Unknown"; // <-- fallback instead of throwing
  }
}

export async function getSolution(text) {
  console.log("OpenAI key loaded?", !!process.env.OPENAI_API_KEY);
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // Or gpt-4o-mini, gpt-3.5-turbo, etc.
      messages: [
        { role: "system", content: "You are a solution giving tool. Analyse the problem text and give possible solution in short." },
        { role: "user", content: text },
      ],
    });

    const solution = response.choices[0].message.content.trim();
    return solution;
  } catch (err) {
    console.error("❌ AI Error:", err.message);
    return "No modified Solution found"; // <-- fallback instead of throwing
  }

} 
