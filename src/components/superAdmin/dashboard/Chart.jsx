import React from "react";
import { Bar } from "react-chartjs-2";

function Chart({ chartData }) {
  console.log("passed down", chartData);
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total amount ordered",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
}

export default Chart;
