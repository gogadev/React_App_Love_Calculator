import React, { Component } from "react";

import axios from "axios";

import img from "../../assets/nav.png";
import handImg from "../../assets/btn.png";

import "./love-calculator.style.css";

class LoveCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      crush: "",
      percentage: 0,
      message: "",
    };
  }

  calcLove = (e) => {
    this.setState({
      percentage: 0,
      message: "Loading...",
    });
    const url = `https://cors-anywhere.herokuapp.com/https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.name}&sname=${this.state.crush}`;
    const config = {
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "5095caa16amshf91d92b51302864p173a16jsn6d22e1b47f5e",
      },
    };
    axios
      .get(url, config)
      .then((data) => {
        this.setState({
          percentage: data.data.percentage,
          message: data.data.result,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          percentage: 0,
          message: "Loading Problem, Please Try Again",
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      crush: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="love-calc">
        <div className="info">
          <form className="form" onSubmit={this.handleSubmit}>
            <h1 className="title">Calculate Your Love</h1>
            <img className="img" src={img} alt="" />
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter Your Name"
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="crush"
              value={this.state.crush}
              placeholder="Enter Your Crush"
              onChange={this.handleChange}
              required
            />
            <img className="hand-img" src={handImg} alt="" />
            <button type="submit" className="btn" onClick={this.calcLove}>
              Calculate Your Love
            </button>
            <h3>{this.state.percentage}%</h3>
            <h4 className="message">{this.state.message}</h4>
          </form>
        </div>
      </div>
    );
  }
}

export default LoveCalculator;
