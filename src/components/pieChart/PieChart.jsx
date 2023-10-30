import { PieChart } from "@mui/x-charts/PieChart";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const PieChartComp = () => {
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </CardContent>
    </Card>
  );
};

export default PieChartComp;
