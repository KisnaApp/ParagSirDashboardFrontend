import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ZoneGraph = ({ valueType }: any) => {
  const data = {
    labels: [
      "Manish K",
      "Vishal S",
      "Sanjay P",
      "Amol M",
      "HP-CH-JNK",
      "Mahesh G",
      "Kamal S",
      "Amit S",
    ],
    datasets:
      valueType === "Percentage Wise Top to Bottom"
        ? [
            {
              label: "Achieved",
              data: [380, 340, 455, 210, 580, 620, 420, 380],
              backgroundColor: "#EA9922",
              barPercentage: 0.7,
            },
          ]
        : [
            {
              label: "Achieved",
              data:
                valueType === "Sale wise Top to Bottom"
                  ? [350, 280, 205, 410, 385, 520, 655, 380]
                  : [380, 240, 400, 310, 380, 440, 320, 480],
              backgroundColor:
                valueType === "Sale wise Top to Bottom" ? "#0EC2CD" : "#C04C0B",
              barPercentage: 0.7,
            },
            {
              label: "Target",
              data:
                valueType === "Sale wise Top to Bottom"
                  ? [450, 380, 255, 480, 440, 550, 700, 480]
                  : [500, 280, 366, 510, 490, 450, 625, 320],
              backgroundColor:
                valueType === "Sale wise Top to Bottom" ? "#3CAEA3" : "#2ECEB1",
              barPercentage: 0.7,
            },
          ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Sales Performance",
      },
      datalabels: {
        color: "black",
        align: "top",
        anchor: "end",
        padding: -10,
        font: {
          family: "Montserrat", // Set the desired font family
          size: 12, // Set the font size
        },
        labels: {
          title: {
            font: {
              weight: "bold",
            },
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        //   max: 800,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      style={{
        margin: "0 auto",
        height: "65vh",
        marginBottom: "1%",
        padding: "1%",
      }}
    >
      <Bar data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default ZoneGraph;
