import { Box } from "@mui/material";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/navBar/NavBar";
import styles from "./NoPage.module.scss";

const NoPage = () => {
  return (
    <>
      <NavBar />
      <Box height={70} />

      <h2 className={styles.NoPage}>Page not found</h2>
    </>
  );
};

export default NoPage;
