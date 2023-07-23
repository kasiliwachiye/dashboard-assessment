import { put, takeLatest, all } from "redux-saga/effects";
import { gql } from "@apollo/client";
import {
  FETCH_SALES_TREND_DATA_REQUEST,
  FETCH_SALES_TREND_DATA_SUCCESS,
  FETCH_SALES_TREND_DATA_FAILURE,
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
} from "./actions";
import client from "../graphql/client";

// Worker Sagas
function* fetchSalesTrendDataSaga() {
  try {
    console.log("Fetching sales trend data...");
    const { data } = yield client.query({
      query: gql`
        {
          salesTrendData {
            date
            salesRevenue
          }
        }
      `,
    });
    console.log("Fetched sales trend data:", data.salesTrendData);
    yield put({
      type: FETCH_SALES_TREND_DATA_SUCCESS,
      payload: data.salesTrendData,
    });
  } catch (error) {
    console.error("Error fetching sales trend data:", error);
    yield put({ type: FETCH_SALES_TREND_DATA_FAILURE, payload: error });
  }
}

function* fetchSalesByRegionDataSaga() {
  try {
    console.log("Fetching sales by region data...");
    const { data } = yield client.query({
      query: gql`
        {
          salesByRegionData {
            region
            salesRevenue
          }
        }
      `,
    });
    console.log("Fetched sales by region data:", data.salesByRegionData);
    yield put({
      type: FETCH_SALES_BY_REGION_DATA_SUCCESS,
      payload: data.salesByRegionData,
    });
  } catch (error) {
    console.error("Error fetching sales by region data:", error);
    yield put({ type: FETCH_SALES_BY_REGION_DATA_FAILURE, payload: error });
  }
}

function* fetchSalesByCategoryDataSaga() {
  try {
    console.log("Fetching sales by category data...");
    const { data } = yield client.query({
      query: gql`
        {
          salesByCategoryData {
            category
            salesRevenue
          }
        }
      `,
    });
    console.log("Fetched sales by category data:", data.salesByCategoryData);
    yield put({
      type: FETCH_SALES_BY_CATEGORY_DATA_SUCCESS,
      payload: data.salesByCategoryData,
    });
  } catch (error) {
    console.error("Error fetching sales by category data:", error);
    yield put({ type: FETCH_SALES_BY_CATEGORY_DATA_FAILURE, payload: error });
  }
}

function* fetchTopSellingProductsDataSaga() {
  try {
    console.log("Fetching top selling products data...");
    const { data } = yield client.query({
      query: gql`
        {
          topSellingProductsData {
            product
            salesRevenue
          }
        }
      `,
    });
    console.log(
      "Fetched top selling products data:",
      data.topSellingProductsData
    );
    yield put({
      type: FETCH_TOP_SELLING_PRODUCTS_DATA_SUCCESS,
      payload: data.topSellingProductsData,
    });
  } catch (error) {
    console.error("Error fetching top selling products data:", error);
    yield put({
      type: FETCH_TOP_SELLING_PRODUCTS_DATA_FAILURE,
      payload: error,
    });
  }
}

function* fetchRevenuePerProductDataSaga() {
  try {
    console.log("Fetching revenue per product data...");
    const { data } = yield client.query({
      query: gql`
        {
          revenuePerProductData {
            product
            revenue
          }
        }
      `,
    });
    console.log(
      "Fetched revenue per product data:",
      data.revenuePerProductData
    );
    yield put({
      type: FETCH_REVENUE_PER_PRODUCT_DATA_SUCCESS,
      payload: data.revenuePerProductData,
    });
  } catch (error) {
    console.error("Error fetching revenue per product data:", error);
    yield put({
      type: FETCH_REVENUE_PER_PRODUCT_DATA_FAILURE,
      payload: error,
    });
  }
}

// Watcher Saga
export default function* rootSaga() {
  console.log("rootSaga started");
  yield all([
    takeLatest(FETCH_SALES_TREND_DATA_REQUEST, fetchSalesTrendDataSaga),
    takeLatest(FETCH_SALES_BY_REGION_DATA_REQUEST, fetchSalesByRegionDataSaga),
    takeLatest(
      FETCH_SALES_BY_CATEGORY_DATA_REQUEST,
      fetchSalesByCategoryDataSaga
    ),
    takeLatest(
      FETCH_TOP_SELLING_PRODUCTS_DATA_REQUEST,
      fetchTopSellingProductsDataSaga
    ),
    takeLatest(
      FETCH_REVENUE_PER_PRODUCT_DATA_REQUEST,
      fetchRevenuePerProductDataSaga
    ),
  ]);
}
