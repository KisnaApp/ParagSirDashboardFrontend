"use client";
import React from "react";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CurrentMonth from "./Overviews/CurrentMonth";
import CurrentFinnYear from "./Overviews/CurrentFinnYear";
import CurrentDiwaliYear from "./Overviews/CurrentDiwaliYear";

export default function OverallSalesComponent({ VendorWise }: any) {
  const defaultValueType = "withgst";
  const [activeTab, setActiveTab] = useState<number>(0);
  const [valueType, setValueType] = useState(defaultValueType);
  const [VendorWiseData, setVendorWiseData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fromdt: any, todate: any;
    const date = new Date();

    if (activeTab === 0) {
      // Current month
      fromdt = new Date(date.getFullYear(), date.getMonth(), 1);
      todate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    } else if (activeTab === 1) {
      fromdt = new Date(date.getFullYear() - 1, 3);
      todate = new Date(date.getFullYear(), 2, 31);
      // November of the previous year to October of the current year
    } else if (activeTab === 2) {
      // April to March
      fromdt = new Date(date.getFullYear() - 1, 10);
      todate = new Date(date.getFullYear(), 9, 31);
    }
    if (VendorWise) {
      const fetchData = async () => {
        try {
          const values = valueType.includes("withgst")
            ? defaultValueType.slice(0)
            : valueType;
          const data = await VendorWise(values, fromdt, todate);
          setVendorWiseData(data);
          setLoading(false);
        } catch (error) {
          console.error("An error occurred while fetching data:", error);
        }
      };
      fetchData();
    }
  }, [valueType, activeTab, VendorWise]);

  interface Tab {
    title: string;
    content: JSX.Element;
  }

  const tabs: Tab[] = [
    // Daily report tab content
    {
      title: "Current Month",
      content: <CurrentMonth VendorWiseData={VendorWiseData} />,
    },

    // Order/ Sales Report tab content
    {
      title: "Current Financial Year",
      content: <CurrentFinnYear VendorWiseData={VendorWiseData} />,
    },

    // Order and Sale Distribution tab content
    {
      title: "Current Diwali Year",
      content: <CurrentDiwaliYear VendorWiseData={VendorWiseData} />,
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
                style={{ outline: "none" }}
                className="border border-[#CACAFA] rounded-sm mx-2 py-1.5 "
                onChange={(e) => setValueType(e.target.value)}
              >
                <option value="withgst">With GST</option>
                <option value="withoutgst">With Out GST</option>
              </select>
            </div>
          </div>
        </div>

        {/* Card  */}
        <div className="gap-5 grid grid-cols-12 ">
          <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
            <p className="text-[#25215E] font-semibold">CURRENT MONTH</p>
            <div className="grid grid-cols-4 gap-4 mt-2  divide-x-2">
              <div>
                <p className="text-sm text-[#6E7191]">Net Sales</p>
                {loading ? (
                  <p>Loading..</p>
                ) : (
                  <p className="font-bold">
                    {/* {data?.TotalPc} */}
                    {VendorWiseData?.currentPeriod?.netSale}
                  </p>
                )}
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Gross</p>
                <p className="font-bold">
                  {/* {data?.Dispatch} */}
                  {VendorWiseData?.currentPeriod?.gross}
                </p>
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Return</p>
                <p className="font-bold">
                  {/* {data?.Pending} */}
                  {VendorWiseData?.currentPeriod?.retrun}
                </p>
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Return %</p>
                <p className="font-bold">
                  {/* {formatInCrores(data?.DpPrice ?? 0)} */}
                  {VendorWiseData?.currentPeriod?.returnPer}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
            <p className="text-[#25215E] font-semibold">
              Current Financial year
            </p>
            <div className="grid grid-cols-4 gap-4 mt-2  divide-x-2">
              <div>
                <p className="text-sm text-[#6E7191]">Net Sales</p>
                <p className="font-bold">
                  {/* {dataSeven?.TotalPc} */}
                  {VendorWiseData?.distribution?.netSale}
                </p>
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Gross</p>
                <p className="font-bold">
                  {/* {dataSeven?.Dispatch} */}
                  {VendorWiseData?.distribution?.gross}
                </p>
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Return</p>
                <p className="font-bold">
                  {/* {dataSeven?.Return} */}
                  {VendorWiseData?.distribution?.retrun}
                </p>
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Return %</p>
                <p className="font-bold">
                  {/* {formatInCrores(dataSeven?.DpPrice ?? 0)} */}
                  {VendorWiseData?.distribution?.returnPer}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
            <p className="text-[#25215E] font-semibold">Current diwali year</p>
            <div className="grid grid-cols-4 gap-4 mt-2  divide-x-2">
              <div>
                <p className="text-sm text-[#6E7191]">Net Sales</p>
                <p className="font-bold">
                  {/* {dataFifteen?.TotalPc} */}
                  {VendorWiseData?.OroKraft?.netSale}
                </p>
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Gross</p>
                <p className="font-bold">
                  {/* {dataFifteen?.Dispatch} */}
                  {VendorWiseData?.OroKraft?.gross}
                </p>
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Return</p>
                <p className="font-bold">
                  {/* {dataFifteen?.Return} */}
                  {VendorWiseData?.OroKraft?.retrun}
                </p>
              </div>
              <div className="pl-6">
                <p className="text-sm text-[#6E7191]">Return %</p>
                <p className="font-bold">
                  {/* {formatInCrores(dataFifteen?.DpPrice ?? 0)} */}
                  {VendorWiseData?.OroKraft?.returnPer}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card end here */}

        <div className="tab-content pt-4 pb-4">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}
