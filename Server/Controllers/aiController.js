import OpenAI from "openai";

export const aiInsight = async (req, res) => {
    const { carbonSaved } = req.body;
  try {
    // const { carbonSaved } = req.body;

    // 🔁 If no API key or quota issues, fallback
    if (!process.env.OPENAI_API_KEY) {
      return res.json({
        insight: `You saved ${carbonSaved} grams of CO₂ today.
This helps reduce pollution and protect the environment.
Try walking or cycling for short trips next time.`,
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `A student saved ${carbonSaved} grams of CO2 today. Explain why this is good.`,
    });

    res.json({ insight: response.output_text });
  } catch (err) {
    console.error("AI error, using fallback");

    // 🔁 FINAL fallback (even if OpenAI throws 429)
    res.json({
      insight: `You saved ${carbonSaved} grams of CO₂ today.
This helps reduce pollution and protect the environment.
Keep choosing carpooling to reduce emissions.`,
    });
  }
};
