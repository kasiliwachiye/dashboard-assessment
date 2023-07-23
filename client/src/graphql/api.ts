import { gql } from "@apollo/client";
import { client } from "./client";

// Define the GraphQL queries
const GET_SALES_TREND_DATA = gql`
  query GetSalesTrendData {
    salesTrendData {
      date
      salesRevenue
    }
  }
`;

const GET_SALES_BY_REGION_DATA = gql`
  query GetSalesByRegionData {
    salesByRegionData {
      region
      salesRevenue
    }
  }
`;

const GET_SALES_BY_CATEGORY_DATA = gql`
  query GetSalesByCategoryData {
    salesByCategoryData {
      category
      salesRevenue
    }
  }
`;

const GET_TOP_SELLING_PRODUCTS_DATA = gql`
  query GetTopSellingProductsData {
    topSellingProductsData {
      product
      salesRevenue
    }
  }
`;

const GET_REVENUE_PER_PRODUCT_DATA = gql`
  query GetRevenuePerProductData {
    revenuePerProductData {
      product
      revenue
    }
  }
`;

// Implement the API functions using Apollo Client
export const fetchSalesTrendData = async () => {
  console.log("Fetching sales trend data...");
  const { data } = await client.query({
    query: GET_SALES_TREND_DATA,
  });
  console.log("Fetched sales trend data:", data.salesTrendData);
  return data.salesTrendData;
};

export const fetchSalesByRegionData = async () => {
  console.log("Fetching sales by region data...");
  const { data } = await client.query({
    query: GET_SALES_BY_REGION_DATA,
  });
  console.log("Fetched sales by region data:", data.salesByRegionData);
  return data.salesByRegionData;
};

export const fetchSalesByCategoryData = async () => {
  console.log("Fetching sales by category data...");
  const { data } = await client.query({
    query: GET_SALES_BY_CATEGORY_DATA,
  });
  console.log("Fetched sales by category data:", data.salesByCategoryData);
  return data.salesByCategoryData;
};

export const fetchTopSellingProductsData = async () => {
  console.log("Fetching top selling products data...");
  const { data } = await client.query({
    query: GET_TOP_SELLING_PRODUCTS_DATA,
  });
  console.log(
    "Fetched top selling products data:",
    data.topSellingProductsData
  );
  return data.topSellingProductsData;
};

export const fetchRevenuePerProductData = async () => {
  console.log("Fetching revenue per product data...");
  const { data } = await client.query({
    query: GET_REVENUE_PER_PRODUCT_DATA,
  });
  console.log("Fetched revenue per product data:", data.revenuePerProductData);
  return data.revenuePerProductData;
};
