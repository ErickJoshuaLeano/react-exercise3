import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  getName() {
    return <h1>Big Name</h1>;
  }

  getClassName() {
    if (this.props.counter.value > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  }

  formatText() {
    return this.props.counter.value;
    // if (this.props.counter.value > 0) {
    //   return this.props.counter.value;
    // }
    // return "Zero";
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    const { counter, children } = this.props;
    console.log(this.props);
    return (
      <>
        <div /*className="m-4"*/>
          <div className="image_box">
            {
              <img
                src={this.props.counter.image}
                style={{ height: "250px" }}
              ></img>
            }
          </div>
          <div className="item_box">
            <button
              style={{ backgroundColor: this.props.counter.color1 }}
              className="color_button"
            ></button>
            <button
              style={{ backgroundColor: this.props.counter.color2 }}
              className="color_button"
            ></button>
            <button
              style={{ backgroundColor: this.props.counter.color3 }}
              className="color_button"
            ></button>
            <div className="item_name">{this.props.counter.name}</div>
            <div className="item_price">P {this.props.counter.price}.00</div>
            {children}

            <button
              onClick={() => {
                this.props.onIncrement(counter.id);
              }}
              style={{
                height: this.props.counter.buttonHeight,
                width: this.props.counter.buttonWidth,
              }}
              className="add_to_cart"
            >
              {this.props.counter.text}
            </button>
            {/* <span className={this.getClassName()}>{this.formatText()}</span> */}
            <span className="item_count"> {this.formatText()} </span>
            <button
              onClick={() => this.props.onDecrement(counter.id)}
              className="remove_item"
              disabled={counter.value === 0}
            >
              -
            </button>
            {/* <button
              onClick={() => this.props.onDelete(counter.id)}
              className="btn btn-danger ms-1"
            >
              Delete
            </button> */}
            <button
              onClick={() => this.props.onItemReset(counter.id)}
              className="reset_item"
            >
              Remove
            </button>
          </div>
        </div>
      </>
    );
  }
}
