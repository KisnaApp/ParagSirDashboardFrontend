"use client";
import React from "react";
import { useState, useEffect } from "react";
import RSMSummary from "./Overviews/RSMSummary";
import SHSummary from "./Overviews/SHSummary";
import ZoneSupportSummary from "./Overviews/ZoneSupportSummary";
import NewOutlet from "./Overviews/NewOutlet";

export default function OverallSalesComponent() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [valueType, setValueType] = useState("Sale wise Top to Bottom");

  useEffect(() => {
    setValueType("Sale wise Top to Bottom");
    console.log("effect called");
  }, [activeTab]);

  interface Tab {
    title: string;
    content: JSX.Element;
  }

  const tabs: Tab[] = [
    {
      title: "RSM Summary",
      content: <RSMSummary valueType={valueType} />,
    },
    {
      title: "SH Summary",
      content: <SHSummary valueType={valueType} />,
    },
    {
      title: "Zone Support Summary",
      content: <ZoneSupportSummary valueType={valueType} />,
    },
    {
      title: "New Outlet",
      content: <NewOutlet />,
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="px-[50px] pt-[50px] bg-[#FBFBFE]">
        <div className="flex justify-between pb-[20px]">
          <div className="tab-buttons bg-white items-center shadow-sm border border-[#E0E0FF] rounded-md py-2">
            {/* Your tab buttons */}
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`${
                  activeTab === index
                    ? "bg-[#25215E] text-white font-semibold"
                    : "text-[#6E7191]"
                } transition ease-in-out px-3 py-2 mx-3 hover:bg-[#25215E] hover:text-white rounded-[5px] whitespace-nowrap`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="flex items-center align-middle gap-5">
            <div className="pt-4">
              <select
                value={valueType}
                style={{ outline: "none" }}
                className="border border-[#CACAFA] rounded-sm mx-2 py-1.5 "
                onChange={(e) => setValueType(e.target.value)}
              >
                <option value="Sale wise Top to Bottom">
                  Sale wise Top to Bottom
                </option>
                {activeTab !== 2 && activeTab !== 3 && (
                  <option value="Kisna Diamond Sale">Kisna Diamond Sale</option>
                )}

                <option value="Percentage Wise Top to Bottom">
                  % wise Top to Bottom
                </option>
                <option value="Gold Sale">Gold Sale</option>
              </select>
            </div>
          </div>
        </div>

        <div className="tab-content pt-4 pb-4">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}
