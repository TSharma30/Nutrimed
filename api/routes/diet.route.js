// import express from 'express';
// import { getHealthDetail } from '../controllers/diet.controller.js';
// import { generateRecommendations } from '../Generator.js';
// import verifyToken from '../middlewares/jwt.js';

// const router = express.Router();

// router.get('/generateDietPlan', verifyToken, async (req, res) => {
//   try {
//     const userId = req.userId; // Assuming verifyToken middleware sets req.userId

//     // Fetch the health details
//     const healthDetailResponse = await getHealthDetail({ userId }, res);
    
//     if (healthDetailResponse.status !== 200) {
//       return res.status(healthDetailResponse.status).json(healthDetailResponse.data);
//     }
    
//     const healthDetail = healthDetailResponse.data;

//     // Prepare clientData based on healthDetail
//     const clientData = {
//       age: healthDetail.age.$numberInt,
//       gender: healthDetail.gender,
//       diseases: healthDetail.diseases.map(disease => ({
//         name: disease.name,
//         duration: disease.duration.$numberInt
//       })),
//       allergies: healthDetail.allergies.map(allergy => allergy.name),
//       alcohol: healthDetail.alcohol,
//       smoking: healthDetail.smoking,
//       country: healthDetail.country,
//       diet: healthDetail.diet
//     };

//     // Generate the diet plan using Groq
//     const response = await generateRecommendations(
//       clientData,
//       "groq",
//       process.env.GROQ_KEY
//     );

//     res.status(200).json({
//       data: response,
//     });
//   } catch (err) {
//     console.error('Error generating diet plan:', err);
//     res.status(500).json({ error: `Something went wrong: ${err.message}` });
//   }
// });

// export default router;
