"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  MailIcon,
  PasswordEyeIcon,
  PasswordEyeIconActive,
  PasswordLockIcon,
} from "../../../public/assets/icons/DashIcons";

export default function FormComponent({ onCall, msgErr }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [errorPlace, setErrorPlace] = useState<string>("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const router = useRouter();

  var added = false;

  let errors = {};

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.querySelector(".alert-primary").innerHTML = "";
    errors = {};
    setIsLoading(true);

    const userInput = event.target[0].value.trim();
    const isEmail = /\S+@\S+\.\S+/.test(userInput);

    if (!userInput) {
      setErrorPlace("email");
      errors.email = "Email & Password is required.";
    } else if (isEmail && !/\S+@\S+\.\S+/.test(userInput)) {
      setErrorPlace("email-invalid");
      errors.email = "Email is invalid.";
    }

    if (event.target[1].value.trim() == "") {
      setErrorPlace("pass");
    } else if (event.target[1].value.length < 6) {
      // Handle password length error
    }

    setError(Object.keys(errors).length !== 0);
    if (Object.keys(errors).length) {
      // document.querySelector(".invalid-feedback").style.display = "block";
      document.querySelector(".invalid-feedback").style.display = "#FBFBFE";
      if (errors.email) {
        document.querySelector(".invalid-feedback").innerHTML = errors.email;
      } else {
        document.querySelector(".invalid-feedback").innerHTML = errors.password;
      }
      setIsLoading(false);
      return;
    }

    const inputType = isEmail ? "UsrEmail" : "UsrCd";

    const msg = await onCall(userInput, event.target[1].value, inputType);

    // console.log("Show the msg", msg);
    if (msg && !msg.success) {
      document.querySelector(".invalid-feedback").innerHTML = msg.message;
      // document.querySelector(".invalid-feedback") = "block";
      setIsLoading(false);
    } else if (msg && msg.success) {
      alert("Login Successful!");
      router.push("/overallSales"); // Redirect to the kisna page upon successful login
    }
    added = true;
    return 1;
  }

  return (
    <main className="h-[100dvh] bg-[#FBFBFE] w-screen flex flex-col justify-center items-center">
      <div className="absolute p-5 flex flex-col justify-center items-center bg-white rounded-md shadow-xl border border-[#E0E0FF]">
        <Image src="/LogoL.svg" height={30} width={100} alt="logo" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={onSubmit} className="mb-2">
                <div className="alert alert-primary mt-4" role="alert">
                  <button type="button" className="btn btn-primary">
                    <span className="glyphicon glyphicon-refresh"></span>
                  </button>
                </div>
                <div className="loginBox">
                  <div className="form-group w-80">
                    <label className="mb-3 block text-xs font-medium text-gray-900">
                      User ID/Email ID
                    </label>
                    <div className="relative divide-x-2 divide-x-reverse divide-[#D7D7D7] px-2">
                      <input
                        type="text"
                        id="email"
                        className={
                          "form-control peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" +
                          (errorPlace === "email" ? "is-invalid" : "")
                        }
                        placeholder="Email or User Id"
                        name="email"
                        required
                      />
                      <span className="absolute left-4 top-2.5 mr-4 pr-1">
                        <MailIcon />
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">
                      Password
                    </label>
                    <div className="relative px-2">
                      <input
                        type={isRevealPwd ? "text" : "password"}
                        id="password"
                        className={
                          "form-control peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" +
                          (errorPlace === "pass" ? "is-invalid" : "")
                        }
                        placeholder="Password"
                        name="password"
                        minLength={8}
                        required
                      />
                      <span className="absolute border-r-2 border-[#D7D7D7] left-4 top-2.5 mr-4 pr-1">
                        <PasswordLockIcon />
                      </span>
                      <span
                        onClick={() => setIsRevealPwd(!isRevealPwd)}
                        className="absolute right-4 top-2.5 pr-1 cursor-pointer bg-white  "
                      >
                        {!isRevealPwd ? (
                          <PasswordEyeIcon />
                        ) : (
                          <PasswordEyeIconActive />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="bg-[#25215e] text-white mt-10 w-full h-10 rounded-sm object-fill"
                      disabled={isLoading}
                    >
                      {isLoading ? "Please wait..." : "LOGIN"}
                    </button>
                  </div>
                  <div
                    className="alert alert-danger mt-4 items-center px-7"
                    role="alert"
                  >
                    <div className="invalid-feedback font-normal  align-middle text-[#D8000C]"></div>

                    {msgErr}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
