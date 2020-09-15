import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const ByContinentChart = (props) => {
  console.log("JEREDWEFEWUIHO", props.data[0].name);
  let countryNames = [];
  let dataarr = [];
  //   let name = props.data[0].name;
  for (let i = 0; i < props.data.length; i++) {
    countryNames.push(props.data[i].name);
    dataarr.push(props.data[i].datacases);
  }

  const data = {
    labels: countryNames,
    datasets: [
      {
        label: "Total Cases to Date",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dataarr,
      },
    ],
  };

  return (
    <div>
      <h2>{name} Total Case Status</h2>
      <HorizontalBar data={data} />
    </div>
  );
};

export default ByContinentChart;