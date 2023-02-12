import React from "react";
import "./ProductPage.css";
import Counters from "../components/Counters";
import NavBar from "../components/NavBar";
import jihyo from "../jihyo.png";

const ProductPage = ({
  counters,
  handleDelete,
  handleReset,
  handleItemReset,
  handleIncrement,
  handleDecrement,
  getCountersWithValue,
  changeStyle,
}) => {
  return (
    <div>
      <img
        style={{ height: "100vh", position: "fixed", zIndex: "-100" }}
        src={jihyo}
      />
      <NavBar
        getCountersWithValue={getCountersWithValue}
        counters={counters}
        changeStyle={changeStyle}
      />
      <div>
        <div>
          <div className="container-grid">
            <div>
              <Counters
                counters={counters}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            <button className="reset-button" onClick={handleReset}>
              Reset Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
