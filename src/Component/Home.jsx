import React, { Component } from "react";
import Header from "./Header";
import SelectGlasses from "./SelectGlasses";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <SelectGlasses />
        </div>
      </div>
    );
  }
}
