import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import { faker } from "@faker-js/faker";
import SalesTrendData from "./models/SalesTrendData.model.js";
import SalesByRegionData from "./models/SalesByRegionData.model.js";
import SalesByCategoryData from "./models/SalesByCategoryData.model.js";
import TopSellingProductsData from "./models/TopSellingProductsData.model.js";
import RevenuePerProductData from "./models/RevenuePerProductData.model.js";

require("dotenv").config();

function connectToDatabase() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("🚀 Connected to MongoDB Database"))
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1);
    });
}

function generateRevenuePerProductData() {
  const products = [
    "Laptops",
    "Headphones",
    "Smartwatches",
    "Tablets",
    "Televisions",
    "Fitness Trackers",
    "Cameras",
    "Gaming Consoles",
    "Wireless Earbuds",
  ];
  const revenueData = [];
  products.forEach((product) => {
    const revenue = faker.number.int({ min: 10000, max: 500000 });
    revenueData.push({
      product: product,
      revenue: revenue,
    });
  });
  return revenueData;
}

function generateSalesTrendData() {
  const salesData = [];
  const currentDate = new Date();

  // Set the start date to one year ago from the current date
  const startDate = new Date(
    currentDate.getFullYear() - 1,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  // Calculate the number of days between the start and end dates
  const totalDays = Math.floor(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Calculate the interval to get around 12 entries in total
  const interval = Math.max(1, Math.floor(totalDays / 12));

  // Generate data for each month within the year
  for (let days = 0; days <= totalDays; days += interval) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + days);

    const salesRevenue = faker.number.int({ min: 50000, max: 200000 });
    salesData.push({
      date: date.toISOString().split("T")[0],
      salesRevenue: salesRevenue,
    });
  }

  return salesData;
}

function generateSalesByRegionData() {
  const regions = [
    "North America",
    "Europe",
    "Middle East",
    "Australia",
    "Africa",
    "South America",
    "East Asia",
    "Central Asia",
  ];
  const salesData = [];
  regions.forEach((region) => {
    const salesRevenue = faker.number.int({ min: 100000, max: 500000 });
    salesData.push({
      region: region,
      salesRevenue: salesRevenue,
    });
  });
  return salesData;
}

function generateSalesByCategoryData() {
  const categories = [
    "Electronics",
    "Apparel",
    "Home & Garden",
    "Toys",
    "Books",
  ];
  const salesData = [];
  categories.forEach((category) => {
    const salesRevenue = faker.number.int({ min: 80000, max: 300000 });
    salesData.push({
      category: category,
      salesRevenue: salesRevenue,
    });
  });
  return salesData;
}

function generateTopSellingProductsData() {
  const products = [
    "Laptops",
    "Headphones",
    "Smartwatches",
    "Tablets",
    "Televisions",
    "Fitness Trackers",
    "Cameras",
    "Gaming Consoles",
    "Wireless Earbuds",
  ];
  const salesData = [];
  products.forEach((product) => {
    const salesRevenue = faker.number.int({ min: 50000, max: 150000 });
    salesData.push({
      product: product,
      salesRevenue: salesRevenue,
    });
  });
  return salesData;
}

async function insertSalesData() {
  try {
    const revenuePerProductData = generateRevenuePerProductData();
    await RevenuePerProductData.insertMany(revenuePerProductData);
    const salesTrend = generateSalesTrendData();
    await SalesTrendData.insertMany(salesTrend);
    const salesByRegion = generateSalesByRegionData();
    await SalesByRegionData.insertMany(salesByRegion);
    const salesByCategory = generateSalesByCategoryData();
    await SalesByCategoryData.insertMany(salesByCategory);
    const topSellingProducts = generateTopSellingProductsData();
    await TopSellingProductsData.insertMany(topSellingProducts);
    console.log("Data inserted successfully.");
  } catch (err) {
    console.error("Data insertion failed: ", err);
    process.exit(1);
  }
}

async function startServer() {
  connectToDatabase();
  await insertSalesData();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer();
