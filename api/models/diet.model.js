import mongoose from 'mongoose';

const { Schema } = mongoose;

const DietPlanSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  week: { type: String, required: true },
  meals: {
    Breakfast: [{ type: String }],
    Lunch: [{ type: String }],
    Dinner: [{ type: String }],
    Snacks: [{ type: String }],
  },
}, { timestamps: true });

const DietPlan = mongoose.model('DietPlan', DietPlanSchema);

export default DietPlan;
