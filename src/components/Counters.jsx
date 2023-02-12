import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import Counter from "./Counter";
import "./Counters.css";
import { Link } from "react-router-dom";

const Counters = ({
  onIncrement,
  onDecrement,
  onDelete,
  counters,
  onReset,
  onItemReset,
}) => {
  return (
    <div className="image-grid">
      {counters.map((counter) => (
        <Counter
          onDelete={onDelete}
          counter={counter}
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onItemReset={onItemReset}
        />
      ))}
      <div>
        <Button
          className="add-product"
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
          LinkComponent={Link}
          to="/products/new"
        >
          Add Product
        </Button>
      </div>
    </div>
  );
};

export default Counters;
