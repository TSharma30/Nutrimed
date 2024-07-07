// routes/healthFormRoutes.js
import express from 'express';
import { createHealthForm, getHealthDetail} from '../controllers/healthForm.controller.js';
import verifyToken from '../middlewares/jwt.js';

const router = express.Router();

router.post('/healthForm',verifyToken, createHealthForm);

router.get('/healthFormData',verifyToken, getHealthDetail);


export default router;
