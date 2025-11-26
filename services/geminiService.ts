import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// Note: In a real app, ensure process.env.API_KEY is defined.

const ai = new GoogleGenAI({ apiKey });

export const getBeautyAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "Je suis désolée, je ne peux pas me connecter pour le moment (Clé API manquante).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `Tu es Nanass, une experte en beauté bienveillante et professionnelle pour le site 'Nanass Hair & Guide'.
        Tu donnes des conseils sur les cheveux (spécialement afro/texturés), les soins du corps et les ongles.
        Tes réponses doivent être courtes, encourageantes, et orientées vers des solutions naturelles ou pratiques.
        Si on te pose une question hors sujet, ramène poliment la conversation vers la beauté.
        Utilise des émojis pour rendre la conversation chaleureuse.`,
        temperature: 0.7,
      }
    });

    return response.text || "Désolée, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la consultation de l'assistant. Veuillez réessayer plus tard.";
  }
};