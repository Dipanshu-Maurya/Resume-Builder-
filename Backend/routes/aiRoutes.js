import express from 'express'
import protect from '../middlewares/authMiddleware.js';
import { enhanceJobDescription, enhanceProfessionalSummary, uploadResume } from '../controllers/aiController.js';
import upload from '../config/multer.js';


const aiRouter = express.Router();


aiRouter.post('/enhance-pro-sum', protect,enhanceProfessionalSummary)
aiRouter.post('/enhance-job-desc',enhanceJobDescription)
aiRouter.post('/upload-resume', protect,upload.none(),uploadResume)

export default aiRouter