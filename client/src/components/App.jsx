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
      country: "Italy",
      code: "IT",
      confirmed: 287753,
      recovered: 213634,
      critical: 187,
      deaths: 35610,
      latitude: 41.87194,
      longitude: 12.56738,
      lastChange: "2020-09-13T17:09:03+02:00",
      lastUpdate: "2020-09-14T08:00:05+02:00",
      daily: [],
    };
    this.getInfo = this.getInfo.bind(this);
    this.getDaily = this.getDaily.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.getAllInfo = this.getAllInfo.bind(this);
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
      .get("/country", name)
      .then((response) => {
        // handle success
        console.log("GET INFO IN APP.JSX", response);

        //handle setting the state
        // this.setCountry(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  getAllInfo() {}

  getDaily() {
    axios
      .get("/daily")
      .then((response) => {
        // handle success
        console.log("DAILY IN APP.JSX", response);
        this.setState({ daily: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  componentDidMount() {
    this.getInfo("Italy");
  }
  render() {
    return (
      <div>
        <Form />
        <List
          name={this.state.country}
          confirmed={this.state.confirmed}
          daily={this.state.daily}
        />
      </div>
    );
  }
}

export default App;

// getAllInfo() {
//   let countries = [
//     "Andorra",
//     "United Arab Emirates",
//     "Afghanistan",
//     "Antigua and Barbuda",
//     "Anguilla",
//     "Albania",
//     "Armenia",
//     Netherlands Antilles",
//     Angola",
//     Antarctica",
//     Argentina",
//     American Samoa",
//     Austria",
//     Australia",
//     Aruba",
//     Azerbaijan",
//     Bosnia and Herzegovina",
//     Barbados",
//     Bangladesh",
//     Belgium",
//     Burkina Faso",
//     Bulgaria",
//     Bahrain",
//     Burundi",
//     Benin",
//     Bermuda",
//     Brunei",
//     Bolivia",
//     Brazil",
//     Bahamas",
//     Bhutan",
//     Bouvet Island",
//     Botswana",
//     Belarus",
//     Belize",
//     Canada",
//     Cocos [Keeling] Islands",
//     Congo [DRC]",
//     Central African Republic",
//     Congo [Republic]",
//     Switzerland",
//     Côte d'Ivoire",
//     Cook Islands",
//     Chile",
//     Cameroon",
//     China",
//     Colombia",
//     Costa Rica",
//     Cuba",
//     Cape Verde",
//     Christmas Island",
//     Cyprus",
//     Czech Republic",
//     Germany",
//     Djibouti",
//     Denmark",
//     Dominica",
//     Dominican Republic",
//     Algeria",
//     Ecuador",
//     Estonia",
//     Egypt
//     Western Sahara
//     Eritrea
//     Spain
//     Ethiopia
//     Finland
//     Fiji
//     Falkland Islands [Islas Malvinas]
//     Micronesia
//     Faroe Islands
//     France
//     Gabon
//     United Kingdom
//     Grenada
//     Georgia
//     French Guiana
//     Guernsey
//     Ghana
//     Gibraltar
//     Greenland
//     Gambia
//     Guinea
//     Guadeloupe
//     Equatorial Guinea
//     Greece
//     South Georgia and the South Sandwich Islands
//     Guatemala
//     Guam
//     Guinea-Bissau
//     Guyana
//     "Gaza Strip
//     "Hong Kong
//     "Heard Island and McDonald Islands
//     "Honduras
//     "Croatia
//     "Haiti
//     Hungary
//     Indonesia
//     Ireland
//     Israel
//     Isle of Man
//     India
//     British Indian Ocean Territory
//     Iraq
//     Iran
//     Iceland
//     Italy
//     Jersey
//     Jamaica
//     Jordan
//     Japan
//     Kenya
//     Kyrgyzstan
//     Cambodia
//     Kiribati
//     Comoros
//     Saint Kitts and Nevis
//     North Korea
//     South Korea
//     Kuwait
//     Cayman Islands
//     Kazakhstan
//     Laos
//     Lebanon
//     Saint Lucia
//     Liechtenstein
//     Sri Lanka
//     Liberia
//     Lesotho
//     Lithuania
//     Luxembourg
//     Latvia
//     Libya
//     Morocco
//     Monaco
//     Moldova
//     Montenegro
//     Madagascar
//     Marshall Islands
//     Macedonia [FYROM]
//     Mali
//     Myanmar [Burma]
//     Mongolia
//     Macau
//     Northern Mariana Islands
//     Martinique
//     Mauritania
//     Montserrat
//     Malta
//     Mauritius
//     Maldives
//     Malawi
//     Mexico
//     Malaysia
//     Mozambique
//     Namibia
//     New Caledonia
//     Niger
//     Norfolk Island
//     Nigeria
//     Nicaragua
//     Netherlands
//     Norway
//     Nepal
//     Nauru
//     Niue
//     New Zealand
//     Oman
//     Panama
//     Peru
//     French Polynesia
//     Papua New Guinea",
//     Philippines",
//     Pakistan",
//     Poland",
//     Saint Pierre and Miquelon",
//     Pitcairn Islands",
//     Puerto Rico",
//     Palestinian Territories",
//     Portugal",
//     Palau",
//     Paraguay",
//     Qatar",
//     Réunion",
//     Romania",
//     Serbia",
//     Russia",
//     Rwanda",
//     Saudi Arabia",
//     Solomon Islands",
//     Seychelles",
//     Sudan",
//     Sweden",
//     Singapore",
//     Saint Helena",
//     Slovenia
//     Svalbard and Jan Mayen",
//     Slovakia",
//     Sierra Leone",
//     San Marino",
//     Senegal",
//     Somalia",
//     Suriname",
//     São Tomé and Príncipe",
//     El Salvador",
//     Syria",
//     "Swaziland",
//     "Turks and Caicos Islands",
//     "Chad",
//     "French Southern Territories",
//     "Togo",
//     "Thailand",
//     "Tajikistan",
//     "Tokelau",
//     "Timor-Leste",
//     "Turkmenistan",
//     "Tunisia",
//     "Tonga",
//     "Turkey",
//     "Trinidad and Tobago",
//     "Tuvalu",
//     "Taiwan",
//     "Tanzania",
//     "Ukraine",
//     "Uganda",
//     "U.S. Minor Outlying Islands",
//     "United States",
//     "Uruguay",
//     "Uzbekistan",
//     "Vatican City",
//     "Saint Vincent and the Grenadines",
//     "Venezuela",
//     "British Virgin Islands",
//     "U.S. Virgin Islands",
//     "Vietnam",
//     "Vanuatu",
//     "Wallis and Futuna",
//     "Samoa",
//     "Kosovo",
//     "Yemen",
//     "Mayotte",
//     "South Africa",
//     "Zambia",
//     "Zimbabwe",];
// }
