// import HealthForm from '../models/healthForm.model.js';

// export const getHealthDetail = async ({ userId }, res) => {
//   try {
//     if (!userId) {
//       return res.status(400).json({ message: 'User ID not provided' });
//     }

//     // Find the health detail document based on userId
//     const healthDetail = await HealthForm.findOne({ userId: userId });

//     if (!healthDetail) {
//       return res.status(404).json({ message: 'Health details not found' });
//     }

//     return { status: 200, data: healthDetail };
//   } catch (error) {
//     console.error('Error fetching health details:', error);
//     return { status: 500, data: { message: 'Server error' } };
//   }
// };
