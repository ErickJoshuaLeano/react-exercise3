import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import jihyo from "./jihyo.png";
import "./App.css";
import cart from "./cart.png";
import heart from "./heart.png";
import search from "./search.png";

export default class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
        price: 8895,
        image: "/images/Flow10.png",
        name: "Unisex Curry Flow 10 'Curryfornia' Basketball Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#dbdadf",
        color2: "#221b70",
        color3: "#e5c236",
      },
      {
        id: 2,
        value: 0,
        price: 6595,
        image: "/images/Curry1.png",
        name: "Unisex Curry 1 Retro 'Black History Month' Basketball Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#343539",
        color2: "#d5d1d0",
        color3: "#8b8789",
      },
      {
        id: 3,
        value: 0,
        price: 7495,
        image: "/images/Curry8.png",
        name: "Unisex Curry 8 Team Basketball Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#0d0f6f",
        color2: "#dfdfe3",
        color3: "white",
      },
      {
        id: 4,
        value: 0,
        price: 5495,
        image: "/images/OneFloTro.png",
        name: "Unisex Curry 1 Low FloTro Basketball Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#7dc293",
        color2: "#443d74",
        color3: "#ad3871",
      },
      {
        id: 5,
        value: 0,
        price: 3245,
        image: "/images/Infinity2.0.png",
        name: "Girls' Grade School UA Infinity 2.0 Running Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#262755",
        color2: "#4ba3b7",
        color3: "#9d6185",
      },
      {
        id: 6,
        value: 0,
        price: 5995,
        image: "/images/BreakThru3.png",
        name: "Women's UA Flow Breakthru 3 Basketball Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#a2db22",
        color2: "#c83083",
        color3: "#cfcccf",
      },
      {
        id: 7,
        value: 0,
        price: 4495,
        image: "/images/Breeze2.png",
        name: "Men's UA Charged Breeze 2 Running Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#89c701",
        color2: "#929196",
        color3: "#181a1e",
      },
      {
        id: 8,
        value: 0,
        price: 3745,
        image: "/images/Pursuit3.png",
        name: "Men's UA Charged Pursuit 3 Running Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#960d25",
        color2: "#cdccd1",
        color3: "#393a3d",
      },
      {
        id: 9,
        value: 0,
        price: 5545,
        image: "/images/RockBsr3.png",
        name: "Women's Project Rock BSR 3 Training Shoes",
        text: "Add to cart",
        buttonHeight: 50,
        buttonWidth: 230,
        color1: "#cac9ce",
        color2: "#e43d31",
        color3: "#225551",
      },
    ],
  };

  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== id),
    });
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        return {
          ...counter,
          value: 0,
          text: "Add to Cart",
          buttonWidth: 230,
        };
      }),
    });
  };

  handleItemReset = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: 0,
            text: "Add to Cart",
            buttonWidth: 230,
          };
        }
        return counter;
      }),
    });
  };

  handleIncrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
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
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
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
      }),
    });
  };

  getCountersWithValue = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };

  componentDidMount = () => {
    // api calls
    console.log("didmount");
  };

  changeStyle = () => {
    var element = document.getElementById("cart-summary");
    if (element.style.width === "80vw") {
      element.style.width = "0px";
    } else {
      element.style.width = "80vw";
    }
  };

  render() {
    return (
      <div>
        <div className="quick-button-holder">
          <button className="quick-button">
            <img style={{ height: 24 }} src={search} />
          </button>
          <button className="quick-button">
            <img style={{ height: 24 }} src={heart} />
          </button>
          <button
            type="button"
            className="quick-button"
            onClick={this.changeStyle}
          >
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
                {this.state.counters
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
                P{" "}
                {this.state.counters.reduce(
                  (n, { price, value }) => n + price * value,
                  0
                )}
                .00
              </div>
            </div>
          </div>
        </div>

        <img
          style={{ height: "100vh", position: "fixed", zIndex: "-100" }}
          src={jihyo}
        />
        <NavBar totalCount={this.getCountersWithValue()} />
        <span className="cart-badge">
          {this.getCountersWithValue() > 0 && (
            <div className="badge">{this.getCountersWithValue()}</div>
          )}
        </span>
        <div>
          <div>
            <div class="grid-body">
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 1
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 2
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 3
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 4
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 5
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 6
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 7
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 8
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>
              <div class="grid-item">
                {" "}
                <Counters
                  counters={this.state.counters.filter(
                    (counter) => counter.id === 9
                  )}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  onItemReset={this.handleItemReset}
                />
              </div>

              <button className="reset-button" onClick={this.handleReset}>
                Reset Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
