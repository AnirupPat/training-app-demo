import { PieChart } from "@mui/x-charts/PieChart";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import styles from "./PieChartComp.module.scss";
import { Typography } from "@mui/material";

const PieChartComp = ({ data, title }) => {
  // console.log("pie chart comp");
  // console.log(data);
  return (
    <div className={styles.pieChartCard}>
      <Card sx={{ minWidth: 150 }}>
        <CardContent>
          <PieChart
            series={[
              {
                data: data.data,
              },
            ]}
            width={400}
            height={200}
          />
          <Typography sx={{ marginTop: "10px" }}>{title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PieChartComp;
