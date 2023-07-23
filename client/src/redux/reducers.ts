import {
  FETCH_SALES_BY_REGION_DATA_REQUEST,
  FETCH_SALES_BY_REGION_DATA_SUCCESS,
  FETCH_SALES_BY_REGION_DATA_FAILURE,
  FETCH_SALES_BY_CATEGORY_DATA_REQUEST,
  FETCH_SALES_BY_CATEGORY_DATA_SUCCESS,
  FETCH_SALES_BY_CATEGORY_DATA_FAILURE,
  FETCH_TOP_SELLING_PRODUCTS_DATA_REQUEST,
  FETCH_TOP_SELLING_PRODUCTS_DATA_SUCCESS,
  FETCH_TOP_SELLING_PRODUCTS_DATA_FAILURE,
  FETCH_REVENUE_PER_PRODUCT_DATA_REQUEST,
  FETCH_REVENUE_PER_PRODUCT_DATA_SUCCESS,
  FETCH_REVENUE_PER_PRODUCT_DATA_FAILURE,
  FETCH_SALES_TREND_DATA_REQUEST,
  FETCH_SALES_TREND_DATA_SUCCESS,
  FETCH_SALES_TREND_DATA_FAILURE,
} from "./actions";

export interface SalesState {
  salesTrendData: any[];
  salesByRegionData: any[];
  salesByCategoryData: any[];
  topSellingProductsData: any[];
  revenuePerProductData: any[];
  loading: boolean;
  error: any;
}

const initialState: SalesState = {
  salesTrendData: [],
  salesByRegionData: [],
  salesByCategoryData: [],
  topSellingProductsData: [],
  revenuePerProductData: [],
  loading: false,
  error: null,
};

const salesReducer = (state: SalesState = initialState, action: any) => {
  console.log("Current state:", state);
  switch (action.type) {
    case FETCH_SALES_TREND_DATA_REQUEST:
    case FETCH_SALES_BY_REGION_DATA_REQUEST:
    case FETCH_SALES_BY_CATEGORY_DATA_REQUEST:
    case FETCH_TOP_SELLING_PRODUCTS_DATA_REQUEST:
    case FETCH_REVENUE_PER_PRODUCT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SALES_TREND_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        salesTrendData: action.payload,
      };
    case FETCH_SALES_BY_REGION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        salesByRegionData: action.payload,
      };
    case FETCH_SALES_BY_CATEGORY_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        salesByCategoryData: action.payload,
      };
    case FETCH_TOP_SELLING_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        topSellingProductsData: action.payload,
      };
    case FETCH_REVENUE_PER_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        revenuePerProductData: action.payload,
      };
    case FETCH_SALES_TREND_DATA_FAILURE:
    case FETCH_SALES_BY_REGION_DATA_FAILURE:
    case FETCH_SALES_BY_CATEGORY_DATA_FAILURE:
    case FETCH_TOP_SELLING_PRODUCTS_DATA_FAILURE:
    case FETCH_REVENUE_PER_PRODUCT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default salesReducer;
