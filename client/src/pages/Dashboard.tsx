import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSalesTrendDataRequest,
  fetchSalesByRegionDataRequest,
  fetchSalesByCategoryDataRequest,
  fetchTopSellingProductsDataRequest,
  fetchRevenuePerProductDataRequest,
} from "../redux/actions";
import { SalesState } from "../redux/reducers";
import RevenuePerProduct from "../components/RevenuePerProduct";
import SalesTrend from "../components/SalesTrend";
import SalesByCategory from "../components/SalesByCategory";
import TopSellingProducts from "../components/TopSellingProducts";
import {
  Grid,
  Container,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: SalesState) => state);

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
    <div>
      <AppBar position="static" style={{ width: "100vw" }}>
        <Toolbar>
          <Typography variant="h6">Sales Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <RevenuePerProduct />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <SalesByCategory />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <TopSellingProducts />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card>
              <CardContent>
                <SalesTrend />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
