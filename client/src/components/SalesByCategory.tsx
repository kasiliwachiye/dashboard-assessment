import React from "react";
import { VictoryPie } from "victory";
import { Typography } from "@mui/material";
import { SalesState } from "../redux/reducers";
import { useSelector } from "react-redux";

const SalesByCategory: React.FC = () => {
  const salesByCategoryData = useSelector(
    (state: SalesState) => state.salesByCategoryData
  );

  const categorySalesData = salesByCategoryData.map((datum) => ({
    x: datum.category,
    y: datum.salesRevenue,
  }));

  return (
    <div>
      <Typography variant="h4" gutterBottom fontSize={20}>
        Sales by Category
      </Typography>
      <VictoryPie
        data={categorySalesData}
        colorScale="qualitative"
        height={300}
        width={400}
        labels={({ datum }) => `${datum.x}: $${datum.y}`}
        style={{
          labels: { fontSize: 8 },
        }}
      />
    </div>
  );
};

export default SalesByCategory;
