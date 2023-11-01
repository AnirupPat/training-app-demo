import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Grid,
  Paper,
} from "@mui/material";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Certificates.module.scss";

const Certificate = ({ title, issuer, date }) => (
  <div className={styles.certificate}>
    <Card sx={{ borderRadius: 5 }}>
      <CardContent
        className={styles.content}
        sx={{
          padding: 0,
          "&:last-child": { pb: 0 },
          minHeight: 60,
        }}
      >
        <Grid container XS={12} spacing={0} sx={{ minHeight: 60 }}>
          <Grid
            item
            xs={2}
            className={styles.grid}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <div className={styles.month}>
              {new Date(date).toLocaleString("default", { month: "long" })}
            </div>
            <div className={styles.year}>{new Date(date).getFullYear()}</div>
          </Grid>
          <Grid item xs={8} className={styles.grid}>
            <div className={styles.title}>{title}</div>
          </Grid>
          <Grid
            item
            xs={1}
            className={[styles.grid, styles.actions]}
            sx={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            <FaDownload size={25} />
          </Grid>
          <Grid
            item
            xs={1}
            className={[styles.grid, styles.actions]}
            sx={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            <AiFillDelete size={25} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </div>
);

const Certificates = ({ certificates }) => (
  <div>
    <Typography sx={{ textAlign: "left", fontSize: 20 }}>
      My Certifications
    </Typography>
    {certificates.map((certificate, index) => (
      <Certificate
        key={index}
        title={certificate.title}
        issuer={certificate.issuer}
        date={certificate.date}
      />
    ))}
  </div>
);

export default Certificates;
