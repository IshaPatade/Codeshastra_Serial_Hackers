import React, { useMemo, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme, MenuItem, Select } from "@mui/material";
import { data } from "./cmo_msp_mandi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const OverviewChart = ({ data2 }) => {
  // const theme = useTheme();
  // const [selectedCommodity, setSelectedCommodity] = useState("SUGAR-CANE");

  // const handleCommodityChange = (event) => {
  //   setSelectedCommodity(event.target.value);
  // };

  // const filteredData = useMemo(() => {
  //   if (!data) return [];

  //   // Filter data based on selected commodity
  //   console.log("Selected commodity:", selectedCommodity);
  //   return data.filter((item) => item.commodity === selectedCommodity);
  // }, [data, selectedCommodity]);

  // const chartData = useMemo(() => {
  //   if (!filteredData) return [];

  //   return filteredData.map((item) => ({
  //     x: item.year,
  //     y: item.msprice,
  //   }));
  // }, [filteredData]);

  // console.log("Filtered data:", filteredData);
  // console.log("Chart data:", chartData);


  const labels = ['January', 'February', 'March', 'April', 'May', 'June'   ];
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
    };
    const datad = {
      labels,
      datasets: [
        {
            label: 'Flat',
            data: [8 , 3 , 5 ,8 , 3 , 5] ,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'CN',
            data: [8 , 3 , 5,6,5,10] ,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'DAA',
            data: [9 , 10 , 8,7,4,8] ,
            borderColor: 'rgb(106, 23, 99)',
            backgroundColor: 'rgba(202, 81, 100, 0.5)',
          },
          {
            label: 'WP',
            data: [2 , 10 , 8,5,8,9] ,
            borderColor: 'rgb(153, 100, 35)',
            backgroundColor: 'rgba(253, 62, 90, 0.5)',
          },
          {
            label: 'PS',
            data: [1 , 10 , 10,8,5,2] ,
            borderColor: 'rgb(89, 132, 99)',
            backgroundColor: 'rgba(79, 25, 200, 0.5)',
          },
          {
            label: 'THRESHOLD',
            data: [3 , 3 , 3,3,3,3] ,
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgba(179, 125, 20, 0.5)',
          }
      ],
    };

  return (
    <>
      

      <Line
        options={options}
        data={datad}
        style={{ maxHeight: "270px", padding: "2px 15px" }}
      />
      {/* <Select
      sx={{
        padding: '0px',
        width: { xs: '100%', md: '20%' }, // Set width to 100% on extra-small screens (xs), and 20% on medium screens and larger (md)
        height: '40px', // Set a fixed height for better readability
        marginBottom: '20px',
      }}
        value={selectedCommodity}
        onChange={handleCommodityChange}
        displayEmpty
        inputProps={{ "aria-label": "Select Commodity" }}
      >
        <MenuItem value="" disabled>
          Select Commodity
        </MenuItem>
        {[
          "COTTON",
          "RICE(PADDY-HUS)",
          "Jowar_Hybrid",
          "SORGUM(JAWAR)",
          "BAJRI",
          "MAIZE",
          "Ragi_Maldandi",
          "SPLIT BLACK GRAM",
          "SUNFLOWER",
          "Soyabean_Black",
          "SESAMUM",
          "WHEAT(HUSKED)",
          "BARLI",
          "MUSTARD",
          "SAFFLOWER",
          "Toria_Yellow",
          "COCONUT",
        ].map((commodity) => (
          <MenuItem key={commodity} value={commodity}>
            {commodity}
          </MenuItem>
        ))}
      </Select>
      <ResponsiveLine
        // data={[{ id: selectedCommodity, data: chartData }]}
        data={[{ id: selectedCommodity, data: chartData, lineColor: "white" }]}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        margin={{ top: 10, right: 50, bottom: 100, left: 70 }}
        xScale={{ type: "linear", min: "auto", max: "auto" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
        curve="cardinal"
        axisBottom={{
          tickSize: 5,
          tickPadding: 10, // Increase the tickPadding for better spacing
          tickRotation: -45, // Rotate the tick labels by -45 degrees
          legend: "Year",
          legendPosition: "middle",
          legendOffset: 50, // Adjust the legendOffset for better positioning
        }}
        axisLeft={{
          tickValues: 5,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "MS Price",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: "nivo" }}
        lineWidth={2}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
      /> */}
 </>
  );
};

export default OverviewChart;





// import React, { useMemo } from "react";
// import { ResponsiveLine } from "@nivo/line";
// import { useTheme } from "@mui/material";
// import { data } from "./cmo_msp_mandi";

// const OverviewChart = ({ data2 }) => {
//   const theme = useTheme();

//   const filteredData = useMemo(() => {
//     if (!data) return [];

//     // Filter data for commodity "SUGAR-CANE"
//     return data.filter((item) => item.commodity === "SUGAR-CANE");
//   }, [data]);

//   const chartData = useMemo(() => {
//     if (!filteredData) return [];

//     return filteredData.map((item) => ({
//       x: item.year,
//       y: item.msprice,
//     }));
//   }, [filteredData]);

//   return (
//     <ResponsiveLine
//       data={[{ id: "SUGAR-CANE", data: chartData }]}
//       theme={{
//         axis: {
//           domain: {
//             line: {
//               stroke: theme.palette.secondary[200],
//             },
//           },
//           legend: {
//             text: {
//               fill: theme.palette.secondary[200],
//             },
//           },
//           ticks: {
//             line: {
//               stroke: theme.palette.secondary[200],
//               strokeWidth: 1,
//             },
//             text: {
//               fill: theme.palette.secondary[200],
//             },
//           },
//         },
//         legends: {
//           text: {
//             fill: theme.palette.secondary[200],
//           },
//         },
//         tooltip: {
//           container: {
//             color: theme.palette.primary.main,
//           },
//         },
//       }}
//       margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
//       xScale={{ type: "linear", min: "auto", max: "auto" }}
//       yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
//       curve="cardinal"
//       axisBottom={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "Year",
//         legendPosition: "middle",
//         legendOffset: 36,
//       }}
//       axisLeft={{
//         tickValues: 5,
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "MS Price",
//         legendPosition: "middle",
//         legendOffset: -60,
//       }}
//       enableGridX={false}
//       enableGridY={false}
//       colors={{ scheme: "nivo" }}
//       lineWidth={2}
//       pointSize={10}
//       pointColor={{ theme: "background" }}
//       pointBorderWidth={2}
//       pointBorderColor={{ from: "serieColor" }}
//       pointLabelYOffset={-12}
//       useMesh={true}
//     />
//   );
// };

// export default OverviewChart;