import React from "react";
import FormComponent from "./loginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import config from "../../../config/config.json";

export default async function Home({
  searchParams: { forgot },
}: {
  searchParams: { forgot: string };
}) {
  var forgotParam = forgot ? null : forgot;

  const cookieStore = cookies();
  const __app_token = cookieStore.get("__app_token");
  // const __app_data_login_type = cookieStore.get("__app_data_login_type");
  if (__app_token && __app_token.value && forgotParam == null) {
    redirect("/overallSales");
    // return 1;
  }
  var msgErr = null;

  async function loginNew(user: any, password: any, loginby: any) {
    "use server";
    var object = {
      user: user,
      password: password,
      loginby: loginby,
    };
    var msgErr = null;

    try {
      const response = await fetch(config._api_Live + "userLogin", {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
      // console.log(first)
      // console.log("response 1", response);
      if (!response.ok) {
        // console.log("responce 2", response.ok);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      msgErr = data.message;

      // console.log("msgErr", msgErr); // Log the response for debugging

      if (data.status === 200) {
        // Assuming login was successful
        cookies().set("__app_token", data.token);
        // console.log("tokken 4", data.token);

        cookies().set("__app_user_object", JSON.stringify(data.data));
        cookies().set("__app_user_profile", data.data.userProfile);
        cookies().set("__app_user_name", data.data.name);
        // console.log("tokken 5", data.data.userProfile);

        // Redirect to the summary page
        // redirect("/summary");
        // console.log("mgErr", msgErr);
        return data;
      } else {
        // Handle other cases such as invalid credentials, etc.
        msgErr = data.message;
        console.log("Login Message", msgErr);
        return data;
      }
    } catch (error) {
      console.error("Error 7:", error);
      // You can handle errors here
      return { success: false, message: msgErr };
    }
  }
  return (
    <div>
      <FormComponent msgErr={msgErr} onCall={loginNew} />
    </div>
  );
}
