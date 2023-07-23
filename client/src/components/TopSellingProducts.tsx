import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { Typography } from "@mui/material";
import { SalesState } from "../redux/reducers";
import { useSelector } from "react-redux";

const TopSellingProducts: React.FC = () => {
  const topSellingProductsData = useSelector(
    (state: SalesState) => state.topSellingProductsData
  );

  const sortedData = topSellingProductsData
    .slice()
    .sort((a, b) => b.salesRevenue - a.salesRevenue);

  const topProductsData = sortedData.slice(0, 10);

  return (
    <div>
      <Typography variant="h4" gutterBottom fontSize={20}>
        Top Selling Products
      </Typography>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
        height={300}
        width={400}
        horizontal // Make the bars horizontal
      >
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick}`}
          style={{
            tickLabels: {
              fontSize: 8,
              angle: -45,
              textAnchor: "end",
            },
          }}
        />
        <VictoryAxis
          tickFormat={(tick) => tick}
          style={{
            tickLabels: {
              fontSize: 8,
              angle: 60,
              textAnchor: "end",
            },
          }}
        />
        <VictoryBar
          data={topProductsData}
          x="product"
          y="salesRevenue"
          labels={({ datum }) => `$${datum.salesRevenue}`}
          style={{
            data: { fill: "#8884d8" },
            labels: { fontSize: 8, fill: "black" },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default TopSellingProducts;
