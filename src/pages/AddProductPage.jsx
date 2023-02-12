import React from "react";
import "./EditProductPage.css";
import NavBar from "../components/NavBar";
import jihyo from "../jihyo.png";
import EditProductForm from "../components/EditProductForm";

const AddProductPage = ({
  counters,
  changeStyle,
  getCountersWithValue,
  onAddProduct,
}) => {
  return (
    <div>
      <img
        style={{ height: "100vh", position: "fixed", zIndex: "-100" }}
        src={jihyo}
      />
      <div></div>
      <NavBar
        totalCount={getCountersWithValue()}
        counters={counters}
        changeStyle={changeStyle}
        getCountersWithValue={getCountersWithValue}
      />
      <div className="employee-form-container">
        <EditProductForm onSubmit={onAddProduct} />
      </div>
    </div>
  );
};

export default AddProductPage;
