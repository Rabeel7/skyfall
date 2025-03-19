"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "center",
    },
    title: {
      display: false,
      text: "Donut Chart",
    },
  },
  rotation: 150,
};

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        // labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [60, 30, 10],
            backgroundColor: ["#F69036", "#F4525B", "#C22947"],
            hoverOffset: 3,
            spacing: 6,
          },
        ],
      },
      options: chartOptions,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas
        ref={chartRef}
        id="myChart"
        style={{
          height: "140px",
          width: "140px",
          spacing: "",
          // marginLeft: "76px",
          // marginRight: "87px",
        }}
      ></canvas>
    </div>
  );
};

export default DonutChart;
