import { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import styles from "./PieChartComp.module.scss";
import { Typography } from "@mui/material";

const PieChartComp = ({ data, title }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 500) setWidth(400);
      else setWidth(250);
    });
    if (window.innerWidth > 500) setWidth(400);
    else setWidth(250);
  }, []);
  return (
    <div className={styles.pieChartCard}>
      <Card
        sx={{
          minWidth: 150,
          borderRadius: 2,
          boxShadow: "10px 10px 10px 10px #888888",
        }}
      >
        <CardContent>
          <PieChart
            series={[
              {
                data: data.data,
              },
            ]}
            width={width}
            height={200}
          />
          <Typography sx={{ marginTop: "10px" }}>{title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PieChartComp;
