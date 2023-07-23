import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSalesTrendDataRequest,
  fetchSalesByRegionDataRequest,
  fetchSalesByCategoryDataRequest,
  fetchTopSellingProductsDataRequest,
  fetchRevenuePerProductDataRequest,
} from "./redux/actions";

import "./App.css";

import { SalesState } from "./redux/reducers"; // Import the SalesState type directly from reducers.ts

function App() {
  const dispatch = useDispatch();
  const {
    salesTrendData,
    salesByRegionData,
    salesByCategoryData,
    topSellingProductsData,
    revenuePerProductData,
    loading,
    error,
  } = useSelector((state: SalesState) => {
    console.log("State from useSelector:", state);
    return state;
  });

  useEffect(() => {
    // Dispatch the actions to fetch data when the component mounts
    dispatch(fetchSalesTrendDataRequest());
    dispatch(fetchSalesByRegionDataRequest());
    dispatch(fetchSalesByCategoryDataRequest());
    dispatch(fetchTopSellingProductsDataRequest());
    dispatch(fetchRevenuePerProductDataRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Sales Trend Data</h2>
          <pre>{JSON.stringify(salesTrendData, null, 2)}</pre>

          <h2>Sales by Region Data</h2>
          <pre>{JSON.stringify(salesByRegionData, null, 2)}</pre>

          <h2>Sales by Category Data</h2>
          <pre>{JSON.stringify(salesByCategoryData, null, 2)}</pre>

          <h2>Top Selling Products Data</h2>
          <pre>{JSON.stringify(topSellingProductsData, null, 2)}</pre>

          <h2>Revenue Per Product Data</h2>
          <pre>{JSON.stringify(revenuePerProductData, null, 2)}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
