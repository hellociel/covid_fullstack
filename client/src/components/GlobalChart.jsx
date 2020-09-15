import React from "react";
import { countries, continents } from "../csv/countriesarray.js";
import { FormWrapper, Button } from "../styledComponents/AppStyle.jsx";
import { Pie } from "react-chartjs-2";
const GlobalChart = (props) => {
  const data = {
    labels: ["Active Cases", "Critical Cases", "New Cases", "Total Deceased"],
    datasets: [
      {
        data: [
          props.data.activecases,
          props.data.criticalcases,
          props.data.newcases,
          props.data.totaldeaths,
        ],
        backgroundColor: ["#d96868", "#e8d16b", "#b5d46c", "#8a8a8a"],
        hoverBackgroundColor: ["#c23c3c", "#e3bc0e", "#8ca355", "#5e5e5e"],
      },
    ],
  };
  return (
    <div>
      <h5>Total Cases:{props.data.totalcases}</h5>
      <Pie data={data} />
    </div>
  );
};

export default GlobalChart;
