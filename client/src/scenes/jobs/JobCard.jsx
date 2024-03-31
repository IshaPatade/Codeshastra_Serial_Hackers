import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import {
    Box,
    useTheme,
    useMediaQuery,
  } from "@mui/material"

const JobCard = ({ job }) => {
    const theme = useTheme();

    // Set default location as "India" if location is null
    const location = job.location_iso ? job.location_iso : "India";

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

    // Handle apply button click
    const handleApplyNowClick = () => {
        // Navigate to the specified URL
        window.open(`https://www.crackeddevs.com/job/${job.id}?ref=api`, '_blank');
    };

    return (
        <Card sx={{ width: '30%', mb: 3, mt: 3, fontFamily: 'Merriweather', padding: '1.5%' }}>
            <CardContent>
                <Typography sx={{ fontSize: 15, fontWeight: 500 }} gutterBottom>
                    <LocationOnIcon sx={{ fontSize: 15 }} />
                     {location}
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 500 }} gutterBottom>
                    <img src={job.logo_url} alt={job.company} style={{ maxWidth: '100%', height: '20vh' }} />
                </Typography>
                <Typography sx={{ fontSize: 18, fontWeight: 500 }} component="div">
                    {job.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {job.job_type}
                </Typography>
                <Typography sx={{ fontSize: 15, mt: 3, fontWeight: 500 }} component="div">
                    <span style={{ fontWeight: "bold" }}>Company Name : </span> {job.company.length > 0 ? job.company : 'NA'}
                </Typography>
                {/* Display formatted description */}
                <Typography sx={{ fontSize: 15, mt: 3, fontWeight: 500 }} component="div">
                    {formattedDescription}<span style={{ color: 'grey', fontSize: '12px', cursor: 'pointer' }}> .... Read More</span>
                </Typography>

                <Typography sx={{ mb: 1.5, mt: 3, fontSize: 15 }}>
                    <span style={{ fontWeight: "bold" }}>Technologies : </span> {job.technologies.length > 0 ? job.technologies.join(', ') : 'python, aws'}
                </Typography>

                <Typography sx={{ fontSize: 15, mb: 1.5, fontWeight: 800 }}>
                    Salary: {job.min_payment_usd !== null && job.max_payment_usd !== null 
                            ? `${job.min_payment_usd} - ${job.max_payment_usd} USD` 
                        : job.min_payment_usd !== null 
                            ? job.min_payment_usd !== null && `${job.min_payment_usd} USD` 
                                : job.max_payment_usd !== null 
                                    ? job.max_payment_usd !== null && `${job.max_payment_usd} USD` 
                                        : 'NA'}
                </Typography>


                <Typography sx={{ mb: 1.5, mt: 1.5, fontSize: 15 }} color="text.secondary">
                    Number of people applied: {job.applications}
                </Typography>
                <Button
                    sx={{
                        backgroundColor: theme.palette.secondary[200],
                        color: theme.palette.background.alt,
                        fontWeight: "bold",
                        mt: 1.5,
                        mb: 1.5,
                        fontSize: 15
                    }}
                    onClick={handleApplyNowClick}
                >
                    Apply Now
                </Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;