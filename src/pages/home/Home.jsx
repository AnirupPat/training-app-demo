import { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./Home.module.scss";
import NavBar from "../../components/navBar/NavBar";
import SideNav from "../../components/sideNav/SideNav";
import Grid from "@mui/material/Grid";
import PieChartComp from "../../components/pieChartComp/PieChartComp";
import { techDashboard } from "../../utils/analytics";

const Home = () => {
  const [dashboardData, setDashboardData] = useState(techDashboard);
  console.log(dashboardData);
  return (
    <>
      <div className="bgcolor">
        <NavBar />
        <Box height={70} />
        <Box sx={{ display: "flex", padding: "10px" }}>
          <SideNav />
          <div className={styles.home}>
            {dashboardData.map((val) => (
              <PieChartComp key={val.title} data={val} title={val.title} />
            ))}
          </div>
        </Box>
      </div>
    </>
  );
};

export default Home;
