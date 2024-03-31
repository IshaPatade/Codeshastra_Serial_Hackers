import express from "express";
import { postJob, getAllJobs, getJobById } from "../controllers/job.js"; // Assuming the path to your controller function

const router = express.Router();

// POST route to create a new job
router.post("/jobs", postJob);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getJobById);

export default router;