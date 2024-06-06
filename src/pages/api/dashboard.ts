// pages/api/dashboard.ts
// import { cookies } from "next/headers";

async function fetchData(url: any, token: any) {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function handler(req: any, res: any) {
  // const token = req.cookies.__app_token || null;
  const token = req.cookies.__app_token || null;
  // console.log(token, "token get in dashboards component");

  try {
    const [salesData, orderData, tablelist] = await Promise.all([
      fetchData("http://192.168.101.217:8080/api/getSaleBBaKSN", token),
      fetchData("http://192.168.101.217:8080/api/getOrderBBaKSN", token),
      fetchData("http://192.168.101.217:8080/api/getEmpAttendance", token),
    ]);
    res.status(200).json({ orderData, salesData, tablelist });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
