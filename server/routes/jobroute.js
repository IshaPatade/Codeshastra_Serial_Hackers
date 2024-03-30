import express from "express";
import { postJob } from "../controllers/job.js"; // Assuming the path to your controller function

const router = express.Router();

// POST route to create a new job
router.post("/jobs", postJob);

export default router;