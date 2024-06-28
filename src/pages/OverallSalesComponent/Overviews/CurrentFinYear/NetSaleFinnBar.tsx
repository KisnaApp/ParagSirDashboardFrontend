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

export default function NetSaleFinnBar({ VendorWiseData }: any) {
  console.log("in the CurrentFinnYear VendorWiseData>>>", VendorWiseData);
  const dataT = VendorWiseData?.netSaleTrand;
  console.log("dataT>>>>", dataT);
  // if(dataT){
  //   var totData = dataT.find(index => index.type === 'Total');
  //   console.log("totData>>>", totData)
  // }
  //const totaldata = dataT.find(item => item.type === 'Total');

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
        data: dataT?.map((item: any) => item.sale),
        backgroundColor: "#388968",
        // barThickness: 55,
        // barPercentage: 0.1, // Adjust this value to change spacing
        categoryPercentage: 0.5,
      },
      {
        label: "Return",
        data: dataT?.map((item: any) => item.return),
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
