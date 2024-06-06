import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
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

export default function DYMonthWiseSaleBarGraph() {
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
      datalabels: {
        color: "black",
        align: "top",
        anchor: "end",
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
      x: {
        grid: {
          display: false,
          color: "#E0E0FF",
        },
        ticks: {
          font: {
            family: "Montserrat", // Set the desired font family
            size: 12, // Set the font size
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "#EDEDED",
        },
        ticks: {
          font: {
            family: "Montserrat", // Set the desired font family
            size: 12, // Set the font size
          },
        },
        max: 1000,
        setSize: 1000,
      },
    },
  };
  const labels = [
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Total Pcs",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 900 })),
        backgroundColor: "#0A9396",
        barThickness: 15,
        barPercentage: 0.7, // Adjust this value to change spacing
        categoryPercentage: 0.5,
      },
      {
        label: "Dispatch",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 900 })),
        backgroundColor: "#CA6702",
        barThickness: 15,
        barPercentage: 0.7, // Adjust this value to change spacing
        categoryPercentage: 0.5,
      },
    ],
  };
  return (
    <>
      <div
        style={{
          height: "100%",
          position: "relative",
          marginBottom: "1%",
          padding: "1%",
        }}
      >
        <Bar options={options} data={data} plugins={[ChartDataLabels]} />
      </div>
    </>
  );
}
