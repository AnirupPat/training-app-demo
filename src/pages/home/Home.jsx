import Box from "@mui/material/Box";
import styles from "./Home.module.scss";
import { styled } from "@mui/material/styles";
import NavBar from "../../components/navBar/NavBar";
import SideNav from "../../components/sideNav/SideNav";
import Grid from "@mui/material/Grid";
import PieChartComp from "../../components/pieChart/PieChart";

const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <NavBar />
        <Box height={70} />
        <Box sx={{ display: "flex", padding: "10px" }}>
          <SideNav />
          <Grid
            container
            spacing={4}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item lg={6} md={6} xs={12}>
              <PieChartComp />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <PieChartComp />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <PieChartComp />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <PieChartComp />
            </Grid>
          </Grid>
        </Box>
        {/* </Box> */}
      </div>
    </>
  );
};

export default Home;
