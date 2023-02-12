import React from "react";
import "./EditProductPage.css";
import NavBar from "../components/NavBar";
import jihyo from "../jihyo.png";
import EditProductForm from "../components/EditProductForm";
import { useParams } from "react-router-dom";

const EditProductPage = ({
  counters,
  changeStyle,
  getCountersWithValue,
  onEditProduct,
}) => {
  const params = useParams();
  const { id, value, text, buttonHeight, buttonWidth, ...counter } =
    counters.find((counter) => counter.id === +params.id);

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
        <EditProductForm
          onSubmit={(form) => onEditProduct(id, form)}
          initialValue={counter}
        />
      </div>
    </div>
  );
};

export default EditProductPage;
