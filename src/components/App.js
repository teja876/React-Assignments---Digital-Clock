import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: "",
      m: "",
      s: "",
      day: ""
    };

    this.timerID = setInterval(this.foo.bind(this), 1000);
  }
  foo() {
    // console.log("hello");
    let check = function (i) {
      // console.log(i);
      if (i < 10) return "0" + i;
      else return `${i}`;
    };
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let d = hour < 12 ? "AM" : "PM";
    this.setState({
      h: check(hour),
      m: check(min),
      s: check(sec),
      day: d
    });
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div className="clock">
        <h3 id="time">{`${this.state.h}:${this.state.m}:${this.state.s} ${this.state.day}`}</h3>
      </div>
    );
  }
}

export default App;
