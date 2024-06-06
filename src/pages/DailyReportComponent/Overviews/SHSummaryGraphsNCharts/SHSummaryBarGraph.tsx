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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SHSummaryBarGraph: React.FC = ({ valueType }: any) => {
  const data: ChartData<"bar"> = {
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
    datasets: [
      {
        label: "Diamond Target",
        data:
          valueType === "Kisna Diamond Sale"
            ? [350, 280, 205, 410, 385, 520, 655, 380, 380, 340, 455, 210, 580, 620, 420, 380, 380, 340, 455, 210]
            : valueType === "Sale wise Top to Bottom"
            ? [380, 340, 455, 210, 580, 620, 420, 380, 380, 340, 455, 210, 450, 240, 255, 510, 380, 420, 605, 300]
            : valueType === "Percentage Wise Top to Bottom"
            ? [385, 520, 655, 380, 380, 340, 455, 210, 580, 620, 420, 380, 380, 340, 455, 210, 580, 620, 420, 380]
            : [385, 520, 655, 380, 380, 340, 455, 210, 580, 620, 420, 380, 380, 240, 400, 310, 380, 440, 320, 480],
        backgroundColor:
          valueType === "Kisna Diamond Sale"
            ? "#2969BA"
            : valueType === "Sale wise Top to Bottom"
            ? "#0A9396"
            : valueType === "Percentage Wise Top to Bottom"
            ? "#0E71CD"
            : "#25705E",
        barPercentage: 0.7,
      },
      {
        label: "Total Net Sale",
        data:
          valueType === "Kisna Diamond Sale"
            ? [450, 380, 255, 480, 440, 550, 700, 480, 500, 280, 366, 510, 490, 450, 625, 320, 380, 240, 405, 280]
            : valueType === "Sale wise Top to Bottom"
            ? [700, 480, 500, 280, 366, 510, 490, 450, 625, 320, 380, 240, 500, 280, 366, 510, 490, 450, 625, 320]
            : valueType === "Percentage Wise Top to Bottom"
            ? [380, 240, 405, 280, 560, 630, 440, 350, 366, 510, 490, 450, 625, 320, 380, 240, 500, 280, 366, 510]
            : [700, 480, 500, 280, 366, 510, 490, 450, 625, 320, 380, 240, 500, 280, 366, 510, 490, 450, 625, 320],
        backgroundColor:
          valueType === "Kisna Diamond Sale"
            ? "#59C39B"
            : valueType === "Sale wise Top to Bottom"
            ? "#EE9B00"
            : valueType === "Percentage Wise Top to Bottom"
            ? "#CA6702"
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
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sales Performance",
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default SHSummaryBarGraph;
