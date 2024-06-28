// import { cookies } from "next/headers";
// import config from "../../../../config/config.json";
// import DailyReportComponent from "@/pages/DailyReportComponent";

// // async function KisnaPageDailRepo() {
// //   try {
// //     const response = await simpleAwaitFetch(
// //       "KSNOrderDailyReport",
// //       true,
// //       cookies().get("__app_token")?.value
// //     );
// //     // console.log("dekhle", response);
// //     const data = await response.json();
// //     // console.log("hellp", data.currentYearMonthlyOrder[0]?.date);
// //     return data;
// //   } catch (error) {
// //     console.log("KSNOrderDailyReport", error);
// //   }
// // }

// const dailyReport = async () => {
// //   const KisnaPageVendorWise = async (
// //     part: string,
// //     fromDate: string,
// //     ToDate: string
// //   ) => {
// //     "use server";
// //     const formatDate = (dateString: string) => {
// //       const date = new Date(dateString);
// //       const year = date.getFullYear();
// //       const month = `0${date.getMonth() + 1}`.slice(-2);
// //       const day = `0${date.getDate()}`.slice(-2);
// //       return `${year}-${month}-${day}`;
// //     };
// //     try {
// //       const requestBody = {
// //         // fromDate: fromDate,
// //         // toDate: toDate,
// //         fromDate: formatDate(fromDate),
// //         toDate: formatDate(ToDate),
// //         part: part,
// //       };

// //       const response = await fetch(config._api_Live + "ksnVendorDataBypart", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           // Add any other headers you need, such as authorization token
// //           Authorization: `Bearer ${cookies().get("__app_token")?.value}`,
// //         },
// //         body: JSON.stringify(requestBody),
// //       });

// //       const data = await response.json();
// //       // console.log(data, "data vendor report");
// //       return data;
// //     } catch (error) {
// //       console.log("ksnVendorDataBypart", error);
// //     }
// //   };
//   return (
//     <>
//       <DailyReportComponent />
//     </>
//   );
// };

// export default dailyReport;


import { cookies } from "next/headers";
import config from "../../../../config/config.json";
import DailyReportComponent from "@/pages/DailyReportComponent";

// async function KisnaPageDailRepo() {
//   try {
//     const response = await simpleAwaitFetch(
//       "KSNOrderDailyReport",
//       true,
//       cookies().get("__app_token")?.value
//     );
//     // console.log("dekhle", response);
//     const data = await response.json();
//     // console.log("hellp", data.currentYearMonthlyOrder[0]?.date);
//     return data;
//   } catch (error) {
//     console.log("KSNOrderDailyReport", error);
//   }
// }

const dailyReport = async () => {
  const KisnaPageVendorWise = async (
    valuetype: string,
    fromdt: string,
    todate: string
  ) => {
    "use server";
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = `0${date.getMonth() + 1}`.slice(-2);
      const day = `0${date.getDate()}`.slice(-2);
      return `${year}-${month}-${day}`;
    };
    console.log("part", valuetype);
    // console.log("date", formatDate(fromdt), formatDate(todate));
    // console.log("asdfjk", typeof formatDate(fromdt));
    try {
      const requestBody = {
        // fromDate: fromDate,
        // toDate: toDate,
        fromdt: formatDate(fromdt),
        todate: formatDate(todate),
        valuetype: valuetype,
      };

      const response = await fetch(config._api_Live + "rsmsummary", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers you need, such as authorization token
          Authorization: `Bearer ${cookies().get("__app_token")?.value}`,
        },
        body: JSON.stringify(requestBody),
      });
      console.log("requestBody>>", requestBody);

      const data = await response.json();
      //console.log(data, "overallSale");
      return data;
    } catch (error) {
      //console.log("overallSale", error);
    }
  };
  return (
    <>
      <DailyReportComponent VendorWise={KisnaPageVendorWise} />
    </>
  );
};

export default dailyReport;
