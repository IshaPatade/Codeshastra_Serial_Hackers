import React, { useState } from 'react';
import axios from 'axios';
import './form.css'
// const { GoogleGenerativeAI } = require("@google/generative-ai");

const Form = () => {
    const [formData, setFormData] = useState({
        companyname: '',
        role: '',
        location: '',
        skills: '',
        job_desc: '',
        job_type: ''
    });
    
    const [analysisResult, setAnalysisResult] = useState(null);
    const prompt = "Give a rough estimate of cibil score using the following details of a farmer, its okay if estimate is very rough, just give the number as the output.";
   
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const API_KEY = "AIzaSyCwHHCLAEInXJrGE1ZS1XsWhLz4L4yUMkw"; // Replace with your Google Generative AI API key
    // const genAI = new GoogleGenerativeAI(API_KEY);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // API Call to post JOB
        
        // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        // const result = await model.generateContent(prompt);
        // const text = result.response.text();
        // setAnalysisResult(text);
    };

    return (
        <div className='formDiv'>
            <form onSubmit={handleSubmit} className='formContainer'>
                <label>
                    Company Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.companyname}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Role:
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </label>
                <label>
                Skills:
                    <input
                        placeholder='Java, SQL'
                        type="text"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Job Description:
                    <input
                        type="text"
                        name="job_desc"
                        value={formData.job_desc}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Job Type:
                    <input
                        type="text"
                        name="job_type"
                        value={formData.job_type}
                        onChange={handleChange}
                    />
                </label>
                <div className="submitBtn">
                <button type="submit">Submit</button>
                </div>
            </form>

            {/* {analysisResult && (
                <div>
                    <h2>Analysis Result:</h2>
                    <p>{analysisResult}</p>
                </div>
            )} */}
        </div>
    );
};

export default Form;