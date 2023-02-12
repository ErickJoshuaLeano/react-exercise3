import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css";
import NavBar from "../components/NavBar";
import jihyo from "../jihyo.png";
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";



const ProductDetailsPage = ({
  counters,
  changeStyle,
  getCountersWithValue,
}) => {
  const params = useParams();
  // return <div>ProductDetailsPage Product id: {params.id}</div>;

  const counter = counters.find((counter) => counter.id === +params.id);

  return (
    <div>
      <img
        style={{ height: "100vh", position: "fixed", zIndex: "-100" }}
        src={jihyo}
      />
      <NavBar
        totalCount={getCountersWithValue()}
        counters={counters}
        changeStyle={changeStyle}
        getCountersWithValue={getCountersWithValue}
      />

      {/* <Card sx={{ maxWidth: 345 }} className="product-card">
        <CardMedia
          sx={{ height: "100vh" }}
          image={counter.splash}
          title={counter.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {counter.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card> */}
      <Card
        sx={{ display: "flex", maxWidth: "50vw", height: "75vh" }}
        className="product-card"
      >
        <CardMedia
          component="img"
          sx={{ height: "75vh", width: "20vw" }}
          image={counter.splash}
          alt="Shoe splash art"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <CardContent sx={{ flex: "1 0 auto", width: "30vw" }}>
              <Typography fontFamily="Poppins" variant="h4" component="div">
                {counter.name}
              </Typography>
              <Typography
                fontFamily="Poppins"
                variant="h5"
                color="text.secondary"
                component="div"
              >
                Php {counter.price}.00
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
