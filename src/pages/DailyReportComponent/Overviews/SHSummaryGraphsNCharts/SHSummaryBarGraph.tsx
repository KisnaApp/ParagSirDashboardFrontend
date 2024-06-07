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
const SHSummaryBarGraph = ({ valueType }: any) => {
  const data = {
    labels: [
      "TN-A",
      "KL",
      "KA",
      "BR",
      "UPU-B",
      "TN-B",
      "NE-B",
      "MH-B",
      "MP-B",
      "OR",
      "UP-B",
      "AP",
      "JNK",
      "TL",
      "MH-A",
      "WB",
      "GJ",
      "JH",
      "MUM-A",
      "DL-B",
    ],
    datasets:
      valueType === "Percentage Wise Top to Bottom"
        ? [
            {
              label: "Diamond Target",
              data: [
                385, 520, 655, 380, 380, 340, 455, 210, 580, 620, 420, 380, 380,
                340, 455, 210, 580, 620, 420, 380,
              ],
              backgroundColor: "#0E71CD",
              barPercentage: 0.7,
            },
          ]
        : [
            {
              label: "Diamond Target",
              data:
                valueType === "Kisna Diamond Sale"
                  ? [
                      350, 280, 205, 410, 385, 520, 655, 380, 380, 340, 455,
                      210, 580, 620, 420, 380, 380, 340, 455, 210,
                    ]
                  : valueType === "Sale wise Top to Bottom"
                  ? [
                      380, 340, 455, 210, 580, 620, 420, 380, 380, 340, 455,
                      210, 450, 240, 255, 510, 380, 420, 605, 300,
                    ]
                  : [
                      385, 520, 655, 380, 380, 340, 455, 210, 580, 620, 420,
                      380, 380, 240, 400, 310, 380, 440, 320, 480,
                    ],
              backgroundColor:
                valueType === "Kisna Diamond Sale"
                  ? "#2969BA"
                  : valueType === "Sale wise Top to Bottom"
                  ? "#0A9396"
                  : "#25705E",
              barPercentage: 0.7,
            },
            {
              label: "Total Net Sale",
              data:
                valueType === "Kisna Diamond Sale"
                  ? [
                      450, 380, 255, 480, 440, 550, 700, 480, 500, 280, 366,
                      510, 490, 450, 625, 320, 380, 240, 405, 280,
                    ]
                  : valueType === "Sale wise Top to Bottom"
                  ? [
                      700, 480, 500, 280, 366, 510, 490, 450, 625, 320, 380,
                      240, 500, 280, 366, 510, 490, 450, 625, 320,
                    ]
                  : [
                      700, 480, 500, 280, 366, 510, 490, 450, 625, 320, 380,
                      240, 500, 280, 366, 510, 490, 450, 625, 320,
                    ],
              backgroundColor:
                valueType === "Kisna Diamond Sale"
                  ? "#59C39B"
                  : valueType === "Sale wise Top to Bottom"
                  ? "#EE9B00"
                  : "#BB9E03",
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

export default SHSummaryBarGraph;
