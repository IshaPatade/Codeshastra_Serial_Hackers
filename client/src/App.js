import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import { useEffect, useState } from "react";
import Layout from "scenes/layout";
import Dashboard_admin from "./scenes/dashboard/dashboard_admin";
import Dashboard_user from "./scenes/dashboard/dashboard_farmer";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import Form from "components/Form";
import VideoCall from "components/VidoeCall";
import Editor from "scenes/editor/Editor";
import Python from "scenes/python/Python"
import { useLocation } from "react-router-dom";
import AuthForm from "./pages/Auth/AuthForm";
import ChatAdmin from "components/chatAdmin/index";

import { useAuthContext } from "./hooks/useAuthContext";
import Payment from "components/Payment";
import Crispjs from "components/Crisp";
import FarmerForm from "components/FarmerForm";
import Dashboard from "scenes/dashboard";
import News from "components/News";
import RoomPage from "components/RoomPage";
import Dashboard2 from "scenes/dashboard/Dashboard_farm";
import Calendar from "components/Calendar";
import Jobs from "scenes/jobs";
import Courses from "scenes/courses/Courses";
import { EditRoadOutlined } from "@mui/icons-material";
import Apply from "scenes/apply/Apply";
import ApplyDetails from "scenes/apply/ApplyDetails";

import Candidates from "scenes/viewCandidates/Candidates";
function App() {
  const { user } = useAuthContext();
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // const localuser = localStorage.getItem("user");

  // const parsedUser = JSON.parse(localuser);
  // const email = parsedUser.email;
  // console.log(parsedUser.email);
  // const userrole = parsedUser.role;

 
  const [userrole, setUserRole] = useState(null);
  // userrole?location.pathname === "/dashboard"? 
  useEffect(() => {
    if (user) {
      const localUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(localUser);
      setUserRole(parsedUser.role);
    }
  }, [user]);

  //   :"";


  return (
    // <div className="app">
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
 
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route
              path="/auth"
              element={!user ? <AuthForm /> : <Navigate to="/dashboard" />}
            />
            <Route path="/videocall" element={<VideoCall />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
            <Route element={<Layout />}>
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} />  */}
              {/* <Route path="/dashboard" {userrole=="user"?<Navigate to="/dashboard_user"/> : <Navigate to="/dashboard_admin" />
              }/> */}
              {userrole === "user" ? (
    <Route path="/dashboard" element={<Navigate to="/dashboard_user" />} />
  ) : (
    <Route path="/dashboard" element={<Navigate to="/dashboard_admin" />} />
  )}
              <Route path="/dashboard_user" element={<Dashboard2 />} />

              <Route path="/dashboard_admin" element={<Dashboard_admin />} />
              {/* <Route path="/dashboard_user" element={<Dashboard_user />} /> */}
              <Route path="/payment" element={<Payment />} />
              <Route path="/farmerform" element={<FarmerForm />} />
              <Route path="/products" element={<Products />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/applydetails/:id" element={<ApplyDetails />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/discuss" element={<Transactions />} />
              <Route path="/resume" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/code" element={<Editor />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/form" element={<Form />} />
              <Route path="/news" element={<News />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/python" element={<Python />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/chatadmin" element={<ChatAdmin />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <Crispjs />
      {/* </div> */}
    </>
  );
}

export default App;

// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { themeSettings } from "theme";
// import Layout from "scenes/layout";
// import Dashboard_admin from "./scenes/dashboard/dashboard_admin"
// import Dashboard_user from "./scenes/dashboard/dashboard_farmer"
// import Products from "scenes/products";
// import Customers from "scenes/customers";
// import Transactions from "scenes/transactions";
// import Geography from "scenes/geography";
// import Overview from "scenes/overview";
// import Daily from "scenes/daily";
// import Monthly from "scenes/monthly";
// import Breakdown from "scenes/breakdown";
// import Admin from "scenes/admin";
// import Performance from "scenes/performance";
// import Form from "components/Form";

// import AuthForm from "./pages/Auth/AuthForm";

// import { useAuthContext } from "./hooks/useAuthContext";
// import Payment from "components/Payment";
// import Crispjs from "components/Crisp";
// import FarmerForm from "components/FarmerForm";
// import Dashboard from "scenes/dashboard";

// function App() {
//     const { user } = useAuthContext();
//   const mode = useSelector((state) => state.global.mode);
//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   return (
//     // <div className="app">
//     <>

//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Routes>
//           {/* <Route element={<Layout />}> */}
//             {/* <Route
//               path="/"
//               element={
//                 (user.role=="user") ? (
//                   <Navigate to="/dashboard" replace />
//                 ) : (
//                   <Navigate to="/auth" />
//                 )
//               }
//             />  */}
//              <Route
//               path="/"
//               element={
//                   <Navigate to="/auth" />
//               }
//             />
//             <Route
//               path="/auth"
//               element={!user ? <AuthForm /> : <Navigate to="/dashboard" />}
//             />
//                <Route element={<Layout />}>
//                {/* <Route path="/" element={<Navigate to="/dashboard" replace />} />  */}
//                <Route path="/dashboard" element={<Dashboard/>} />
//               <Route path="/dashboard_admin" element={<Dashboard_admin />} />
//               <Route path="/dashboard_user" element={<Dashboard_user />} />
//               <Route path="/payment" element={<Payment/>}/>
//               <Route path="/farmerform" element={<FarmerForm/>}/>
//               <Route path="/products" element={<Products />} />
//               <Route path="/customers" element={<Customers />} />
//               <Route path="/transactions" element={<Transactions />} />
//               <Route path="/geography" element={<Geography />} />
//               <Route path="/overview" element={<Overview />} />
//               <Route path="/daily" element={<Daily />} />
//               <Route path="/monthly" element={<Monthly />} />
//               <Route path="/breakdown" element={<Breakdown />} />
//               <Route path="/admin" element={<Admin />} />
//               <Route path="/performance" element={<Performance />} />
//               <Route path="/form" element={<Form />} />

//             </Route>
//           </Routes>
//         </ThemeProvider>
//       </BrowserRouter>
//       <Crispjs/>
//     {/* </div> */}
//     </>
//   );
// }

// export default App;
