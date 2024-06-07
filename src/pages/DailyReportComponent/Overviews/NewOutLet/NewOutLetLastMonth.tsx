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

export default function NewOutLetLastMonth() {
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    responsive: true,
    layout: {
      padding: {
        // left: 20, // left margin
        // right: 20, // right margin
        top: 20, // top margin
        // bottom: 20, // bottom margin
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
      datalabels: {
        padding: -5,
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
        // max: ,
        // setSize: 100,
      },
    },
  };
  // const data = {
  //   labels: dataT?.map((item: any) => {
  //     return item.date;
  //   }),
  //   datasets: [
  //     {
  //       label: "Net Sales",
  //       data: labels?.map((item: any) => item.sale.toFixed(2)),
  //       backgroundColor: "#0A9396",
  //       // barThickness: 55,
  //       // barPercentage: 0.1, // Adjust this value to change spacing
  //       categoryPercentage: 0.5,
  //     },
  //     {
  //       label: "Return",
  //       data: labels?.map((item: any) => item.return.toFixed(2)),
  //       backgroundColor: "#005FAA",
  //       // barThickness: 55,
  //       // barPercentage: 0.1, // Adjust this value to change spacing
  //       categoryPercentage: 0.5,
  //     },
  //   ],
  // };
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
    datasets: [
      {
        label: "Achieved",
        data: [380, 240, 400, 310, 380, 440, 320, 480],
        backgroundColor: "#005FAA",
        barPercentage: 0.7,
      },
      {
        label: "Target",
        data: [450, 380, 255, 480, 440, 550, 700, 480],
        backgroundColor: "#3CAEA3",
        barPercentage: 0.7,
      },
    ],
  };
  return (
    <div
      style={{
        height: "30vh",
        position: "relative",
        marginBottom: "1%",
        padding: "1%",
      }}
    >
      <div className="flex justify-end">
        <div style={{ marginRight: "20px", position: "relative" }}>
          <span
            style={{
              position: "absolute",
              // left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#005FAA",
            }}
          ></span>
          <span
            style={{
              marginLeft: "12px",
              fontWeight: "bold",
              color: "#005FAA ",
            }}
          >
            Current Month Target
          </span>
        </div>
        <div style={{ marginRight: "20px", position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#3CAEA3",
            }}
          ></span>
          <span
            style={{
              marginLeft: "12px",
              fontWeight: "bold",
              color: "#3CAEA3",
            }}
          >
            Current Month Found
          </span>
        </div>
      </div>
      <Bar options={options} data={data} plugins={[ChartDataLabels]} />
    </div>
  );
}
