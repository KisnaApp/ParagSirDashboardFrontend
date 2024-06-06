import React, { useState } from "react";
import {
  BarGraphIconActive,
  BarGraphIcon,
  LineGraphIcon,
  LineGraphIconActive,
} from "../../../../public/assets/icons/DashIcons";
import CurrentFinYearTable from "./CurrentFinYear/CurrentFinYearTable";
import NetSaleFinnBar from "./CurrentFinYear/NetSaleFinnBar";
import NetSaleFinLine from "./CurrentFinYear/NetSaleFinLine";

export default function CurrentFinnYear({ VendorWiseData }: any) {
  const DisplayOptions = {
    GRAPH: "graph",
    TABLE: "table",
  };
  const [displayOption, setDisplayOption] = useState<string>(
    DisplayOptions.GRAPH
  );
  return (
    <div>
      <div className="bg-white items-center shadow-sm rounded my-4 border border-[#E0E0FF]">
        <div className="border-b-2 border-[#CACAFA] flex justify-between items-center ">
          <h2 className="font-bold text-[24px] text-[#25215E] m-3 ">
            OverAll Net Sales Trend
          </h2>
          <div className="flex items-center align-middle ">
            <button
              style={{ marginRight: "20px", position: "relative" }}
              onClick={() => setDisplayOption(DisplayOptions.GRAPH)}
            >
              {displayOption === DisplayOptions.GRAPH ? (
                <BarGraphIconActive />
              ) : (
                <BarGraphIcon />
              )}
            </button>
            <button
              style={{ marginRight: "20px", position: "relative" }}
              onClick={() => setDisplayOption(DisplayOptions.TABLE)}
            >
              {displayOption === DisplayOptions.TABLE ? (
                <LineGraphIconActive />
              ) : (
                <LineGraphIcon />
              )}
            </button>
          </div>
        </div>
        <div
          // isLoaded={!isLoading}
          className="gap-5 grid grid-cols-12 pt-[30px] "
        >
          {/* Delivery Days Order */}

          <div className="col-span-12 ">
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
                    backgroundColor: "#388968",
                  }}
                ></span>
                <span
                  style={{
                    marginLeft: "20px",
                    fontWeight: "bold",
                    color: "#388968 ",
                  }}
                >
                  Net Sales
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
                    backgroundColor: "#8FB140",
                  }}
                ></span>
                <span
                  style={{
                    marginLeft: "20px",
                    fontWeight: "bold",
                    color: "#8FB140",
                  }}
                >
                  Return
                </span>
              </div>
            </div>
            {displayOption === DisplayOptions.GRAPH && (
              <div className="px-4 ">
                <NetSaleFinnBar VendorWiseData={VendorWiseData} />
              </div>
            )}
            {displayOption === DisplayOptions.TABLE && (
              <div className="px-4">
                <NetSaleFinLine VendorWiseData={VendorWiseData} />
              </div>
            )}
          </div>
          {/* Top Vender Order Wise */}
        </div>
      </div>
      <div className="bg-white items-center shadow-sm rounded my-4 border border-[#E0E0FF]">
        <div className="border-b-2 border-[#CACAFA] flex justify-between items-center ">
          <h2 className="font-bold text-[24px] text-[#25215E] m-3 ">
            Net Sales Trend
          </h2>
        </div>
        <div className="p-4">
          <CurrentFinYearTable VendorWiseData={VendorWiseData} />
        </div>
      </div>
    </div>
  );
}
