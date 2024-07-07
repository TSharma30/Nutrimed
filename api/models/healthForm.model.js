// models/HealthForm.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const HealthFormSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  diseases: [{ name: String, duration: Number }],
  allergies: [{ name: String }],
  alcohol: { type: String, required: true },
  smoking: { type: String, required: true },
  country: { type: String, required: true },
  diet: { type: String, required: true },
}, { timestamps: true });

const HealthForm = mongoose.model('HealthForm', HealthFormSchema);

export default HealthForm;
