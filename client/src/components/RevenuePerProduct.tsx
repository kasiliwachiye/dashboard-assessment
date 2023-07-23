import React from "react";
import { useSelector } from "react-redux";
import { SalesState } from "../redux/reducers";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { Typography } from "@mui/material";

const RevenuePerProduct: React.FC = () => {
  const revenuePerProductData = useSelector(
    (state: SalesState) => state.revenuePerProductData
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom fontSize={20}>
        Revenue Per Product
      </Typography>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
        height={300}
        width={400}
      >
        <VictoryAxis
          tickFormat={(tick) => tick}
          style={{
            tickLabels: {
              angle: -30,
              textAnchor: "end",
              fontSize: 8,
              verticalAnchor: "middle",
            },
          }}
        />
        <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}k $`} />
        <VictoryBar
          data={revenuePerProductData}
          x="product"
          y={(datum) => datum.revenue / 1000}
          style={{
            data: { fill: "#8884d8" },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default RevenuePerProduct;
