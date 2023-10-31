import { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./Home.module.scss";
import NavBar from "../../components/navBar/NavBar";
import SideNav from "../../components/sideNav/SideNav";
import Grid from "@mui/material/Grid";
import { appState } from "../../store/app";
import PieChartComp from "../../components/pieChartComp/PieChartComp";
import { techDashboard } from "../../utils/analytics";
import { useRecoilState } from "recoil";

const PieChart = ({ dashboardData }) => (
  <div className={styles.home}>
    {dashboardData.map((val) => (
      <PieChartComp key={val.title} data={val} title={val.title} />
    ))}
  </div>
);
const Home = () => {
  const [dashboardData, setDashboardData] = useState(techDashboard);
  const [open, setOpen] = useRecoilState(appState);
  console.log("open", open);
  return (
    <>
      <div className={styles.main}>
        <NavBar />
        <Box height={70} />
        <Box sx={{ display: "flex", padding: "10px" }}>
          <SideNav />
          {window.innerWidth < 600 && !open.sideNavOpen && (
            <PieChart dashboardData={dashboardData} />
          )}
          {window.innerWidth > 600 && (
            <PieChart dashboardData={dashboardData} />
          )}
          {/* <PieChart dashboardData={dashboardData} /> */}
        </Box>
      </div>
    </>
  );
};

export default Home;
