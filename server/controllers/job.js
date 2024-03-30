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