import Job from "../models/Job.js"; // Assuming the path to your Job model

export const postJob = async (req, res) => {
  const { companyName, candidates, jobDescription, skills, role, location } =
    req.body;

  try {
    const newJob = new Job({
      companyName,
      candidates,
      jobDescription,
      skills,
      role,
      location,
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  const { id } = req.params; // Assuming the job ID is passed as a route parameter

  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};