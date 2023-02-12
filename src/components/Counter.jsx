import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import "./Counter.css";
import { Link } from "react-router-dom";

const Counter = ({
  counter,
  children,
  onIncrement,
  onDecrement,
  onItemReset,
  onDelete,
}) => {
  const getClassName = () => {
    if (counter.value > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  };

  const formatText = () => {
    return counter.value;
  };

  return (
    <>
      <div className="element">
        <div className="image-box">
          <Link to={`/products/${counter.id}`}>
            {<img src={counter.image} style={{ height: "250px" }}></img>}
          </Link>
        </div>
        <div className="item-box">
          <button
            style={{ backgroundColor: counter.color1 }}
            className="color-button"
          ></button>
          <button
            style={{ backgroundColor: counter.color2 }}
            className="color-button"
          ></button>
          <button
            style={{ backgroundColor: counter.color3 }}
            className="color-button"
          ></button>
          <div className="item-name">
            <Link
              to={`/products/${counter.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {counter.name}
            </Link>
          </div>
          <div className="item-price">P {counter.price}.00</div>
          {children}

          <button
            onClick={() => {
              onIncrement(counter.id);
            }}
            style={{
              height: counter.buttonHeight,
              width: counter.buttonWidth,
            }}
            className="add-to-cart"
          >
            {counter.text}
          </button>
          {}
          <span className="item-count"> {formatText()} </span>
          <button
            onClick={() => onDecrement(counter.id)}
            className="remove-item"
            disabled={counter.value === 0}
          >
            -
          </button>
          {}
          <button
            onClick={() => onItemReset(counter.id)}
            className="reset-item"
          >
            Remove
          </button>
          <div className="action-buttons">
            <Link to={`/products/${counter.id}`}>
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </Link>
            <Link to={`/products/${counter.id}/edit`}>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton onClick={() => onDelete(counter.id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
