import Box from "@mui/material/Box";
import NavBar from "../../components/navBar/NavBar";
import SideNav from "../../components/sideNav/SideNav";
import Certificates from "../../components/certificates/Certificates";
import styles from "./Profile.module.scss";
import { Typography } from "@mui/material";

const Profile = () => {
  const certificatesData = [
    {
      title: "Certificate 1",
      issuer: "Issuer 1",
      date: "May 2022",
    },
    {
      title: "Certificate 2",
      issuer: "Issuer 2",
      date: "June 2023",
    },
    // Add more certificate objects as needed
  ];
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Certificates certificates={certificatesData} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
