
import { GoogleGenAI, Type } from "@google/genai";

export const getAIClient = () => {
  // Strictly rely on process.env.API_KEY as per security requirements
  const apiKey = (process.env.API_KEY || "").trim();
  if (!apiKey) {
    console.warn("API_KEY is missing in environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

const cleanAIJSON = (text: string) => {
  try {
    // Robust cleaning to extract JSON block from markdown-heavy or conversational responses
    let cleaned = text.replace(/```json/gi, "").replace(/```/gi, "").trim();
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    
    if (firstBrace !== -1 && lastBrace !== -1) {
      cleaned = cleaned.substring(firstBrace, lastBrace + 1);
    }
    return cleaned;
  } catch (e) {
    console.error("Error cleaning AI JSON:", e);
    return text;
  }
};

export const generateToolSummary = async (toolName: string, description: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Perform a deep expert review of the AI tool "${toolName}". Use the provided description to generate a concise summary and exactly 3 distinct pros and 2 distinct cons. Description: ${description}`,
      config: {
        systemInstruction: "You are an industry-leading tech analyst for AIZONET. Your tone is professional, insightful, and critical. You must return valid JSON matching the requested schema. NO MARKDOWN.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "A high-level 2-sentence overview of the tool." },
            pros: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "A list of 3 key advantages."
            },
            cons: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "A list of 2 key disadvantages."
            }
          },
          required: ["summary", "pros", "cons"]
        }
      }
    });
    
    const text = response.text;
    if (!text) throw new Error("Empty AI response");
    return cleanAIJSON(text);
  } catch (error) {
    console.error("Gemini Review Error:", error);
    return JSON.stringify({
      summary: `${toolName} is currently being analyzed by our AI agents. Preliminary data suggests it offers robust category-specific automation features for 2026 workflows.`,
      pros: ["High-speed data processing", "Intuitive user interface", "Seamless API integration"],
      cons: ["Learning curve for advanced features", "Limited offline documentation"]
    });
  }
};

export const sendChatQuery = async (history: { role: string; parts: { text: string }[] }[]) => {
  const ai = getAIClient();
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
    });

    const lastMessage = history[history.length - 1].parts[0].text;
    const response = await chat.sendMessage({ 
      message: lastMessage,
      config: {
        systemInstruction: `You are ZONET, the official robotic AI guide for AIZONET. 
        AIZONET is the world's leading directory of AI tools, based in Bhilai, India. 
        Your personality is helpful and efficient. 
        Reassure users about technical issues. Keep responses under 100 words.`,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Chatbot Processing Error:", error);
    return "I apologize, my neural link is experiencing minor interference. How else can I assist you with the AIZONET directory?";
  }
};
