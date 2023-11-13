import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import SideNav from "../../components/sideNav/SideNav";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import styles from "./Employees.module.scss";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("12345", "Anirup Patnaik", "Oct 20, 2022", "Technology Lead"),
  createData(
    "09876",
    "Ashish Balachander",
    "June 15, 2022",
    "Software Engineer"
  ),
  createData("45678", "Giridhar Shroff", "Jan 12, 2022", "Engineering Manager"),
  createData("54321", "Sanketh T", "Apr 21, 2022", "Senior Software Engineer"),
  createData("67890", "Achyutha Gopalakrishna", "Jan 05, 2022", "QA Manager"),
];

const Employees = () => {
  return (
    <>
      <div className={styles.main}>
        <NavBar />
        <Box height={70} />
        <Box sx={{ display: "flex", padding: "10px" }}>
          <SideNav />
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography sx={{ textAlign: "left", fontSize: 30 }}>
                Employee Details
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee ID</TableCell>
                      <TableCell>Employee</TableCell>
                      <TableCell>Joining Date</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell>{row.calories}</TableCell>
                        <TableCell>{row.fat}</TableCell>
                        <TableCell>{row.carbs}</TableCell>
                        <TableCell>{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Employees;
