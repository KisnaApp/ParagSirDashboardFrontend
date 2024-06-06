import { cookies } from "next/headers";
import config from "../../../../config/config.json";
import OverallSalesComponent from "@/pages/OverallSalesComponent";

const overallSales = async () => {
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

      const response = await fetch(config._api_Live + "overallSale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers you need, such as authorization token
          Authorization: `Bearer ${cookies().get("__app_token")?.value}`,
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data, "overallSale");
      return data;
    } catch (error) {
      console.log("overallSale", error);
    }
  };
  return (
    <>
      <OverallSalesComponent VendorWise={KisnaPageVendorWise} />
    </>
  );
};

export default overallSales;
