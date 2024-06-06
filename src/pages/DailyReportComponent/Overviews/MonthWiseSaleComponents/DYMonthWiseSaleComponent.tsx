import { useState } from "react";
import {
  BarGraphIcon,
  BarGraphIconActive,
  LineGraphIcon,
  LineGraphIconActive,
} from "../../../../../public/assets/icons/DashIcons";
import FYMonthWiseSaleBarGraph from "../RSMSummaryGraphsNCharts/FYMonthWiseSaleBarGraph";
import FYMonthWiseSaleLineGraph from "../RSMSummaryGraphsNCharts/FYMonthWiseSaleLineGraph";
import DYMonthWiseSaleBarGraph from "../RSMSummaryGraphsNCharts/DYMonthWiseSaleBarGraph";
import DYMonthWiseSaleLineGraph from "../RSMSummaryGraphsNCharts/DYMonthWiseSaleLineGraph";

const DYMonthWiseSaleComponent = () => {
  const [displayOption, setDisplayOption] = useState("BarGraph");

  return (
    // <>FYMonthWiseSaleComponent</>
    <div className="bg-white rounded-md shadow mt-3">
      <div className="flex flex-row md:items-center justify-between px-5 py-3 mb-2 md:px-[20px] border-b-2 border-[#CACAFA]">
        <div className="header__title">
          <h2 className="text-[20px] text-[#25215E] font-bold">
            DY Month Wise Sale
          </h2>
        </div>
        <div className="gap-4">
          <button className="mx-2" onClick={() => setDisplayOption("BarGraph")}>
            {displayOption === "BarGraph" ? (
              <BarGraphIconActive />
            ) : (
              <BarGraphIcon />
            )}
          </button>
          <button
            className="mx-2"
            onClick={() => setDisplayOption("LineGraph")}
          >
            {displayOption === "LineGraph" ? (
              <LineGraphIconActive />
            ) : (
              <LineGraphIcon />
            )}
          </button>
        </div>
      </div>
      {/* <Skeleton isLoaded={!isLoading}> */}
      <div className="p-3 h-[42dvh]">
        <div className="flex justify-end">
          <div style={{ marginRight: "20px", position: "relative" }}>
            <span
              style={{
                position: "absolute",
                // left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#0A9396",
              }}
            ></span>
            <span
              style={{
                marginLeft: "20px",
                fontWeight: "bold",
                color: "#0A9396 ",
              }}
            >
              2022-2023
            </span>
          </div>
          <div style={{ marginRight: "20px", position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#CA6702",
              }}
            ></span>
            <span
              style={{
                marginLeft: "20px",
                fontWeight: "bold",
                color: "#CA6702",
              }}
            >
              2023-2024
            </span>
          </div>
        </div>
        {displayOption === "BarGraph" && <DYMonthWiseSaleBarGraph />}
        {displayOption === "LineGraph" && <DYMonthWiseSaleLineGraph />}
      </div>
      {/* </Skeleton> */}
    </div>
  );
};

export default DYMonthWiseSaleComponent;
