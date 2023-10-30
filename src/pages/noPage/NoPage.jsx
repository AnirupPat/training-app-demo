import Header from "../../components/navBar/NavBar";
import styles from "./NoPage.module.scss";

const NoPage = () => {
  return (
    <>
      <Header />
      <h2 className={styles.NoPage}>Page not found</h2>
    </>
  );
};

export default NoPage;
