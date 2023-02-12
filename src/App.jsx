import React, { useState } from "react";
import { PRODUCT_DATA } from "./data/ProductData";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";
import NotFound from "./pages/NotFound";

const App = () => {
  const [counters, setCounters] = useState(PRODUCT_DATA);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleAddProduct = (counter) => {
    setCounters([
      ...counters,
      {
        ...counter,
        id: counters.length * 999 + 1,
        value: 0,
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
      },
    ]);
  };

  const handleEditProduct = (id, counter) => {
    setCounters(
      counters.map((cnt) => {
        if (cnt.id === id) {
          return {
            ...counter,
            id: id,
            value: 0,
            text: "Add to cart",
            buttonHeight: 50,
            buttonWidth: 230,
          };
        }
        return cnt;
      })
    );
  };

  const handleReset = () => {
    setCounters(
      counters.map((counter) => {
        return {
          ...counter,
          value: 0,
          text: "Add to Cart",
          buttonWidth: 230,
        };
      })
    );
  };

  const handleItemReset = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: 0,
            text: "Add to Cart",
            buttonWidth: 230,
          };
        }
        return counter;
      })
    );
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          if (counter.value === 0) {
            return {
              ...counter,
              value: counter.value + 1,
              text: "+",
              buttonWidth: 50,
            };
          }
          return {
            ...counter,
            value: counter.value + 1,
          };
        }
        return counter;
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          if (counter.value === 1) {
            return {
              ...counter,
              value: counter.value - 1,
              text: "Add to Cart",
              buttonWidth: 230,
            };
          }
          return {
            ...counter,
            value: counter.value - 1,
          };
        }
        return counter;
      })
    );
  };

  const getCountersWithValue = () => {
    return counters.filter((counter) => counter.value > 0).length;
  };

  const changeStyle = () => {
    var element = document.getElementById("cart-summary");
    if (element.style.width === "80vw") {
      element.style.width = "0px";
    } else {
      element.style.width = "80vw";
    }
  };

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={
            <ProductPage
              counters={counters}
              handleDelete={handleDelete}
              handleReset={handleReset}
              handleItemReset={handleItemReset}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              getCountersWithValue={getCountersWithValue}
              changeStyle={changeStyle}
            />
          }
        />
        <Route
          path="/products/new"
          element={
            <AddProductPage
              counters={counters}
              changeStyle={changeStyle}
              getCountersWithValue={getCountersWithValue}
              onAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetailsPage
              counters={counters}
              changeStyle={changeStyle}
              getCountersWithValue={getCountersWithValue}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="/products/:id/edit"
          element={
            <EditProductPage
              counters={counters}
              changeStyle={changeStyle}
              getCountersWithValue={getCountersWithValue}
              onEditProduct={handleEditProduct}
            />
          }
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
