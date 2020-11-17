import React, { Component } from "react";
import axios from "axios";
import Form from "./Form.jsx";
import CountryTable from "./CountryTable.jsx";
import styled from "styled-components";
import ContinentChart from "./ContinentChart.jsx";
import ByContinentChart from "./ByContinentChart.jsx";
import {
  BaseWrapper,
  MainTitle,
  LastUpdated,
} from "../styledComponents/AppStyle.jsx";
import GlobalChart from "./GlobalChart.jsx";
import ContinentTable from "./ContinentTable.jsx";
import Top30Table from "./Top30Table.jsx";
import Top30Chart from "./Top30Chart.jsx";
import Global from "./Global.jsx";
import moment from "moment";
import Map from "./Map.jsx";
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
      bycountry: false,
      allcontinent: false,
      bycontinent: false,
      bytop30: false,
      map: true,
      top30Name: "",
      countryName: "",
      continentName: "",
      total: [],
      tested: [],
      deceased: [],
      cases: [],
      continents: [],
      all: [],
      top30: [],
      totalcases: [],
      totaltested: [],
      totaldeceased: [],
      latitude: 0,
      longitude: 0,
    };
    this.getInfo = this.getInfo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCountrySubmit = this.onCountrySubmit.bind(this);
    this.onContinentSubmit = this.onContinentSubmit.bind(this);
    this.onTop30Submit = this.onTop30Submit.bind(this);
    this.getGlobal = this.getGlobal.bind(this);
    this.getTop30Cases = this.getTop30Cases.bind(this);
    this.getTop30Deceased = this.getTop30Deceased.bind(this);
    this.getTop30Tested = this.getTop30Tested.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.getCurrentTotal = this.getCurrentTotal.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    let key = e.target.id;
    let value = e.target.value;
    this.setState({
      [key]: value,
    });
  }

  onCountrySubmit(e) {
    e.preventDefault();
    if (this.state.currCountry === "All") {
      this.getGlobal();
    } else {
      this.getInfo(this.state.countryName);
    }
  }

  onContinentSubmit(e) {
    e.preventDefault();

    if (this.state.continentName === "All") {
      this.getAll();
    } else {
      this.getByContinent(this.state.continentName);
    }
  }

  onTop30Submit(e) {
    e.preventDefault();
    if (this.state.top30Name === "topcases") {
      this.getTop30Cases();
    } else if (this.state.top30Name === "topdeceased") {
      this.getTop30Deceased();
    } else if (this.state.top30Name === "toptested") {
      this.getTop30Tested;
    }
  }

  getInfo(name) {
    axios
      .get("/country", {
        params: {
          country: name,
        },
      })
      .then((response) => {
        this.setState({ data: response.data });
      })
      .then(() => {
        this.setState({
          global: false,
          form: false,
          bycountry: true,
          allcontinent: false,
          bycontinent: false,
          bytop30: false,
          map: true,
        });
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
  getAll() {
    axios
      .get("/all")
      .then((response) => {
        // handle success
        console.log("All", response.data);

        this.setState({ all: response.data });
      })
      .then(() => {
        this.setState({
          global: false,
          form: false,
          bycountry: false,
          allcontinent: true,
          bycontinent: false,
          bytop30: false,
          map: false,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  getCurrentTotal() {
    axios
      .get("/total")
      .then((response) => {
        // handle success
        console.log("All", response.data);

        this.setState({ all: response.data });
      })
      .then(() => {
        console.log("api call successful");
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  getByContinent(continent) {
    axios
      .get("/continent", {
        params: {
          continent: continent,
        },
      })
      .then((response) => {
        this.setState({ continents: response.data });
      })
      .then(() => {
        this.setState({
          global: false,
          form: false,
          bycountry: false,
          allcontinent: false,
          bycontinent: true,
          bytop30: false,
          map: false,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  getTop30Cases() {
    axios
      .get("/topcases")
      .then((response) => {
        this.setState({ top30: response.data });
      })
      .then(() => {
        this.setState({
          global: false,
          form: false,
          bycountry: false,
          allcontinent: false,
          bycontinent: false,
          bytop30: true,
          map: false,
        });
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
        this.setState({ top30: response.data });
      })
      .then(() => {
        this.setState({
          global: false,
          form: false,
          bycountry: false,
          allcontinent: false,
          bycontinent: false,
          bytop30: true,
          map: false,
        });
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
        this.setState({ top30: response.data });
      })
      .then(() => {
        this.setState({
          global: false,
          form: false,
          bycountry: false,
          allcontinent: false,
          bycontinent: false,
          bytop30: true,
          map: false,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  setStatus(name) {
    this.setState({
      global: false,
      form: true,
      allcontinent: false,
      bycontinent: false,
      bytop30: false,
    });
    this.setState({
      [name]: true,
    });
  }

  componentDidMount() {
    // this.getCurrentTotal(); => API Call
    this.getGlobal();
  }
  render() {
    let updatedday = this.state.data.updatedtime;
    let fromNow = moment(updatedday).startOf("day").fromNow();
    return (
      <BaseWrapper>
        <MainTitle>COVID-19 Tracker</MainTitle>
        <LastUpdated>Updated 2 hours ago</LastUpdated>
        <Form
          onChange={this.onChange}
          onCountrySubmit={this.onCountrySubmit}
          onContinentSubmit={this.onContinentSubmit}
          onTop30Submit={this.onTop30Submit}
        />
        {/* {this.state.map ? <Map data={this.state.data} /> : null} */}
        {this.state.allcontinent ? (
          <ContinentChart total={this.state.all} />
        ) : null}
        {this.state.bycontinent ? (
          <ByContinentChart data={this.state.continents} />
        ) : null}

        {this.state.global ? <Global data={this.state.total} /> : null}
        {this.state.bycountry ? <CountryTable data={this.state.data} /> : null}
        {this.state.allcontinent || this.state.bycontinent ? (
          <ContinentTable
            data={this.state.all}
            continent={this.state.continents}
            total={this.state.total}
            name={this.state.continentName}
          />
        ) : null}

        {this.state.bytop30 ? (
          <Top30Chart data={this.state.top30} name={this.state.top30Name} />
        ) : null}
        {this.state.global ? <GlobalChart data={this.state.total} /> : null}
        {this.state.bycountry ? <GlobalChart data={this.state.data} /> : null}
      </BaseWrapper>
    );
  }
}

export default App;
