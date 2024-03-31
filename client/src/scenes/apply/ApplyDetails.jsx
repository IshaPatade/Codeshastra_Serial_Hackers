// ApplyDetails.js

import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Button, TextField , Grid} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DiReact, DiJava, DiMysql } from 'react-icons/di';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material';

const ApplyDetails = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [coverLetter, setCoverLetter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/job/jobs/${id}`);
        setJobData(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };
    fetchData();
  }, [id]);

  // const getTechIcon = (skill) => {
  //   switch (skill.toLowerCase()) {
  //     case 'react':
  //       return <DiReact />;
  //     case 'java':
  //       return <DiJava />;
  //     case 'sql':
  //       return <DiMysql />;
  //     default:
  //       return <CodeIcon fontSize="small" />;
  //   }
  // };

  const getTechIcon = (skill) => {
    if (typeof skill === 'string') {
      switch (skill.toLowerCase()) {
        case 'react':
          return <DiReact />;
        case 'java':
          return <DiJava />;
        case 'sql':
          return <DiMysql />;
        default:
          return <CodeIcon fontSize="small" />;
      }
    }
    // Return a default icon or null if skill is not a string
    return <CodeIcon fontSize="small" />;
  };
  

  const handleApply = () => {
    console.log('Applying for job:', jobData._id, 'with cover letter:', coverLetter);
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 2, fontFamily: 'Merriweather' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: { md: 2 } }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{ fontSize: '2rem', fontFamily: 'Merriweather'  }}>
            {jobData.companyName}
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item>
              <WorkIcon />
            </Grid>
            <Grid item>
              {/* Additional job details */}
            </Grid>
          </Grid>
          <Typography variant="subtitle1" color={theme.palette.secondary[100]} component="div" sx={{fontFamily: 'Merriweather', fontSize: '1.8rem',  margin: '2% auto'}}>
            Job Role : {jobData.role}
          </Typography>
          {/* Additional job details */}
          <Typography variant="body1" color={theme.palette.secondary[100]} sx={{fontFamily: 'Merriweather' , mt: 3, mb:3,  fontSize: { xs: '0.9rem', md: '1rem' } }}>
            {jobData.jobDescription}
          </Typography>
          <Typography variant="h2" color={theme.palette.secondary[200]} sx={{fontFamily: 'Merriweather' , mb: 1, fontSize: '1.2rem' }}>
            Skills:
          </Typography>
          {jobData.skills && jobData.skills.length > 0 && (
            <ul>
              {jobData.skills.map((skill, index) => (
                <li key={index}>
                  {getTechIcon(skill)} {skill}
                </li>
              ))}
            </ul>
          )}
          {/* Additional job details */}
        </CardContent>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Cover Letter"
            multiline
            rows={6}
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" onClick={handleApply} sx={{ fontFamily: 'Merriweather', mt: 4,mb:3, color: theme.palette.background.alt, backgroundColor: theme.palette.secondary[200] }}>
            Apply
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ApplyDetails;



// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Card, CardContent, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Button, useTheme } from '@mui/material';
// import WorkIcon from '@mui/icons-material/Work';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import CodeIcon from '@mui/icons-material/Code';
// import { DiReact, DiJava, DiCpp, DiMysql } from 'react-icons/di';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ApplyDetails = ({ job }) => {
//   const theme = useTheme();

//   const { id } = useParams();
//   const [jobData, setJobData] = useState({});
//   const [coverLetter, setCoverLetter] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`http://localhost:4000/job/jobs/${id}`);
//             setJobData(response.data);
//         } catch (error) {
//             console.error('Error fetching job details:', error);
//         }
//     };
//     fetchData();
// }, [id]);

//   const getTechIcon = (skill) => {
//     switch (skill.toLowerCase()) {
//       case 'react':
//         return <DiReact />;
//       case 'java':
//         return <DiJava />;
//       case 'sql':
//         return <DiMysql />;
//       default:
//         return <CodeIcon fontSize="small" />; // Use CodeIcon for other skills
//     }
//   };

//   const handleApply = () => {
//     // Handle applying for the job with cover letter
//     console.log('Applying for job:', jobData._id, 'with cover letter:', coverLetter);
// };

//   return (
//     <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 2 }}>
//       {/* <CardMedia
//         component="img"
//         sx={{ width: { xs: '100%', md: 200 }, height: { xs: 'auto', md: 200 }, objectFit: 'contain', mb: { xs: 2, md: 0 } }}
//         image={companyLogo}
//         alt={companyName}
//       /> */}
//       <Box sx={{ display: 'flex', flexDirection: 'column', ml: { md: 2 } }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
//             {jobData.companyName}
//           </Typography>
//           <Typography variant="subtitle1" color={theme.palette.secondary[100]} component="div" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
//             {jobData.jobTitle}
//           </Typography>
//           <Grid container spacing={2} sx={{ mt: 1 }}>
//             <Grid item>
//               <WorkIcon />
//             </Grid>
//             <Grid item>
//               {/* <Typography variant="body1" color={theme.palette.secondary[100]} sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
//                 Openings: {openings}
//               </Typography> */}
//             </Grid>
//           </Grid>
//           <Grid container spacing={2}>
//             <Grid item>
//               <CalendarTodayIcon />
//             </Grid>
//             <Grid item>
//               {/* <Typography variant="body1" color={theme.palette.secondary[100]} sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
//                 Posting Date: {postingDate}
//               </Typography> */}
//             </Grid>
//           </Grid>
//           <Grid container spacing={2}>
//             <Grid item>
//               <CalendarTodayIcon />
//             </Grid>
//             <Grid item>
//               {/* <Typography variant="body1" color={theme.palette.secondary[100]} sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
//                 Closing Date: {closingDate}
//               </Typography> */}
//             </Grid>
//           </Grid>
//           <Grid container spacing={2}>
//             <Grid item>
//               <AttachMoneyIcon />
//             </Grid>
//             <Grid item>
//               {/* <Typography variant="body1" color={theme.palette.secondary[100]} sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
//                 Salary/Stipend: {salary}
//               </Typography> */}
//             </Grid>
//           </Grid>
//           <Typography variant="body1" color={theme.palette.secondary[100]} sx={{ mt: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
//             {jobData.jobDescription}
//           </Typography>
//           <Typography variant="h2" color={theme.palette.secondary[200]} sx={{ mt: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
//             Skills:
//           </Typography>
//           <List dense>
//             {jobData.skills.map((skill, index) => (
//               <ListItem key={index} disablePadding>
//                 <ListItemIcon sx={{fontSize: { xs: '0.9rem', md: '1.5rem' }}} >{getTechIcon(skill)}</ListItemIcon>
//                 <ListItemText primary={skill} />
//               </ListItem>
//             ))}
//           </List>
//           <Typography variant="body1" color={theme.palette.secondary[100]} sx={{ mt: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
//             Other Details:
//           </Typography>
//         </CardContent>
//         <Box sx={{ mt: 2 }}>
//           <TextField
//             label="Cover Letter"
//             multiline
//             rows={6}
//             value={coverLetter}
//             onChange={(e) => setCoverLetter(e.target.value)}
//             variant="outlined"
//             fullWidth
//           />
//           <Button variant="contained" onClick={handleApply} sx={{ mt: 4, color: theme.palette.background.alt, backgroundColor: theme.palette.secondary[200] }}>
//             Apply
//           </Button>
//         </Box>
//       </Box>
//     </Card>
//   );
// };

// export default ApplyDetails;