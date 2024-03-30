import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Box,
    useTheme,
    useMediaQuery,
  } from "@mui/material"
// import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const JobCard = ({ job }) => {
    const theme = useTheme();
    // Set default location as "India" if location is null
    const location = job.location_iso ? job.location_iso : "India";

    // Render the card only if logo_url is not null
    if (!job.logo_url) {
        return null;
    }

    // Function to format the description
    const formatDescription = (description) => {
        // Remove the first 28 characters
        description = description.slice(28);
    
        // Remove any leading or trailing whitespace
        description = description.trim();
    
        // Split the description into words
        const words = description.split(' ');
    
        // Ensure we limit the description to 100 words
        const formattedDescription = words.slice(0, 35).join(' ');
    
        return formattedDescription;
    };

    // Format the description
    const formattedDescription = formatDescription(job.description);

    return (
        <Card sx={{ width: '30%', mb: 3, mt: 3, fontFamily: 'Merriweather', padding: '1.5%'}}>
            <CardContent >
                <Typography sx={{ fontSize: 15,  fontWeight: 500 }} gutterBottom>
                    <LocationOnIcon sx={{  fontSize: 15 }} />
                     {location}
                </Typography>
                <Typography sx={{textAlign: 'center', fontSize: 20,  fontWeight: 500}} textAlign='center' gutterBottom>
                    <img src={job.logo_url} alt={job.company} style={{ maxWidth: '100%', height: '20vh' }} />
                </Typography>
                <Typography sx={{ fontSize: 18,  fontWeight: 500}} component="div">
                    {job.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {job.job_type}
                </Typography>
                <Typography sx={{ fontSize: 15, mt:3, fontWeight: 500 }} component="div">
                    <span style={{fontWeight: "bold"}}>Company Name : </span> {job.company.length > 0 ? job.company : 'NA'}
                </Typography>
                {/* Display formatted description */}
                <Typography sx={{ fontSize: 15, mt:3, fontWeight: 500 }} component="div">                 
                    {formattedDescription}<span style={{color: 'grey', fontSize: '12px', cursor: 'pointer'}}> .... Read More</span>
                </Typography>

                <Typography sx={{ mb: 1.5, mt: 3, fontSize: 15 }}>
                    <span style={{fontWeight: "bold"}}>Technologies : </span> {job.technologies.length > 0 ? job.technologies.join(', ') : 'python, aws'}
                </Typography>
                
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Salary: {job.min_payment_usd !== null ? `${job.min_payment_usd} - ${job.max_payment_usd} USD` : 'Not specified'}
                </Typography> */}
                <Typography sx={{ mb: 1.5, mt: 1.5, fontSize: 15 }} color="text.secondary">
                    Number of people applied: {job.applications}
                </Typography>
                <Button
              sx={{
                // backgroundColor: `#d5dcee`,
                backgroundColor: theme.palette.secondary[200],
                color: theme.palette.background.alt,
                fontWeight: "bold",
                mt: 1.5,
                mb: 1.5,
                fontSize: 15
              }}
            //   onClick={() => {
            //     navigate("/form");
            //   }}
            >
              Apply Now
            </Button>
            </CardContent>
        </Card>
    );
};



// const JobCard = ({ job }) => {
//     // Set default location as "India" if location is null
//     const location = job.location_iso ? job.location_iso : "India";

//     // Render the card only if logo_url is not null
//     if (!job.logo_url) {
//         return null;
//     }

//     return (
//         <Card sx={{ width: '23%', mb: 3, mt: 3, fontFamily: 'Merriweather'}}>
//             <CardContent >
//                 <Typography sx={{ fontSize: 20,  fontWeight: 500 }} gutterBottom>
//                     <LocationOnIcon sx={{  fontSize: 18 }} />
//                      {location}
//                 </Typography>
//                 <Typography sx={{ fontSize: 20,  fontWeight: 500}} gutterBottom>
//                     <img src={job.logo_url} alt={job.company} style={{ maxWidth: '100%', height: '30vh' }} />
//                 </Typography>
//                 <Typography sx={{ fontSize: 18,  fontWeight: 500}} component="div">
//                     {job.title}
//                 </Typography>
//                 <Typography sx={{ fontSize: 15,  fontWeight: 500}} component="div">
//                     {job.description}
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     {job.job_type}
//                 </Typography>
//                 {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Salary: {job.min_payment_usd !== null ? `${job.min_payment_usd} - ${job.max_payment_usd} USD` : 'Not specified'}
//                 </Typography> */}
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Number of people applied: {job.applications}
//                 </Typography>
//             </CardContent>
//         </Card>
//     );
// };




// const JobCard = ({ job }) => {
//     return (
//         <Card sx={{ maxWidth: 275, mb: 3, mt: 3}}>

//             <CardContent >
//                 <Typography sx={{ fontSize: 15,  fontWeight: 500 }} gutterBottom>
//                     <LocationOnIcon sx={{  fontSize: 18 }} />
//                      {job.location_iso}
//                 </Typography>
//                 <Typography sx={{ fontSize: 15,  fontWeight: 500}} gutterBottom>
//                     {job.logo_url && <img src={job.logo_url} alt={job.company} style={{ maxWidth: '100%' }} />}
//                 </Typography>
//                 <Typography variant="h5" component="div">
//                     {job.title}
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     {job.job_type}
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Salary: {job.min_payment_usd !== null ? `${job.min_payment_usd} - ${job.max_payment_usd} USD` : 'Not specified'}
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Number of people applied: {job.applications}
//                 </Typography>
//                 {/* <Typography variant="body2">
//                     Description: {description.split(" ").slice(0, 15).join(" ") + "..."}
//                 </Typography> */}
//             </CardContent>
//             {/* <CardActions>
//                 <Button disableElevation variant='contained' size="small" startIcon={<AddIcon />}></Button>
//             </CardActions> */}
//         </Card>

        
//     //   <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
//     //     {job.logo_url && <img src={job.logo_url} alt={job.company} style={{ maxWidth: '100%' }} />}
//     //     <h3>{job.title}</h3>
//     //     <p>{job.company}</p>
//     //     <p>{job.job_type}</p>
//     //     <p>{job.location_iso}</p>
//     //     <p>Salary: {job.min_payment_usd !== null ? `${job.min_payment_usd} - ${job.max_payment_usd} USD` : 'Not specified'}</p>
//     //     <p>Deadline: {job.deadline !== null ? job.deadline : 'Not specified'}</p>
//     //     <p>Applications: {job.applications}</p>
//     //   </div>
//     );
//   };

export default JobCard;