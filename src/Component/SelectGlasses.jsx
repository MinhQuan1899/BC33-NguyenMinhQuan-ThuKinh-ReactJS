import React, { Component } from "react";
import "../assets/styles.css";

export default class SelectGlasses extends Component {
  state = {
    imgModel: "./glassesImage/model.jpg",
    imgGlasses: "",
  };

  handleChangeGlasses = (number) => {
    this.setState({
      imgGlasses: `./glassesImage/v${number}.png`,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="glassesChange">
            <img src={this.state.imgGlasses} alt="" />
          </div>
          <div className="model"></div>
        </div>
        <div>
          <div className="container-fluid">
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g1.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("1");
                }}
              />
            </button>
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g2.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("2");
                }}
              />
            </button>
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g3.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("3");
                }}
              />
            </button>
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g4.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("4");
                }}
              />
            </button>
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g5.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("5");
                }}
              />
            </button>
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g6.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("6");
                }}
              />
            </button>
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g7.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("7");
                }}
              />
            </button>
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g8.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("8");
                }}
              />
            </button>
            <button className="mx-2 border">
              <img
                height={100}
                width={200}
                src="./glassesImage/g9.jpg"
                alt=""
                onClick={() => {
                  this.handleChangeGlasses("9");
                }}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
