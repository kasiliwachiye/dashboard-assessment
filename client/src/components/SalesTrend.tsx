import React from "react";
import { VictoryChart, VictoryAxis, VictoryLine, VictoryTheme } from "victory";
import { Typography } from "@mui/material";
import { SalesState } from "../redux/reducers";
import { useSelector } from "react-redux";

const SalesTrend: React.FC = () => {
  const salesTrendData = useSelector(
    (state: SalesState) => state.salesTrendData
  );

  console.log("sales trend data", salesTrendData);

  return (
    <div>
      <Typography variant="h4" gutterBottom fontSize={20}>
        Sales Trend Over The Year
      </Typography>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
        height={400}
        width={window.innerWidth / 1.25}
      >
        <VictoryAxis
          tickFormat={(tick) => tick}
          style={{
            tickLabels: {
              angle: -25,
              textAnchor: "end",
              fontSize: 8,
              verticalAnchor: "middle",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick / 1000}k $`}
          style={{
            tickLabels: {
              fontSize: 8,
            },
          }}
        />
        <VictoryLine
          data={salesTrendData}
          x="date"
          y={(datum) => datum.salesRevenue / 1000}
          style={{
            data: { stroke: "#8884d8" },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default SalesTrend;
