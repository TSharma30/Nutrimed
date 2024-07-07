// import Groq from 'groq-sdk';

// const PROMPT_PREFIX = "Generate a weekly diet plan based on the following details:\n";

// export async function generateRecommendations(clientData, model, apiKey) {
//   if (model === "groq") {
//     const response = await groqGenerate(apiKey, clientData);
//     return response;
//   }
//   return "Model not supported";
// }

// async function groqGenerate(apiKey, clientData) {
//   const groq = new Groq({ apiKey });
//   const chatCompletion = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: `${PROMPT_PREFIX}${JSON.stringify(clientData, null, 2)}`,
//       },
//     ],
//     model: "mixtral-8x7b-32768",
//   });

//   return chatCompletion.choices[0].message.content;
// }
