import Cookies from "js-cookie";
import config from "../../../config/config.json";
export const simpleAwaitFetchTest = async function (
  endpoint: any,
  // data: any,
  cache: any
  // token: any
) {
  var token = Cookies.get("__app_token");

  var fetchConfig = {
    // body: JSON.stringify(data),
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // "devicetype" : "WebPortal"
    },
  };
  if (cache) {
    fetchConfig["cache"] = "no-store";
  } else {
    fetchConfig["cache"] = "force-cache";
  }
  if (token) {
    fetchConfig["headers"]["Authorization"] = "Bearer " + token;
  }
  var res = await fetch(config._api_Live + endpoint, fetchConfig);
  if (token) {
    return res;
  } else {
    console.log("error: -");
  }
};
