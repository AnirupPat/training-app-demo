import { useState } from "react";
import Certificates from "./Certificates";
import { profile } from "../../utils/profile";
import Box from "@mui/material/Box";
import NavBar from "../../components/navBar/NavBar";
import SideNav from "../../components/sideNav/SideNav";
import { Button, Typography } from "@mui/material";

const MyCertificates = () => {
  const [certificatesData] = useState(profile);
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Certificates certificates={certificatesData.certificates} />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "black",
                "&:hover": { backgroundColor: "black" },
              }}
            >
              Add New Certificate
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyCertificates;
