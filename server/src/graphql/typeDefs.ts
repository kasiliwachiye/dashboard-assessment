const typeDefs = `
  type RevenuePerProductData {
    product: String
    revenue: Int
  }

  type SalesByCategoryData {
    category: String
    salesRevenue: Float
  }

  type SalesByRegionData {
    region: String
    salesRevenue: Float
  }

  type SalesTrendData {
    date: String
    salesRevenue: Float
  }

  type TopSellingProductsData {
    product: String
    salesRevenue: Float
  }

  type Query {
    salesTrendData: [SalesTrendData]
    salesByRegionData: [SalesByRegionData]
    salesByCategoryData: [SalesByCategoryData]
    topSellingProductsData: [TopSellingProductsData]
    revenuePerProductData: [RevenuePerProductData]
  }
`;

export default typeDefs;
