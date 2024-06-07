import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RSMSummaryBarGraph: React.FC = ({ valueType }: any) => {
  const data: ChartData<"bar"> = {
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
              backgroundColor: "#0E71CD",
              barPercentage: 0.7,
            },
          ]
        : [
            {
              label: "Achieved",
              data:
                valueType === "Kisna Diamond Sale"
                  ? [350, 280, 205, 410, 385, 520, 655, 380]
                  : valueType === "Sale wise Top to Bottom"
                  ? [450, 240, 255, 510, 380, 420, 605, 300]
                  : [380, 240, 400, 310, 380, 440, 320, 480],
              backgroundColor:
                valueType === "Kisna Diamond Sale"
                  ? "#388968"
                  : valueType === "Sale wise Top to Bottom"
                  ? "#0A9396"
                  : "#25705E",
              barPercentage: 0.7,
            },
            {
              label: "Target",
              data:
                valueType === "Kisna Diamond Sale"
                  ? [450, 380, 255, 480, 440, 550, 700, 480]
                  : valueType === "Sale wise Top to Bottom"
                  ? [500, 280, 366, 510, 490, 450, 625, 320]
                  : [500, 280, 366, 510, 490, 450, 625, 320],
              backgroundColor:
                valueType === "Kisna Diamond Sale"
                  ? "#8FB140"
                  : valueType === "Sale wise Top to Bottom"
                  ? "#EE9B00"
                  : "#BB9E03",
              barPercentage: 0.7,
            },
          ],
  };
  const options: ChartOptions<"bar"> = {
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

export default RSMSummaryBarGraph;
