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

export default function NetSaleFinnBar({ VendorWiseData }: any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (VendorWiseData) {
      setLoading(false);
    }
  }, [VendorWiseData]);
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
        color: "black",
        padding: -5,
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
        label: "Net Sales",
        data: dataT?.map((item: any) => item.sale.toFixed(2)),
        backgroundColor: "#388968",
        // barThickness: 55,
        // barPercentage: 0.1, // Adjust this value to change spacing
        categoryPercentage: 0.5,
      },
      {
        label: "Return",
        data: dataT?.map((item: any) => item.return.toFixed(2)),
        backgroundColor: "#8FB140",
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
        <Bar options={options} data={data} plugins={[ChartDataLabels]} />
      </div>
    </>
  );
}
