// actionTypes
export const FETCH_SALES_TREND_DATA_REQUEST = "FETCH_SALES_TREND_DATA_REQUEST";
export const FETCH_SALES_TREND_DATA_SUCCESS = "FETCH_SALES_TREND_DATA_SUCCESS";
export const FETCH_SALES_TREND_DATA_FAILURE = "FETCH_SALES_TREND_DATA_FAILURE";

export const FETCH_SALES_BY_REGION_DATA_REQUEST =
  "FETCH_SALES_BY_REGION_DATA_REQUEST";
export const FETCH_SALES_BY_REGION_DATA_SUCCESS =
  "FETCH_SALES_BY_REGION_DATA_SUCCESS";
export const FETCH_SALES_BY_REGION_DATA_FAILURE =
  "FETCH_SALES_BY_REGION_DATA_FAILURE";

export const FETCH_SALES_BY_CATEGORY_DATA_REQUEST =
  "FETCH_SALES_BY_CATEGORY_DATA_REQUEST";
export const FETCH_SALES_BY_CATEGORY_DATA_SUCCESS =
  "FETCH_SALES_BY_CATEGORY_DATA_SUCCESS";
export const FETCH_SALES_BY_CATEGORY_DATA_FAILURE =
  "FETCH_SALES_BY_CATEGORY_DATA_FAILURE";

export const FETCH_TOP_SELLING_PRODUCTS_DATA_REQUEST =
  "FETCH_TOP_SELLING_PRODUCTS_DATA_REQUEST";
export const FETCH_TOP_SELLING_PRODUCTS_DATA_SUCCESS =
  "FETCH_TOP_SELLING_PRODUCTS_DATA_SUCCESS";
export const FETCH_TOP_SELLING_PRODUCTS_DATA_FAILURE =
  "FETCH_TOP_SELLING_PRODUCTS_DATA_FAILURE";

export const FETCH_REVENUE_PER_PRODUCT_DATA_REQUEST =
  "FETCH_REVENUE_PER_PRODUCT_DATA_REQUEST";
export const FETCH_REVENUE_PER_PRODUCT_DATA_SUCCESS =
  "FETCH_REVENUE_PER_PRODUCT_DATA_SUCCESS";
export const FETCH_REVENUE_PER_PRODUCT_DATA_FAILURE =
  "FETCH_REVENUE_PER_PRODUCT_DATA_FAILURE";

// actionCreators
export const fetchSalesTrendDataRequest = () => ({
  type: FETCH_SALES_TREND_DATA_REQUEST,
});

export const fetchSalesTrendDataSuccess = (data: any) => ({
  type: FETCH_SALES_TREND_DATA_SUCCESS,
  payload: data,
});

export const fetchSalesTrendDataFailure = (error: any) => ({
  type: FETCH_SALES_TREND_DATA_FAILURE,
  payload: error,
});

export const fetchSalesByRegionDataRequest = () => ({
  type: FETCH_SALES_BY_REGION_DATA_REQUEST,
});

export const fetchSalesByRegionDataSuccess = (data: any) => ({
  type: FETCH_SALES_BY_REGION_DATA_SUCCESS,
  payload: data,
});

export const fetchSalesByRegionDataFailure = (error: any) => ({
  type: FETCH_SALES_BY_REGION_DATA_FAILURE,
  payload: error,
});

export const fetchSalesByCategoryDataRequest = () => ({
  type: FETCH_SALES_BY_CATEGORY_DATA_REQUEST,
});

export const fetchSalesByCategoryDataSuccess = (data: any) => ({
  type: FETCH_SALES_BY_CATEGORY_DATA_SUCCESS,
  payload: data,
});

export const fetchSalesByCategoryDataFailure = (error: any) => ({
  type: FETCH_SALES_BY_CATEGORY_DATA_FAILURE,
  payload: error,
});

export const fetchTopSellingProductsDataRequest = () => ({
  type: FETCH_TOP_SELLING_PRODUCTS_DATA_REQUEST,
});

export const fetchTopSellingProductsDataSuccess = (data: any) => ({
  type: FETCH_TOP_SELLING_PRODUCTS_DATA_SUCCESS,
  payload: data,
});

export const fetchTopSellingProductsDataFailure = (error: any) => ({
  type: FETCH_TOP_SELLING_PRODUCTS_DATA_FAILURE,
  payload: error,
});

export const fetchRevenuePerProductDataRequest = () => ({
  type: FETCH_REVENUE_PER_PRODUCT_DATA_REQUEST,
});

export const fetchRevenuePerProductDataSuccess = (data: any) => ({
  type: FETCH_REVENUE_PER_PRODUCT_DATA_SUCCESS,
  payload: data,
});

export const fetchRevenuePerProductDataFailure = (error: any) => ({
  type: FETCH_REVENUE_PER_PRODUCT_DATA_FAILURE,
  payload: error,
});
