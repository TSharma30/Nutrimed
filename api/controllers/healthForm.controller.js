import HealthForm from '../models/healthForm.model.js';



export const createHealthForm = async (req, res, next) => {
  try {
  
    const userId = req.userId; // Assuming userId is added by verifyToken middleware

    const healthForm = new HealthForm({
    
      ...req.body,
      userId,
    });
    console.log("reached here");

    await healthForm.save();
    console.log("saved")
    res.status(201).json({ message: 'Health form submitted successfully' });
  } catch (error) {
    next(error);
  }
};

// export const getHealthDetail = async (req, res) => {
//   try {
//     const userId = req.userId; // Assuming userId is obtained from request (e.g., through authentication middleware)

//     if (!userId) {
//       return { status: 400, data: { message: 'User ID not provided' } };
//     }

//     // Find the health detail document based on userId
//     const healthDetail = await HealthForm.findOne({ userId: userId });

//     if (!healthDetail) {
//       return { status: 404, data: { message: 'Health details not found' } };
//     }

//     return { status: 200, data: healthDetail };
//   } catch (error) {
//     console.error('Error fetching health details:', error);
//     return { status: 500, data: { message: 'Server error' } };
//   }
// };

import { Groq } from "groq-sdk";
import dotenv from 'dotenv';

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_KEY
});

export const getHealthDetail = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(400).json({ message: 'User ID not provided' });
    }

    const healthDetail = await HealthForm.findOne({ userId: userId });

    if (!healthDetail) {
      return res.status(404).json({ message: 'Health details not found' });
    }

    // Extract relevant data for diet plan
    const { age, gender, diseases, allergies, alcohol, smoking, diet, country } = healthDetail;

    // Generate diet plan using Groq
    const prompt = `Generate a 4-week diet plan, nutrition considerations, foods to avoid, and common FAQs for a person with the following health profile:
    Age: ${age}
    Gender: ${gender}
    Diseases: ${diseases.map(d => d.name).join(', ')}
    Allergies: ${allergies.map(a => a.name).join(', ')}
    Alcohol consumption: ${alcohol}
    Smoking: ${smoking}
    Current diet: ${diet}
    Country: ${country}

    Please format the response as HTML, with appropriate headings, lists, and paragraphs.`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "mixtral-8x7b-32768",
      temperature: 0.5,
      max_tokens: 4096,
    });

    const dietPlanHtml = completion.choices[0]?.message?.content || 'Failed to generate diet plan';

    // Send the HTML response
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(dietPlanHtml);

  } catch (error) {
    console.error('Error fetching health details or generating diet plan:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};