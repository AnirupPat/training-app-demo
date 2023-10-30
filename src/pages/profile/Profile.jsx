import Box from "@mui/material/Box";
import NavBar from "../../components/navBar/NavBar";
import SideNav from "../../components/sideNav/SideNav";
// import styles from "./Home.module.scss";

const Profile = () => {
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        {/* <Toolbar /> */}
        <SideNav />
        <h1>Profile</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
      </Box>
    </>
  );
};

export default Profile;
