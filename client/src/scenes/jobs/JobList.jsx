import React, { useState, useEffect } from 'react';
import JobCard from './JobCard'

const JobList = () => {
    const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
        const apiKey = '0bc3a76d-c24b-47ab-8fdc-d17665c2c185';
        const headers = {
            'Content-Type': 'application/json',
            'api-key': '0bc3a76d-c24b-47ab-8fdc-d17665c2c185'
        };
        const LIMIT = 30;
        const urls = `https://api.crackeddevs.com/v1/get-jobs?limit=${LIMIT}`
    
        fetch(urls, {
            headers: headers
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                const filteredJobs = data.filter(job => job.company && job.logo_url);
                setJobs(filteredJobs);
            } else {
                console.error('Data is not an array:', data);
            }
        })
        .catch(error => console.error('Error fetching data: ', error));
    }, []);
    
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {jobs.map((job, index) => (
          <React.Fragment key={index}>
            {index > 0 && index % 3 === 0 && <div style={{ width: '100%', marginBottom: '20px' }} />} {/* Add margin between rows */}
            <JobCard job={job} />
          </React.Fragment>
))}

      </div>
    );
};



// const JobList = () => {
//     const [jobs, setJobs] = useState([]);
  
//     useEffect(() => {
//         const apiKey = '0bc3a76d-c24b-47ab-8fdc-d17665c2c185';
//         const headers = {
//             'Content-Type': 'application/json',
//             // 'Authorization': `Bearer ${apiKey}`
//             'api-key': '0bc3a76d-c24b-47ab-8fdc-d17665c2c185'
//         };
//         const LIMIT = 30;
//         const urls = `https://api.crackeddevs.com/v1/get-jobs?limit=${LIMIT}`
    
//         fetch(urls, {
//             headers: headers // Pass headers as an object here
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Check if data is an array
//             if (Array.isArray(data)) {
//                 const filteredJobs = data.filter(job => job.company && job.logo_url);
//                 setJobs(filteredJobs);
//             } else {
//                 console.error('Data is not an array:', data);
//             }
//         })
//         .catch(error => console.error('Error fetching data: ', error));
//     }, []);
    
  
//     return (
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//         {jobs.map((job, index) => (
//           <JobCard key={index} job={job} />
//         ))}
//       </div>
//     );
//   };

export default JobList;