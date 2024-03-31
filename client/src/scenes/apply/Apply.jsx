import React, { useEffect, useState } from 'react'
import ApplyDetails from './ApplyDetails';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material"
import axios from 'axios';

const Apply = () => {
    const theme = useTheme();
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState({});
    const navigate = useNavigate();

    const getApiData = async () => {
        try {
            const res = await axios.get("http://localhost:4000/job/jobs"); // Added http://
            setMyData(res.data);
        } catch (error) {
            setIsError("Error from content", error); // Corrected typo
        }
    };
    

    useEffect(() => {
        getApiData();
    }, []);


    // const handleApplyNowClick = async (id) => {
    //     try {
    //         // Make a POST request to the server backend
    //         const res = await axios.post(`http://localhost:4000/job/jobs/${id}`, { jobId: id });
    //         // Optionally, handle the response if needed
    //         console.log(res.data);
    //         // Pass the data to ApplyDetails component
    //         navigate('/applydetails', { state: { jobData: res.data } });
    //     } catch (error) {
    //         console.error('Error applying for the job:', error);
    //     }
    // };

    const handleApplyNowClick = (id) => {
        navigate(`/applydetails/${id}`);
    };
    
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {
                myData.map((post) => {
                    const { _id, companyName, jobDescription, role, skills, location } = post;
                    return (
                        <Card key={_id} sx={{ width: '30%', mb: 3, mt: 3, ml: 1.5, fontFamily: 'Merriweather', padding: '1.5%' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 15, fontWeight: 500 }} gutterBottom>
                                    <LocationOnIcon sx={{ fontSize: 15 }} />
                                    {location}
                                </Typography>
                                <Typography sx={{ fontSize: 20, fontWeight: 500 }} gutterBottom>
                                    <img src="https://source.unsplash.com/featured/?company,logo" alt={companyName} style={{ maxWidth: '100%', height: '20vh' }} />
                                </Typography>
                                <Typography sx={{ fontSize: 18, fontWeight: 500 }} component="div">
                                    {role}
                                </Typography>
                                <Typography sx={{ fontSize: 15, mt: 3, fontWeight: 500 }} component="div">
                                    <span style={{ fontWeight: "bold" }}>Company Name : </span> {companyName.length > 0 ? companyName : 'NA'}
                                </Typography>
                                <Typography sx={{ fontSize: 15, mt: 3, fontWeight: 500 }} component="div">
                                    {jobDescription}<span style={{ color: 'grey', fontSize: '12px', cursor: 'pointer' }}> .... Read More</span>
                                </Typography>

                                <Typography sx={{ mb: 1.5, mt: 3, fontSize: 15 }}>
                                    <span style={{ fontWeight: "bold" }}>Technologies : </span> {skills.length > 0 ? skills.join(', ') : 'python, aws'}
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
                                    onClick={() => handleApplyNowClick(_id)}
                                >
                                    Apply Now
                                </Button>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
        //     <Card sx={{ width: '30%', mb: 3, mt: 3, fontFamily: 'Merriweather', padding: '1.5%' }}>
        //     <CardContent>
        //         {/* <Typography sx={{ fontSize: 15, fontWeight: 500 }} gutterBottom>
        //             <LocationOnIcon sx={{ fontSize: 15 }} />
        //              {location}
        //         </Typography> */}
        //         <Typography sx={{ fontSize: 20, fontWeight: 500 }} gutterBottom>
        //             <img src="https://source.unsplash.com/featured/?company,logo" alt={companyName} style={{ maxWidth: '100%', height: '20vh' }} />
        //         </Typography>
        //         <Typography sx={{ fontSize: 18, fontWeight: 500 }} component="div">
        //             {role}
        //         </Typography>
        //         {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //             {job.job_type}
        //         </Typography> */}
        //         <Typography sx={{ fontSize: 15, mt: 3, fontWeight: 500 }} component="div">
        //             <span style={{ fontWeight: "bold" }}>Company Name : </span> {companyName.length > 0 ? job.company : 'NA'}
        //         </Typography>
        //         {/* Display formatted description */}
        //         <Typography sx={{ fontSize: 15, mt: 3, fontWeight: 500 }} component="div">
        //             {shortDescription}<span style={{ color: 'grey', fontSize: '12px', cursor: 'pointer' }}> .... Read More</span>
        //         </Typography>

        //         <Typography sx={{ mb: 1.5, mt: 3, fontSize: 15 }}>
        //             <span style={{ fontWeight: "bold" }}>Technologies : </span> {skills.length > 0 ? skills.join(', ') : 'python, aws'}
        //         </Typography>

        //         <Typography sx={{ fontSize: 15, mb: 1.5, fontWeight: 800 }}>
        //             Salary: {salary}
        //         </Typography>


        //         <Typography sx={{ mb: 1.5, mt: 1.5, fontSize: 15 }} color="text.secondary">
        //             Number of Openings: {openings}
        //         </Typography>
        //         <Button
        //             sx={{
        //                 backgroundColor: theme.palette.secondary[200],
        //                 color: theme.palette.background.alt,
        //                 fontWeight: "bold",
        //                 mt: 1.5,
        //                 mb: 1.5,
        //                 fontSize: 15
        //             }}
        //             onClick={handleApplyNowClick}
        //         >
        //             Apply Now
        //         </Button>
        //     </CardContent>
        // </Card >

    )
}

export default Apply