import { parse } from "cookie";
import { IncomingMessage } from "http";

export function getTokenFromCookie(req: IncomingMessage) {
  // Get cookies from the request headers
  if (!req.headers) {
    // console.error("Request headers are undefined");
    return null;
  }
  // console.log(req, "required data");
  const cookies = req.headers.cookie;
  // console.log("Cookies:", cookies);

  // Parse cookies into an object
  const parsedCookies = parse(cookies || "");
  // console.log("Parsed Cookies:", parsedCookies);

  // Retrieve the token from the cookies object
  const token = parsedCookies.token;
  // console.log("Token:", token);

  return token;
}
