import React, { Component } from "react";
import List from "./Chart.jsx";
import axios from "axios";
import Form from "./Form.jsx";
// import fs from "fs";
// const fs = require("fs");

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      data: [],
      currData: {
        country: "Italy",
        code: "IT",
        confirmed: 219070,
        recovered: 105186,
        critical: 1027,
        deaths: 30560,
        latitude: 41.87194,
        longitude: 12.56738,
        lastChange: "2020-05-10T18:12:02+02:00",
        lastUpdate: "2020-05-11T04:00:03+02:00",
      },
      currCountry: "",
      daily: [],
    };
    this.getInfo = this.getInfo.bind(this);
    this.getWorld = this.getWorld.bind(this);
    this.setCountry = this.setCountry.bind(this);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ currCountry: e.target.value });
  }
  onSubmit() {
    this.getInfo(this.state.currCountry);
  }

  setCountry(res) {
    // this.setState({
    //   country: res.country,
    //   code: res.code,
    //   confirmed: res.confirmed,
    //   recovered: res.recovered,
    //   critical: res.critical,
    //   deaths: res.deaths,
    //   latitude: res.latitude,
    //   longitude: res.longitude,
    //   lastChange: res.lastChange,
    //   lastUpdate: res.lastUpdate,
    // });
  }

  getInfo(name) {
    axios
      .get("/country", {
        params: {
          country: name,
        },
      })
      .then((response) => {
        // handle success
        console.log("GET INFO IN APP.JSX", response.data);

        //handle setting the state
        // this.setState({ currData: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  getWorld() {
    axios
      .get("/world", {
        params: {
          country: name,
        },
      })
      .then((response) => {
        // handle success
        console.log("GET INFO IN APP.JSX", response.data);

        //handle setting the state
        // this.setState({ currData: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  getTotal() {
    axios
      .get("/total")
      .then((response) => {
        // handle success
        // console.log("DAILY IN APP.JSX", response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  componentDidMount() {
    // this.getInfo("Italy");
    this.getTotal();
  }
  render() {
    return (
      <div>
        <Form onChange={this.onChange} onSubmit={this.onSubmit} />
        <List
          name={this.state.currData.country}
          confirmed={this.state.currData.confirmed}
          daily={this.state.currData.daily}
        />
      </div>
    );
  }
}

export default App;
