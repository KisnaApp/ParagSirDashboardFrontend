import config from "../../../config/config.json";
const currentYear = new Date().getFullYear();

export const simpleAwaitFetch = async function (
  endpoint: any,
  // data: any,
  cache: any,
  token: any
) {
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

export const FiveYearDataFetchPost = async function (
  endpoint: any,
  // data: any,
  cache: any,
  token: any
) {
  var fetchConfig = {
    // body: JSON.stringify(data),
    method: "POST",
    body: JSON.stringify({
      FYfromDate: currentYear - 5,
      FYtoDate: currentYear,
    }),
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

export const YearWiseFetchPost = async function (
  endpoint: any,
  cache: any,
  token: any,
  data: any
) {
  // console.log(data, "action YearWiseFetchPost");
  var fetchConfig = {
    // body: JSON.stringify(data),
    method: "POST",
    body: JSON.stringify({
      FYfromDate: data.end,
      FYtoDate: data.start,
    }),
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
    // console.log(res, "got response from B2B");
    return res;
  } else {
    console.log("error: -");
  }
};
