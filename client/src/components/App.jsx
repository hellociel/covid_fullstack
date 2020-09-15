import React, { Component } from "react";
import axios from "axios";
import Form from "./Form.jsx";
import Table from "./Table.jsx";
import StatusBar from "./StatusBar.jsx";
import styled from "styled-components";
import {
  BaseWrapper,
  MainTitle,
  LastUpdated,
} from "../styledComponents/AppStyle.jsx";
import GlobalChart from "./GlobalChart.jsx";
import Global from "./Global.jsx";
import moment from "moment";
// import fs from "fs";
// const fs = require("fs");

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      data: [],
      currCountry: "",
      daily: [],
      global: true,
      form: false,
      total: [],
      tested: [],
      deceased: [],
      cases: [],
    };
    this.getInfo = this.getInfo.bind(this);
    // this.getTotal = this.getTotal.bind(shis);
    this.setCountry = this.setCountry.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getGlobal = this.getGlobal.bind(this);
    this.getTop30Cases = this.getTop30Cases.bind(this);
    this.getTop30Deceased = this.getTop30Deceased.bind(this);
    this.getTop30Tested = this.getTop30Tested.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ currCountry: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.currCountry === "South Korea") {
      this.getInfo("S-Korea");
    } else {
      this.getInfo(this.state.currCountry);
    }
  }

  setCountry(res) {
    this.setState({
      activecases: res.activecases,
      continent: res.continent,
      criticalcases: res.criticalcases,
      name: res.name,
      newcases: res.newcases,
      newdeaths: res.newdeaths,
      population: res.population,
      recoveredcases: res.recoveredcases,
      totalcases: res.totalcases,
      totaldeaths: res.totaldeaths,
      totaltests: res.tests,
      updatedday: res.updatedday,
      updatedtime: res.updatedtime,
    });
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
        // console.log("GET INFO IN APP.JSX", response);
        //handle setting the state
        this.setState({ data: response.data });
      })
      .then(() => {
        this.setState({ global: false, form: true });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  getGlobal() {
    axios
      .get("/global")
      .then((response) => {
        // handle success
        console.log("GLOBAL", response.data);

        this.setState({ total: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  // getTotal() {
  //   axios
  //     .get("/total")
  //     .then((response) => {
  //       // handle success
  //       // console.log("DAILY IN APP.JSX", response.data);
  //       // this.setState({ total: total });
  //     })
  //     .catch((error) => {
  //       // handle error
  //       console.log(error);
  //     });
  // }

  getTop30Cases() {
    axios
      .get("/topcases")
      .then((response) => {
        // handle success
        console.log("GLOBAL", response.data);

        this.setState({ cases: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  getTop30Deceased() {
    axios
      .get("/topdeceased")
      .then((response) => {
        // handle success
        console.log("GLOBAL", response.data);

        this.setState({ deceased: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  getTop30Tested() {
    axios
      .get("/toptested")
      .then((response) => {
        // handle success
        console.log("GLOBAL", response.data);

        this.setState({ tested: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  componentDidMount() {
    // this.getInfo("Italy");
    this.getGlobal();
  }
  render() {
    let updatedday = this.state.data.updatedtime;
    let fromNow = moment(updatedday).startOf("day").fromNow();
    return (
      <BaseWrapper>
        <MainTitle>COVID-19 Tracker</MainTitle>
        <LastUpdated>Updated {fromNow}</LastUpdated>
        <Form onChange={this.onChange} onSubmit={this.onSubmit} />
        {this.state.global ? <Global data={this.state.total} /> : null}
        {this.state.form ? <StatusBar data={this.state.data} /> : null}
        {this.state.global ? <GlobalChart data={this.state.total} /> : null}
        {this.state.form ? <GlobalChart data={this.state.data} /> : null}
      </BaseWrapper>
    );
  }
}

export default App;
