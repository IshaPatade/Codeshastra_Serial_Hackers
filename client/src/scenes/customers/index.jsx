import React, { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Candidates = () => {
  const isNonMediumScreens = useMediaQuery("(max-width: 960px)");
  const theme = useTheme();
  // const { data, isLoading } = useGetCustomersQuery();
  // console.log("data", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    // {
    //   field: "linkedInUrl",
    //   headerName: "LinkedIn Url",
    //   flex: 1,
    // },
    {
      field: "githubUrl",
      headerName: "Github Url",
      flex: 1,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "rank",
      headerName: "Rank",
      flex: 0.5,
    },
  ];

  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data here
    fetchData()
      .then((data) => {
        setRows(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const fetchData = () => {
    // Replace this with your actual data fetching logic, such as fetching from an API
    return new Promise((resolve) => {
      const data = [
        { _id: 1, name: 'Jainil Shah', email: 'jainil@gmail.com', githubUrl: 'https://github.com/Jainilshah07', rank: 52 },
        { _id: 2, name: 'Darsh Shah', email: 'darsh@gmail.com' , githubUrl: 'https://github.com/dbs-2012', rank: 68 },
        { _id: 3, name: 'Vedant Kesaria', email: 'vedant@gmail.com',  githubUrl: 'https://github.com/dbs-2012',rank: 77  },
        { _id: 4, name: 'Isha Patade', email: 'jane@gmail.com', githubUrl: 'https://github.com/dbs-2012', rank: 55 },
        { _id: 5, name: 'Jinish Shah', email: 'jane@gmail.com',  githubUrl: 'https://github.com/dbs-2012', rank: 64 },
        { _id: 6, name: 'Parshva Vyas', email: 'jane@gmail.com',  githubUrl: 'https://github.com/dbs-2012', rank: 80 },
        // Add more rows as needed
        
      ];
      resolve(data);
    });
  };

  return (
    <Box m={isNonMediumScreens ? "0.5rem 0.5rem" : "1.5rem 2.5rem"}>
      <Header title="JOB Applications" subtitle="Students applied for jobs" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading}
          getRowId={(row) => row._id}
          rows={rows}
          columns={columns}
          pageSize={10}
        />
      </Box>
    </Box>
  )
}

export default Candidates