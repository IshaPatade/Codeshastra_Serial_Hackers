import React, { useState ,useEffect} from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "components/Sidebar";
import SidebarAdmin from "components/SidebarAdmin";
import { useGetUserQuery } from "state/api";
import Navbar2 from "components/Navbar2";
import { useAuthContext } from "../../hooks/useAuthContext";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  const { user } = useAuthContext();


  const [userrole, setUserRole] = useState(null);
  // userrole?location.pathname === "/dashboard"? 
  useEffect(() => {
    if (user) {
      const localUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(localUser);
      setUserRole(parsedUser.role);
    }
  }, [user]);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      {userrole=="user"? <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />: <SidebarAdmin
      user={data || {}}
      isNonMobile={isNonMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
    />}
     
      <Box flexGrow={1}>
        <Navbar2
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
