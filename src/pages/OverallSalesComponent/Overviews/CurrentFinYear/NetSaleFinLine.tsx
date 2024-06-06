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
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, PointElement } from "chart.js";
import "chart.js/auto";

Chart.register(PointElement);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function NetSaleFinLine({ VendorWiseData }: any) {
  const dataT = VendorWiseData?.netSaleTrand;

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
        display: false,
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

  const data = {
    labels: dataT?.map((item: any) => {
      return item.date;
    }),
    datasets: [
      {
        label: "Total Pcs",
        data: dataT?.map((item: any) => item.sale.toFixed(2)),
        backgroundColor: "rgba(56, 137, 104, 0.1)",
        fill: true,
        borderColor: "#388968",
        // barThickness: 55,
        // barPercentage: 0.1, // Adjust this value to change spacing
        categoryPercentage: 0.5,
      },
      {
        label: "Dispatch",
        data: dataT?.map((item: any) => item.return.toFixed(2)),
        backgroundColor: "rgba(143, 177, 64, 0.1)",
        fill: true,
        borderColor: "#8FB140",
        // barThickness: 55,
        // barPercentage: 0.1, // Adjust this value to change spacing
        categoryPercentage: 0.5,
      },
    ],
  };
  return (
    <>
      <div
        style={{
          height: "45vh",
          position: "relative",
          marginBottom: "1%",
          padding: "1%",
        }}
      >
        <Line options={options} data={data} plugins={[ChartDataLabels]} />
      </div>
    </>
  );
}
