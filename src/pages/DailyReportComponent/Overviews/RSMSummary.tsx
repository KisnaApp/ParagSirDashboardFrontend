import { useState } from "react";
import {
  BarGraphIcon,
  BarGraphIconActive,
  TableGraphIcon,
  TableGraphIconActive,
} from "../../../../public/assets/icons/DashIcons";
import RSMSummaryTable from "./RSMSummaryGraphsNCharts/RSMSummaryTable";
import RSMSummaryBarGraph from "./RSMSummaryGraphsNCharts/RSMSummaryBarGraph";
import FYMonthWiseSaleComponent from "./MonthWiseSaleComponents/FYMonthWiseSaleComponent";
import DYMonthWiseSaleComponent from "./MonthWiseSaleComponents/DYMonthWiseSaleComponent";

const RSMSummary = ({ valueType }: any) => {
  const [displayOption, setDisplayOption] = useState("Table");

  return (
    <>
      <div className="bg-white items-center shadow-sm border rounded">
        <div className="border-b-2 border-[#CACAFA] flex justify-between items-center">
          <h2 className="font-bold text-[24px] text-[#25215E] m-3">
            {valueType} Sale Summary
          </h2>
          <div className="pr-4">
            <button className="mx-2" onClick={() => setDisplayOption("Table")}>
              {displayOption === "Table" ? (
                <TableGraphIconActive />
              ) : (
                <TableGraphIcon />
              )}
            </button>
            <button
              className="mx-2"
              onClick={() => setDisplayOption("BarGraph")}
            >
              {displayOption === "BarGraph" ? (
                <BarGraphIconActive />
              ) : (
                <BarGraphIcon />
              )}
            </button>
          </div>
        </div>
        <div>
          {displayOption === "Table" && (
            <RSMSummaryTable valueType={valueType} />
          )}
          {displayOption === "BarGraph" && (
            <RSMSummaryBarGraph valueType={valueType} />
          )}
        </div>
      </div>

      {valueType === "Kisna Diamond Sale" ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FYMonthWiseSaleComponent />
          </div>

          <div className="col-span-6">
            <DYMonthWiseSaleComponent />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default RSMSummary;
