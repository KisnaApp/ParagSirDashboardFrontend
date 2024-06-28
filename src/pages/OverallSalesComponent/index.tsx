// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import CurrentMonth from "./Overviews/CurrentMonth";
// import CurrentFinnYear from "./Overviews/CurrentFinnYear";
// import CurrentDiwaliYear from "./Overviews/CurrentDiwaliYear";

// export default function OverallSalesComponent({ VendorWise }: any) {
//   const defaultValueType = "withgst";
//   const [activeTab, setActiveTab] = useState<number>(0);
//   const [valueType, setValueType] = useState(defaultValueType);
//   const [VendorWiseData, setVendorWiseData] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let fromdt: any, todate: any;
//     const date = new Date();

//     if (activeTab === 0) {
//       // Current month
//       fromdt = new Date(date.getFullYear(), date.getMonth(), 1);
//       todate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
//     } else if (activeTab === 1) {
//       fromdt = new Date(date.getFullYear() - 1, 3);
//       todate = new Date(date.getFullYear(), 2, 31);
//       // November of the previous year to October of the current year
//     } else if (activeTab === 2) {
//       // April to March
//       fromdt = new Date(date.getFullYear() - 1, 10);
//       todate = new Date(date.getFullYear(), 9, 31);
//     }
//     if (VendorWise) {
//       const fetchData = async () => {
//         try {
//           const values = valueType.includes("withgst")
//             ? defaultValueType.slice(0)
//             : valueType;
//           const data = await VendorWise(values, fromdt, todate);
//           setVendorWiseData(data);
//           setLoading(false);
//         } catch (error) {
//           console.error("An error occurred while fetching data:", error);
//         }
//       };
//       fetchData();
//     }
//   }, [valueType, activeTab, VendorWise]);

//   interface Tab {
//     title: string;
//     content: JSX.Element;
//   }

//   const tabs: Tab[] = [
//     // Daily report tab content
//     {
//       title: "Current Month",
//       content: <CurrentMonth VendorWiseData={VendorWiseData} />,
//     },

//     // Order/ Sales Report tab content
//     {
//       title: "Current Financial Year",
//       content: <CurrentFinnYear VendorWiseData={VendorWiseData} />,
//     },

//     // Order and Sale Distribution tab content
//     {
//       title: "Current Diwali Year",
//       content: <CurrentDiwaliYear VendorWiseData={VendorWiseData} />,
//     },
//   ];

//   const handleTabClick = (index: number) => {
//     setActiveTab(index);
//   };

//   return (
//     <div>
//       <div className="px-[50px] pt-[50px] bg-[#FBFBFE]">
//         <div className="flex justify-between pb-[20px]">
//           <div className="tab-buttons bg-white items-center shadow-sm border border-[#E0E0FF] rounded-md py-2">
//             {/* Your tab buttons */}
//             {tabs.map((tab, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleTabClick(index)}
//                 className={`${
//                   activeTab === index
//                     ? "bg-[#25215E] text-white font-semibold"
//                     : "text-[#6E7191]"
//                 } transition ease-in-out px-3 py-2 mx-3 hover:bg-[#25215E] hover:text-white rounded-[5px] whitespace-nowrap`}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center align-middle gap-5">
//             <div className="pt-4">
//               <select
//                 style={{ outline: "none" }}
//                 className="border border-[#CACAFA] rounded-sm mx-2 py-1.5 "
//                 onChange={(e) => setValueType(e.target.value)}
//               >
//                 <option value="withgst">With GST</option>
//                 <option value="withoutgst">With Out GST</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Card  */}
//         <div className="gap-5 grid grid-cols-12 ">
//           <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
//             <p className="text-[#25215E] font-semibold">CURRENT MONTH</p>
//             <div className="grid grid-cols-4 gap-4 mt-2  divide-x-2">
//               <div>
//                 <p className="text-sm text-[#6E7191]">Net Sales</p>
//                 {loading ? (
//                   <p>Loading..</p>
//                 ) : (
//                   <p className="font-bold">
//                     {/* {data?.TotalPc} */}
//                     {VendorWiseData?.currentPeriod?.netSale}
//                   </p>
//                 )}
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Gross</p>
//                 <p className="font-bold">
//                   {/* {data?.Dispatch} */}
//                   {VendorWiseData?.currentPeriod?.gross}
//                 </p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return</p>
//                 <p className="font-bold">
//                   {/* {data?.Pending} */}
//                   {VendorWiseData?.currentPeriod?.retrun}
//                 </p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return %</p>
//                 <p className="font-bold">
//                   {/* {formatInCrores(data?.DpPrice ?? 0)} */}
//                   {VendorWiseData?.currentPeriod?.returnPer}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
//             <p className="text-[#25215E] font-semibold">
//               Current Financial year
//             </p>
//             <div className="grid grid-cols-4 gap-4 mt-2  divide-x-2">
//               <div>
//                 <p className="text-sm text-[#6E7191]">Net Sales</p>
//                 <p className="font-bold">
//                   {/* {dataSeven?.TotalPc} */}
//                   {VendorWiseData?.distribution?.netSale}
//                 </p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Gross</p>
//                 <p className="font-bold">
//                   {/* {dataSeven?.Dispatch} */}
//                   {VendorWiseData?.distribution?.gross}
//                 </p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return</p>
//                 <p className="font-bold">
//                   {/* {dataSeven?.Return} */}
//                   {VendorWiseData?.distribution?.retrun}
//                 </p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return %</p>
//                 <p className="font-bold">
//                   {/* {formatInCrores(dataSeven?.DpPrice ?? 0)} */}
//                   {VendorWiseData?.distribution?.returnPer}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
//             <p className="text-[#25215E] font-semibold">Current diwali year</p>
//             <div className="grid grid-cols-4 gap-4 mt-2  divide-x-2">
//               <div>
//                 <p className="text-sm text-[#6E7191]">Net Sales</p>
//                 <p className="font-bold">
//                   {/* {dataFifteen?.TotalPc} */}
//                   {VendorWiseData?.OroKraft?.netSale}
//                 </p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Gross</p>
//                 <p className="font-bold">
//                   {/* {dataFifteen?.Dispatch} */}
//                   {VendorWiseData?.OroKraft?.gross}
//                 </p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return</p>
//                 <p className="font-bold">
//                   {/* {dataFifteen?.Return} */}
//                   {VendorWiseData?.OroKraft?.retrun}
//                 </p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return %</p>
//                 <p className="font-bold">
//                   {/* {formatInCrores(dataFifteen?.DpPrice ?? 0)} */}
//                   {VendorWiseData?.OroKraft?.returnPer}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* card end here */}

//         <div className="tab-content pt-4 pb-4">{tabs[activeTab].content}</div>
//       </div>
//     </div>
//   );
// }




// "use client";
// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import CurrentMonth from "./Overviews/CurrentMonth";
// import CurrentFinnYear from "./Overviews/CurrentFinnYear";
// import CurrentDiwaliYear from "./Overviews/CurrentDiwaliYear";

// export default function OverallSalesComponent({ VendorWise }) {
//   const defaultValueType = "withgst";
//   const [activeTab, setActiveTab] = useState(0);
//   const [valueType, setValueType] = useState(defaultValueType);
//   const [VendorWiseData, setVendorWiseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [fromDate, setFromDate] = useState(new Date());
//   const [toDate, setToDate] = useState(new Date());

//   const fetchVendorWiseData = async (fromdt, todate, valuetype) => {
//     setLoading(true);
//     try {
//       const data = await VendorWise(valuetype, fromdt, todate);
//       setVendorWiseData(data);
//     } catch (error) {
//       console.error("An error occurred while fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVendorWiseData(fromDate, toDate, valueType);
//   }, [valueType, fromDate, toDate]);

//   const handleFilterChange = () => {
//     fetchVendorWiseData(fromDate, toDate, valueType);
//   };

//   const tabs = [
//     {
//       title: "Current Month",
//       content: <CurrentMonth VendorWiseData={VendorWiseData} />,
//     },
//     {
//       title: "Current Financial Year",
//       content: <CurrentFinnYear VendorWiseData={VendorWiseData} />,
//     },
//     {
//       title: "Current Diwali Year",
//       content: <CurrentDiwaliYear VendorWiseData={VendorWiseData} />,
//     },
//   ];

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div>
//       <div className="px-[50px] pt-[50px] bg-[#FBFBFE]">
//         <div className="flex justify-between pb-[20px]">
//           <div className="tab-buttons bg-white items-center shadow-sm border border-[#E0E0FF] rounded-md py-2">
//             {tabs.map((tab, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleTabClick(index)}
//                 className={`${
//                   activeTab === index
//                     ? "bg-[#25215E] text-white font-semibold"
//                     : "text-[#6E7191]"
//                 } transition ease-in-out px-3 py-2 mx-3 hover:bg-[#25215E] hover:text-white rounded-[5px] whitespace-nowrap`}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center align-middle gap-5">
//             <div className="pt-4">
//               <select
//                 style={{ outline: "none" }}
//                 className="border border-[#CACAFA] rounded-sm mx-2 py-1.5"
//                 onChange={(e) => setValueType(e.target.value)}
//               >
//                 <option value="withgst">With GST</option>
//                 <option value="withoutgst">Without GST</option>
//               </select>
//             </div>
//             <div className="pt-4">
//               <DatePicker
//                 selected={fromDate}
//                 onChange={(date) => setFromDate(date)}
//                 className="border border-[#CACAFA] rounded-sm mx-2 py-1.5"
//               />
//             </div>
//             <div className="pt-4">
//               <DatePicker
//                 selected={toDate}
//                 onChange={(date) => setToDate(date)}
//                 className="border border-[#CACAFA] rounded-sm mx-2 py-1.5"
//               />
//             </div>
//             <div className="pt-4">
//               <button
//                 onClick={handleFilterChange}
//                 className="bg-[#25215E] text-white px-3 py-1.5 rounded-sm"
//               >
//                 Filter
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="gap-5 grid grid-cols-12">
//           <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
//             <p className="text-[#25215E] font-semibold">CURRENT MONTH</p>
//             <div className="grid grid-cols-4 gap-4 mt-2 divide-x-2">
//               <div>
//                 <p className="text-sm text-[#6E7191]">Net Sales</p>
//                 {loading ? (
//                   <p>Loading..</p>
//                 ) : (
//                   <p className="font-bold">{VendorWiseData?.currentPeriod?.netSale}</p>
//                 )}
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Gross</p>
//                 <p className="font-bold">{VendorWiseData?.currentPeriod?.gross}</p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return</p>
//                 <p className="font-bold">{VendorWiseData?.currentPeriod?.retrun}</p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return %</p>
//                 <p className="font-bold">{VendorWiseData?.currentPeriod?.returnPer}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
//             <p className="text-[#25215E] font-semibold">Current Financial Year</p>
//             <div className="grid grid-cols-4 gap-4 mt-2 divide-x-2">
//               <div>
//                 <p className="text-sm text-[#6E7191]">Net Sales</p>
//                 <p className="font-bold">{VendorWiseData?.distribution?.netSale}</p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Gross</p>
//                 <p className="font-bold">{VendorWiseData?.distribution?.gross}</p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return</p>
//                 <p className="font-bold">{VendorWiseData?.distribution?.retrun}</p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return %</p>
//                 <p className="font-bold">{VendorWiseData?.distribution?.returnPer}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4">
//             <p className="text-[#25215E] font-semibold">Current Diwali Year</p>
//             <div className="grid grid-cols-4 gap-4 mt-2 divide-x-2">
//               <div>
//                 <p className="text-sm text-[#6E7191]">Net Sales</p>
//                 <p className="font-bold">{VendorWiseData?.OroKraft?.netSale}</p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Gross</p>
//                 <p className="font-bold">{VendorWiseData?.OroKraft?.gross}</p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return</p>
//                 <p className="font-bold">{VendorWiseData?.OroKraft?.retrun}</p>
//               </div>
//               <div className="pl-6">
//                 <p className="text-sm text-[#6E7191]">Return %</p>
//                 <p className="font-bold">{VendorWiseData?.OroKraft?.returnPer}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="tab-content pt-4 pb-4">{tabs[activeTab].content}</div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CurrentMonth from "./Overviews/CurrentMonth";
import CurrentFinnYear from "./Overviews/CurrentFinnYear";
import CurrentDiwaliYear from "./Overviews/CurrentDiwaliYear";

export default function OverallSalesComponent({ VendorWise }) {
  const defaultValueType = "withgst";
  const [activeTab, setActiveTab] = useState(0);
  const [valueType, setValueType] = useState(defaultValueType);
  const [loading, setLoading] = useState(false);
  const [fromDate, setFromDate] = useState(getStartDateForTab("currentMonth"));
  const [toDate, setToDate] = useState(new Date());

  // State variables to store data for each tab
  const [currentMonthData, setCurrentMonthData] = useState(null);
  const [currentFinancialYearData, setCurrentFinancialYearData] = useState(null);
  const [currentDiwaliYearData, setCurrentDiwaliYearData] = useState(null);

  // Function to get start date based on tab selection
  function getStartDateForTab(tabKey) {
    const today = new Date();
    let startDate;
    if (tabKey === "currentMonth") {
      startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    } else if (tabKey === "currentFinancialYear") {
      const fiscalYearStartMonth = 3; // Fiscal year starts from April (0-based index)
      const fiscalYearStartYear = today.getMonth() < fiscalYearStartMonth ? today.getFullYear() - 1 : today.getFullYear();
      startDate = new Date(fiscalYearStartYear - 1, fiscalYearStartMonth, 1);
    } else if (tabKey === "currentDiwaliYear") {
      startDate = new Date(today.getFullYear() - 1, 10, 1); // Diwali year starts from November (0-based index)
    }
    return startDate;
  }

  // Function to fetch data for a specific tab
  const fetchVendorWiseData = async (fromDate, toDate, valueType, tabKey) => {
    setLoading(true);
    try {
      console.log("Fetching data for:", tabKey, valueType, fromDate, toDate);
      const data = await VendorWise(valueType, fromDate, toDate);
      switch (tabKey) {
        case "currentMonth":
          setCurrentMonthData(data);
          break;
        case "currentFinancialYear":
          setCurrentFinancialYearData(data);
          break;
        case "currentDiwaliYear":
          setCurrentDiwaliYearData(data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch initial data for the active tab
  useEffect(() => {
    const tabKey = tabs[activeTab].key;
    const startDate = getStartDateForTab(tabKey);
    setFromDate(startDate);
    if (tabKey === "currentFinancialYear") {
      // Set toDate to current date for Financial Year tab
      setToDate(new Date());
    } else {
      setToDate(new Date()); // Reset toDate to current date for other tabs
    }
    fetchVendorWiseData(startDate, toDate, valueType, tabKey);
  }, [activeTab, valueType]);

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
    const tabKey = tabs[index].key;
    const startDate = getStartDateForTab(tabKey);
    setFromDate(startDate);

    if (tabKey === "currentFinancialYear") {
      // Set toDate to March 30th of the current year for Financial Year tab
      const currentYear = new Date().getFullYear();
      setToDate(new Date(currentYear, 2, 30)); // Month is 2 (March is 0-indexed)
    } else {
      // Reset toDate to current date for other tabs
      setToDate(new Date());
    }

    fetchVendorWiseData(startDate, toDate, valueType, tabKey);
  };


  // Function to handle filter change
  const handleFilterChange = () => {
    console.log("Filter change:", fromDate, toDate, valueType);
    const tabKey = tabs[activeTab].key;
    fetchVendorWiseData(fromDate, toDate, valueType, tabKey);
  };

  // Tabs definition with content and keys
  const tabs = [
    {
      title: "Current Month",
      content: <CurrentMonth VendorWiseData={currentMonthData} />,
      key: "currentMonth",
    },
    {
      title: "Current Financial Year",
      content: <CurrentFinnYear VendorWiseData={currentFinancialYearData} />,
      key: "currentFinancialYear",
    },
    {
      title: "Current Diwali Year",
      content: <CurrentDiwaliYear VendorWiseData={currentDiwaliYearData} />,
      key: "currentDiwaliYear",
    },
  ];

  return (
    <div>
      <div className="px-[50px] pt-[40px] bg-[#FBFBFE]">
      <h3 className="text-center font-semibold mb-4">All Figures in Crores</h3>
        <div className="flex justify-between pb-[20px]">
          <div className="tab-buttons bg-white items-center shadow-sm border border-[#E0E0FF] rounded-md py-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`${activeTab === index
                  ? "bg-[#25215E] text-white font-semibold"
                  : "text-[#6E7191]"
                  } transition ease-in-out px-3 py-2 mx-3 hover:bg-[#25215E] hover:text-white rounded-[5px] whitespace-nowrap`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          {/* <div className="flex items-center align-middle gap-5 shadow-sm border border-[#E0E0FF] rounded-md py-2">
            <div className="pt-4">
              <select
                style={{ outline: "none" }}
                className="border border-[#CACAFA] rounded-sm mx-2 py-1.5"
                onChange={(e) => setValueType(e.target.value)}
              >
                <option value="withgst">With GST</option>
                <option value="withoutgst">Without GST</option>
              </select>
            </div>
            <div className="pt-4">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                className="border border-[#CACAFA] rounded-sm mx-2 py-1.5"
              />
            </div>
            <div className="pt-4">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                className="border border-[#CACAFA] rounded-sm mx-2 py-1.5"
              />
            </div>
            <div className="pt-4">
              <button
                onClick={handleFilterChange}
                className="bg-[#25215E] text-white px-3 py-1.5 rounded-sm"
              >
                Filter
              </button>
            </div>
          </div> */}
          <div className="flex items-center align-middle gap-3 shadow-sm border border-[#E0E0FF] rounded-md py-2 px-3">
            <div className="pt-2">
              <select
                style={{ outline: 'none', textAlign: 'center' }}
                className="border border-[#CACAFA] rounded-sm px-2 py-1"
                onChange={(e) => setValueType(e.target.value)}
              >
                <option value="withgst">With GST</option>
                <option value="withoutgst">Without GST</option>
              </select>
            </div>
            <div className="pt-2">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                className="border border-[#CACAFA] rounded-sm px-1 py-1 text-center"
              />
            </div>
            <div className="pt-2">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                className="border border-[#CACAFA] rounded-sm px-1 py-1 text-center"
              />
            </div>
            <div className="pt-2">
              <button
                onClick={handleFilterChange}
                className="bg-[#25215E] text-white px-4 py-2 rounded-sm"
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="gap-5 grid grid-cols-12">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-md border border-[#E0E0FF] col-span-4 ${activeTab === index ? "" : "text-gray-400"
                }`}
            >
              <p className="text-[#25215E] font-semibold">{tab.title}</p>
              <div className="grid grid-cols-4 gap-4 mt-2 divide-x-2">
                <div>
                  <p className="text-sm text-[#6E7191]">Net Sales</p>
                  {loading && activeTab === index ? (
                    <p>Loading..</p>
                  ) : (
                    <p className="font-bold">
                      {tab.key === "currentMonth"
                        ? parseFloat(currentMonthData?.currentPeriod?.netSale ?? 0).toFixed(2)
                        : tab.key === "currentFinancialYear"
                          ? parseFloat(currentFinancialYearData?.currentPeriod?.netSale ?? 0).toFixed(2)
                          : parseFloat(currentDiwaliYearData?.currentPeriod?.netSale ?? 0).toFixed(2)}
                    </p>
                  )}
                </div>
                <div className="pl-6">
                  <p className="text-sm text-[#6E7191]">Gross</p>
                  <p className="font-bold">
                    {tab.key === "currentMonth"
                      ? parseFloat(currentMonthData?.currentPeriod?.gross ?? 0).toFixed(2)
                      : tab.key === "currentFinancialYear"
                        ? parseFloat(currentFinancialYearData?.currentPeriod?.gross ?? 0).toFixed(2)
                        : parseFloat(currentDiwaliYearData?.currentPeriod?.gross ?? 0).toFixed(2)}
                  </p>
                </div>
                <div className="pl-6">
                  <p className="text-sm text-[#6E7191]">Return</p>
                  <p className="font-bold">
                    {tab.key === "currentMonth"
                      ? parseFloat(currentMonthData?.currentPeriod?.retrun ?? 0).toFixed(2)
                      : tab.key === "currentFinancialYear"
                        ? parseFloat(currentFinancialYearData?.currentPeriod?.retrun ?? 0).toFixed(2)
                        : parseFloat(currentDiwaliYearData?.currentPeriod?.retrun ?? 0).toFixed(2)}
                  </p>
                </div>
                <div className="pl-6">
                  <p className="text-sm text-[#6E7191]">Return %</p>
                  <p className="font-bold">
                    {tab.key === "currentMonth"
                      ? parseFloat(currentMonthData?.currentPeriod?.returnPer ?? 0).toFixed(2)
                      : tab.key === "currentFinancialYear"
                        ? parseFloat(currentFinancialYearData?.currentPeriod?.returnPer ?? 0).toFixed(2)
                        : parseFloat(currentDiwaliYearData?.currentPeriod?.returnPer ?? 0).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tab-content pt-4 pb-4">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}












