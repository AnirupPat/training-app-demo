import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import SideNav from "../../components/sideNav/SideNav";
import PieChartComp from "../../components/pieChartComp/PieChartComp";
import Box from "@mui/material/Box";
import { teamDashboard, teams } from "../../utils/analytics";
import styles from "./TeamDashboard.module.scss";
import { useRecoilState } from "recoil";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { appState } from "../../store/app";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

const PieChart = ({ dashboardData }) => {
  return (
    <div className={styles.home}>
      {dashboardData.map((val) => (
        <PieChartComp key={val.title} data={val} title={val.title} />
      ))}
    </div>
  );
};
const TeamDashboard = () => {
  const navigate = useNavigate();
  const [appSetting, setAppSetting] = useRecoilState(appState);
  const [dashboardData, setDashboardData] = useState([]);
  const [teamData] = useState(teams);
  const [open] = useRecoilState(appState);

  useEffect(() => {
    let selectedTeam = appSetting.selectedTeam;
    setDashboardData(
      teamDashboard.filter((data) => data.team === selectedTeam)
    );
  }, [dashboardData]);
  const handleTeamSelect = (event) => {
    setAppSetting((prevSetting) => {
      return {
        ...prevSetting,
        selectedTeam: event.target.value,
      };
    });
    flushSync(() => {
      setDashboardData(
        dashboardData.filter((data) => data.team === event.target.value)
      );
    });

    navigate(`/team/${event.target.value}/dashboard`);
  };
  return (
    <>
      <div className={styles.main}>
        <NavBar />
        <Box height={70} />
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }}
        >
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
            <Select
              value={appSetting.selectedTeam}
              onChange={handleTeamSelect}
              minWidth={100}
              // autoWidth
              label="Select Team"
            >
              {teamData.map((team) => (
                <MenuItem value={team}>{team}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{ display: "flex", padding: "10px", justifyContent: "center" }}
        >
          <SideNav />
          {window.innerWidth < 600 && !open.sideNavOpen && (
            <PieChart dashboardData={dashboardData} />
          )}
          {window.innerWidth > 600 && (
            <PieChart dashboardData={dashboardData} />
          )}
        </Box>
      </div>
    </>
  );
};

export default TeamDashboard;
