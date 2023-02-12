import React from "react";
import "./ProductPage.css";
import Counters from "../components/Counters";
import NavBar from "../components/NavBar";
import jihyo from "../jihyo.png";
import cart from "../cart.png";
import heart from "../heart.png";
import search from "../search.png";

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
      <div className="quick-button-holder">
        <button className="quick-button">
          <img style={{ height: 24 }} src={search} />
        </button>
        <button className="quick-button">
          <img style={{ height: 24 }} src={heart} />
        </button>
        <button type="button" className="quick-button" onClick={changeStyle}>
          <img style={{ height: 24 }} src={cart} />
        </button>
        <div className="cart-summary" id="cart-summary">
          <div className="cart-items">
            <div className="cart-header" style={{ marginLeft: "50px" }}></div>
            <div className="cart-header">Item</div>
            <div className="cart-header">Price</div>
            <div className="cart-header">Qty.</div>
            <div className="cart-header">Total</div>
            <div>
              {counters
                .filter((counter) => counter.value > 0)
                .map(({ image, name, price, value }) => (
                  <div className="cart-items">
                    <div className="cart-items-image-container">
                      <img src={image} className="cart-items-image"></img>
                    </div>
                    <div className="cart-items-name ">{name}</div>
                    <div className="cart-items-price ">P {price}.00</div>
                    <div className="cart-items-value ">{value}</div>
                    <div className="cart-items-total ">
                      P {price * value}.00
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="total-price">
            <div>TOTAL PRICE:</div>
            <div>
              P {counters.reduce((n, { price, value }) => n + price * value, 0)}
              .00
            </div>
          </div>
        </div>
      </div>

      <img
        style={{ height: "100vh", position: "fixed", zIndex: "-100" }}
        src={jihyo}
      />
      <NavBar totalCount={getCountersWithValue()} />
      <span className="cart-badge">
        {getCountersWithValue() > 0 && (
          <div className="badge">{getCountersWithValue()}</div>
        )}
      </span>
      <div>
        <div>
          <div class="grid-body">
            <div class="grid-item">
              <Counters
                // counters={counters.filter((counter) => counter.id === 1)}
                counters={counters}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            {/* <div class="grid-item">
              {" "}
              <Counters
                counters={counters.filter((counter) => counter.id === 2)}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            <div class="grid-item">
              {" "}
              <Counters
                counters={counters.filter((counter) => counter.id === 3)}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            <div class="grid-item">
              {" "}
              <Counters
                counters={counters.filter((counter) => counter.id === 4)}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            <div class="grid-item">
              {" "}
              <Counters
                counters={counters.filter((counter) => counter.id === 5)}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            <div class="grid-item">
              {" "}
              <Counters
                counters={counters.filter((counter) => counter.id === 6)}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            <div class="grid-item">
              {" "}
              <Counters
                counters={counters.filter((counter) => counter.id === 7)}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            <div class="grid-item">
              {" "}
              <Counters
                counters={counters.filter((counter) => counter.id === 8)}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div>
            <div class="grid-item">
              {" "}
              <Counters
                counters={counters.filter((counter) => counter.id === 9)}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onItemReset={handleItemReset}
              />
            </div> */}

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
