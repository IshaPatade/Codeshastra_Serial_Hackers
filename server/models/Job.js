import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  candidates: [
    {
      type: Array,
    },
  ],
  jobDescription: {
    type: String,
  },
  skills: [
    {
      type: Array,
    },
  ],
  role: {
    type: String,
  },
  location: {
    type: String,
  },
});

const job = mongoose.model("Job", jobSchema);
export default job;