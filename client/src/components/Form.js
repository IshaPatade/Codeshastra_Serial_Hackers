// Import necessary modules
import React, { useState } from 'react';
import axios from 'axios';
import "./form.css"
const Form = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    candidates: [],
    jobDescription: '',
    skills: [],
    role: '',
    location: '',
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend endpoint
      await axios.post('http://localhost:4000/job/jobs', formData);

      // Reset the form after successful submission
      setFormData({
        companyName: '',
        candidates: [],
        jobDescription: '',
        skills: [],
        role: '',
        location: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors, such as displaying an error message to the user
    }
  };

  return (
    <div className='formDiv'>
      <h2>Create a New Job</h2>
      <form onSubmit={handleSubmit} className='formContainer'>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Skills:
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Job Description:
          <input
            type="text"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;










// import React, { useState } from 'react';
// import axios from 'axios';
// import './form.css';

// const Form = () => {
//     const [formData, setFormData] = useState({
//         companyname: '',
//         role: '',
//         location: '',
//         skills: '',
//         job_desc: '',
//         job_type: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:4000/job/jobs', formData);
//             console.log(response.data); // Log the response from the backend
//             // Optionally, you can reset the form after successful submission
//             setFormData({
//                 companyname: '',
//                 role: '',
//                 location: '',
//                 skills: '',
//                 job_desc: '',
//                 job_type: ''
//             });
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             // Handle errors, such as showing an error message to the user
//         }
//     };

//     return (
//         <div className='formDiv'>
//             <form onSubmit={handleSubmit} className='formContainer'>
//                 <label>
//                     Company Name:
//                     <input
//                         type="text"
//                         name="companyname"
//                         value={formData.companyname}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Role:
//                     <input
//                         type="text"
//                         name="role"
//                         value={formData.role}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Location:
//                     <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                 Skills:
//                     <input
//                         placeholder='Java, SQL'
//                         type="text"
//                         name="skills"
//                         value={formData.skills}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Job Description:
//                     <input
//                         type="text"
//                         name="job_desc"
//                         value={formData.job_desc}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Job Type:
//                     <input
//                         type="text"
//                         name="job_type"
//                         value={formData.job_type}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <div className="submitBtn">
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Form;









// import React, { useState } from 'react';
// import axios from 'axios';
// import './form.css'
// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// const Form = () => {
//     const [formData, setFormData] = useState({
//         companyname: '',
//         role: '',
//         location: '',
//         skills: '',
//         job_desc: '',
//         job_type: ''
//     });
    
//     const [analysisResult, setAnalysisResult] = useState(null);
//     // const prompt = "Give a rough estimate of cibil score using the following details of a farmer, its okay if estimate is very rough, just give the number as the output.";
   
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // const API_KEY = "AIzaSyCwHHCLAEInXJrGE1ZS1XsWhLz4L4yUMkw"; // Replace with your Google Generative AI API key
//     // const genAI = new GoogleGenerativeAI(API_KEY);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // API Call to post JOB
        
//         // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//         // const result = await model.generateContent(prompt);
//         // const text = result.response.text();
//         // setAnalysisResult(text);
//     };

//     return (
//         <div className='formDiv'>
//             <form onSubmit={handleSubmit} className='formContainer'>
//                 <label>
//                     Company Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.companyname}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Role:
//                     <input
//                         type="text"
//                         name="role"
//                         value={formData.role}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Location:
//                     <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                 Skills:
//                     <input
//                         placeholder='Java, SQL'
//                         type="text"
//                         name="skills"
//                         value={formData.skills}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Job Description:
//                     <input
//                         type="text"
//                         name="job_desc"
//                         value={formData.job_desc}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Job Type:
//                     <input
//                         type="text"
//                         name="job_type"
//                         value={formData.job_type}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <div className="submitBtn">
//                 <button type="submit">Submit</button>
//                 </div>
//             </form>

//             {/* {analysisResult && (
//                 <div>
//                     <h2>Analysis Result:</h2>
//                     <p>{analysisResult}</p>
//                 </div>
//             )} */}
//         </div>
//     );
// };

// export default Form;