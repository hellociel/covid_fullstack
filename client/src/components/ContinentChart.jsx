import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const ContinentChart = (props) => {
  let continentNames = [
    "Africa",
    "Asia",
    "Austrailia",
    "Europe",
    "North-America",
    "South-America",
  ];
  let africaTotalCases = 0;
  let asiaTotalCases = 0;
  let oceaniaTotalCases = 0;
  let europeTotalCases = 0;
  let nAmericaTotalCases = 0;
  let sAmericaTotalCases = 0;

  for (let i = 0; i < props.total.length; i++) {
    if (props.total[i].continent === "Asia") {
      asiaTotalCases += props.total[i].totalcases;
    } else if (props.total[i].continent === "Africa") {
      africaTotalCases += props.total[i].totalcases;
    } else if (props.total[i].continent === "Europe") {
      europeTotalCases += props.total[i].totalcases;
    } else if (props.total[i].continent === "austrailia") {
      austrailiaTotalCases += props.total[i].totalcases;
    } else if (props.total[i].continent === "North-America") {
      nAmericaTotalCases += props.total[i].totalcases;
    } else if (props.total[i].continent === "South-America") {
      sAmericaTotalCases += props.total[i].totalcases;
    } else if (props.total[i].continent === "Oceania") {
      oceaniaTotalCases += props.total[i].totalcases;
    }
  }

  const data = {
    labels: continentNames,
    datasets: [
      {
        label: "Total Cases to Date",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          africaTotalCases,
          asiaTotalCases,
          oceaniaTotalCases,
          europeTotalCases,
          nAmericaTotalCases,
          sAmericaTotalCases,
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Continent Total Case Status</h2>
      <HorizontalBar data={data} />
    </div>
  );
};

export default ContinentChart;
