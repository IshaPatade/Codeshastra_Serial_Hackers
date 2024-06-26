import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const HighlightedCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [highlightedDates, setHighlightedDates] = useState([
    // Add your dates here that you want to highlight (in Date object format)
    new Date(2024, 2, 10),
    new Date(2024, 2, 15),
    new Date(2024, 2, 20),
  ]);

  const tileContent = ({ date }) => {
    // Check if the current date is in the highlightedDates array
    const isHighlighted = highlightedDates.find(
      (highlightedDate) =>
        highlightedDate.getDate() === date.getDate() &&
        highlightedDate.getMonth() === date.getMonth() &&
        highlightedDate.getFullYear() === date.getFullYear()
    );

    // If the date is highlighted, render a green dot
    return isHighlighted ? <div style={{ backgroundColor: 'green', width: '100%', height: '100%' }}></div> : null;
  };

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div style={{ color: 'black', width: '100%', textAlign: 'center' }}>
      {/* Apply custom class for calendar styling outside the JSX block */}
      {/* Note: JSX does not support block comments within attributes */}
      <Calendar
        onChange={onChange}
        value={date}
        tileContent={tileContent}
        calendarClassName="black-calendar"
        // style={{ width: '100%', margin: '0 auto' }}
      />
    </div>
  );
};

export default HighlightedCalendar;




// import React from 'react'
// import StreakCalendar from './Calendar2'

// const Calendar2 = () => {
//   return (
//     <div className="container mx-auto mt-5">
//         <h1 className="text-3xl font-bold mb-5">My Streak Calendar</h1>
//         <StreakCalendar startDate="2024-03-01" streakLength={31} />
//  </div>
//   )
// }

// export default Calendar2


// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const BreakdownChart = () => {
//   const [date, setDate] = useState(new Date());
//   const [highlightedDates, setHighlightedDates] = useState([
//     // Add your dates here that you want to highlight (in Date object format)
//     new Date(2024, 3, 10),
//     new Date(2024, 3, 15),
//     new Date(2024, 3, 20),
//   ]);

//   const tileContent = ({ date }) => {
//     // Check if the current date is in the highlightedDates array
//     const isHighlighted = highlightedDates.find(
//       (highlightedDate) =>
//         highlightedDate.getDate() === date.getDate() &&
//         highlightedDate.getMonth() === date.getMonth() &&
//         highlightedDate.getFullYear() === date.getFullYear()
//     );

//     // If the date is highlighted, render a green dot
//     return isHighlighted ? <div style={{ backgroundColor: 'green', width: '100%', height: '100%', color: 'black' }}></div> : null;
//   };

//   const onChange = (date) => {
//     setDate(date);
//   };

//   return (
//     <div>
//       <Calendar
//         onChange={onChange}
//         value={date}
//         tileContent={tileContent}
//         style={{height:'150%',width:'150%',color:"black"}}
//       />
//     </div>
//   );
// };

// export default BreakdownChart;

// import React, { useMemo, useState } from "react";
// import { ResponsivePie } from "@nivo/pie";
// import { useTheme, MenuItem, Select } from "@mui/material";
// import { data } from "./monthly2";

// const BreakdownChart = ({ data2 }) => {
//   const theme = useTheme();
//   const [selectedYear, setSelectedYear] = useState(2015); // Example: Initial year

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   const filteredData = useMemo(() => {
//     if (!data) return [];

//     // Filter data based on selected year
//     console.log("Selected year:", selectedYear);
//     return data.filter((item) => item.Year === selectedYear);
//   }, [data, selectedYear]);

//   const calculateTotalArrivals = (commodity) => {
//     return filteredData.reduce((total, item) => {
//       if (item.Commodity === commodity) {
//         total += item.arrivals_in_qtl;
//       }
//       return total%20;
//     }, 0);
//   };

//   const pieChartData = useMemo(() => {
//     if (!filteredData) return [];

//     const commodities = [
//       "Business",
//       "Developer",
//       "Data Analyst",
//       "Data Scientist",
//       "Software Engineer",
      
//     ];

//     const pieData = commodities.map((commodity) => ({
//       id: commodity,
//       label: commodity,
//       value: calculateTotalArrivals(commodity),
//     }));

//     return pieData;
//   }, [filteredData]);

//   console.log("Pie chart data:", pieChartData);

//   return (
//     <>
//       {/* <Select
//         value={selectedYear}
//         onChange={handleYearChange}
//         displayEmpty
//         inputProps={{ "aria-label": "Select Year" }}
//       >
//         <MenuItem value={2015}>2015</MenuItem>
//         <MenuItem value={2016}>2016</MenuItem>

//         {/* Add other years as needed */}
//       {/* </Select> */} 
//       {/* <ResponsivePie
//         data={pieChartData}
//         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//         innerRadius={0.5}
//         padAngle={0.7}
//         cornerRadius={3}
//         colors={{ scheme: "category10" }}
//         borderWidth={1}
//         borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//         radialLabelsSkipAngle={10}
//         radialLabelsTextXOffset={6}
//         radialLabelsTextColor="#333333"
//         radialLabelsLinkOffset={0}
//         radialLabelsLinkDiagonalLength={16}
//         radialLabelsLinkHorizontalLength={24}
//         radialLabelsLinkStrokeWidth={1}
//         radialLabelsLinkColor={{ from: "color" }}
//         sliceLabelsSkipAngle={10}
//         sliceLabelsTextColor="#333333"
//       /> */}

//         <ResponsivePie
//           data={pieChartData}
//           width={350} // Adjust width as needed
//           height={400} // Adjust height as needed
//           margin={{ top: 20, right: 80, bottom: 100, left: 80 }}
//           innerRadius={0.5}
//           padAngle={0.7}
//           cornerRadius={3}
//           colors={{ scheme: "category10" }}
//           borderWidth={1}
//           borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//           radialLabelsSkipAngle={10}
//           radialLabelsTextXOffset={6}
//           radialLabelsTextColor="#333333"
//           radialLabelsLinkOffset={0}
//           radialLabelsLinkDiagonalLength={16}
//           radialLabelsLinkHorizontalLength={24}
//           radialLabelsLinkStrokeWidth={1}
//           radialLabelsLinkColor={{ from: "color" }}
//           sliceLabelsSkipAngle={10}
//           sliceLabelsTextColor="#333333"
//         />
//     </>
//   );
// };

// export default BreakdownChart;

// import React from "react";
// import { ResponsivePie } from "@nivo/pie";
// import { Box, Typography, useTheme } from "@mui/material";
// import { useGetSalesQuery } from "state/api";

// const BreakdownChart = ({ isDashboard = false }) => {
//   const { data, isLoading } = useGetSalesQuery();
//   const theme = useTheme();

//   if (!data || isLoading) return "Loading...";

//   const colors = [
//     theme.palette.secondary[500],
//     theme.palette.secondary[300],
//     theme.palette.secondary[300],
//     theme.palette.secondary[500],
//   ];
//   const formattedData = Object.entries(data.salesByCategory).map(
//     ([category, sales], i) => ({
//       id: category,
//       label: category,
//       value: sales,
//       color: colors[i],
//     })
//   );

//   return (
//     <Box
//       height={isDashboard ? "400px" : "100%"}
//       width={undefined}
//       minHeight={isDashboard ? "325px" : undefined}
//       minWidth={isDashboard ? "325px" : undefined}
//       position="relative"
//     >
//       <ResponsivePie
//         data={formattedData}
//         theme={{
//           axis: {
//             domain: {
//               line: {
//                 stroke: theme.palette.secondary[200],
//               },
//             },
//             legend: {
//               text: {
//                 fill: theme.palette.secondary[200],
//               },
//             },
//             ticks: {
//               line: {
//                 stroke: theme.palette.secondary[200],
//                 strokeWidth: 1,
//               },
//               text: {
//                 fill: theme.palette.secondary[200],
//               },
//             },
//           },
//           legends: {
//             text: {
//               fill: theme.palette.secondary[200],
//             },
//           },
//           tooltip: {
//             container: {
//               color: theme.palette.primary.main,
//             },
//           },
//         }}
//         colors={{ datum: "data.color" }}
//         margin={
//           isDashboard
//             ? { top: 40, right: 80, bottom: 100, left: 50 }
//             : { top: 40, right: 80, bottom: 80, left: 80 }
//         }
//         sortByValue={true}
//         innerRadius={0.45}
//         activeOuterRadiusOffset={8}
//         borderWidth={1}
//         borderColor={{
//           from: "color",
//           modifiers: [["darker", 0.2]],
//         }}
//         enableArcLinkLabels={!isDashboard}
//         arcLinkLabelsTextColor={theme.palette.secondary[200]}
//         arcLinkLabelsThickness={2}
//         arcLinkLabelsColor={{ from: "color" }}
//         arcLabelsSkipAngle={10}
//         arcLabelsTextColor={{
//           from: "color",
//           modifiers: [["darker", 2]],
//         }}
//         legends={[
//           {
//             anchor: "bottom",
//             direction: "row",
//             justify: false,
//             translateX: isDashboard ? 20 : 0,
//             translateY: isDashboard ? 50 : 56,
//             itemsSpacing: 0,
//             itemWidth: 85,
//             itemHeight: 18,
//             itemTextColor: "#999",
//             itemDirection: "left-to-right",
//             itemOpacity: 1,
//             symbolSize: 18,
//             symbolShape: "circle",
//             effects: [
//               {
//                 on: "hover",
//                 style: {
//                   itemTextColor: theme.palette.primary[500],
//                 },
//               },
//             ],
//           },
//         ]}
//       />
//       <Box
//         position="absolute"
//         top="50%"
//         left="50%"
//         color={theme.palette.secondary[400]}
//         textAlign="center"
//         pointerEvents="none"
//         sx={{
//           transform: isDashboard
//             ? "translate(-75%, -170%)"
//             : "translate(-50%, -100%)",
//         }}
//       >
//         <Typography variant="h6">
//           {!isDashboard && "Total:"} ${data.yearlySalesTotal}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default BreakdownChart;
