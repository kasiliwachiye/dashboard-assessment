export interface SalesTrendData {
  date: string;
  salesRevenue: number;
}

export interface SalesByRegionData {
  region: string;
  salesRevenue: number;
}

export interface SalesByCategoryData {
  category: string;
  salesRevenue: number;
}

export interface TopSellingProductsData {
  product: string;
  salesRevenue: number;
}

export interface RevenuePerProductData {
  product: string;
  revenue: number;
}
