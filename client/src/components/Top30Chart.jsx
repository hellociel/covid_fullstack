import React from "react";
import { Line } from "react-chartjs-2";
const Top30Chart = (props) => {
  let names = [];
  let dataArr = [];
  let continents = [
    "Africa",
    "Asia",
    "Austrailia",
    "Europe",
    "North-America",
    "Oceania",
    "South-America",
  ];
  let name = props.name.split("top")[1];

  for (let i = 0; i < props.data.length; i++) {
    if (!continents.includes(props.data[i].name)) {
      names.push(props.data[i].name);
    }
    dataArr.push(props.data[i].totalcases);
  }
  const data = {
    labels: names,
    datasets: [
      {
        label: "Top 30",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataArr,
      },
    ],
  };

  return (
    <div>
      <h2>Top 30 Countries - By total {name}</h2>
      <Line data={data} />
    </div>
  );
};

export default Top30Chart;
