import RevenuePerProductData from "./models/RevenuePerProductData.model";
import SalesTrendData from "./models/SalesTrendData.model";
import SalesByRegionData from "./models/SalesByRegionData.model";
import SalesByCategoryData from "./models/SalesByCategoryData.model";
import TopSellingProductsData from "./models/TopSellingProductsData.model";

const resolvers = {
  Query: {
    revenuePerProductData: async () => {
      try {
        const revenuePerProductData = await RevenuePerProductData.find();
        return revenuePerProductData;
      } catch (err) {
        console.error("Error fetching revenue per product data:", err);
        throw new Error("Failed to fetch revenue per product data.");
      }
    },

    salesTrendData: async () => {
      try {
        const salesTrendData = await SalesTrendData.find();
        return salesTrendData;
      } catch (err) {
        console.error("Error fetching sales trend data:", err);
        throw new Error("Failed to fetch sales trend data.");
      }
    },

    salesByRegionData: async () => {
      try {
        const salesByRegionData = await SalesByRegionData.find();
        return salesByRegionData;
      } catch (err) {
        console.error("Error fetching sales by region data:", err);
        throw new Error("Failed to fetch sales by region data.");
      }
    },

    salesByCategoryData: async () => {
      try {
        const salesByCategoryData = await SalesByCategoryData.find();
        return salesByCategoryData;
      } catch (err) {
        console.error("Error fetching sales by category data:", err);
        throw new Error("Failed to fetch sales by category data.");
      }
    },

    topSellingProductsData: async () => {
      try {
        const topSellingProductsData = await TopSellingProductsData.find();
        return topSellingProductsData;
      } catch (err) {
        console.error("Error fetching top selling products data:", err);
        throw new Error("Failed to fetch top selling products data.");
      }
    },
  },
};

export default resolvers;
