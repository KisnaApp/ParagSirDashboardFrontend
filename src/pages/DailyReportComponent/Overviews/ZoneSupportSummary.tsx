import React, { useState } from "react";
import {
  BarGraphIcon,
  BarGraphIconActive,
  TableGraphIcon,
  TableGraphIconActive,
} from "../../../../public/assets/icons/DashIcons";
import ZoneTable from "./ZoneSupportSummary/ZoneTable";
import ZoneGraph from "./ZoneSupportSummary/ZoneGraph";

export default function ZoneSupportSummary({ valueType }: any) {
  const [displayOption, setDisplayOption] = useState("Table");

  return (
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
          <button className="mx-2" onClick={() => setDisplayOption("BarGraph")}>
            {displayOption === "BarGraph" ? (
              <BarGraphIconActive />
            ) : (
              <BarGraphIcon />
            )}
          </button>
        </div>
      </div>
      <div>
        {displayOption === "Table" && <ZoneTable valueType={valueType} />}
        {displayOption === "BarGraph" && <ZoneGraph />}
      </div>
    </div>
  );
}
