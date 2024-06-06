import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const DropdownUser = () => {
  async function signout() {
    "use server";
    if (1) {
      cookies().delete("__app_token");
      cookies().delete("__app_user_object");
      cookies().delete("__app_user_profile");
      cookies().delete("__app_user_name");
      redirect("/login");
    }
  }

  const cookieStore = cookies();
  const __app_token = cookieStore.get("__app_token");
  const __app_user_object = cookieStore.get("__app_user_object");
  const userProfile = cookieStore.get("__app_user_profile");
  const userName = cookieStore.get("__app_user_name");

  const image = userProfile?.value;
  const Name = userName?.value;

  if (!__app_token) {
    if (__app_token && __app_user_object) {
      // console.log("prefetch?login");
    } else {
      redirect("/login");
      // return 1;
    }
  }

  return (
    <>
      <div className="flex items-center px-4 py-5 gap-5">
        <div className=" flex">
          {/* <h1>Hello</h1> */}
          <h1 className=" font-semibold text-lg text-[#25215e] ">{Name} </h1>
          {/* <img
            src={image}
            alt="mdo"
            width="50"
            height="50"
            className="rounded-circle"
            style={{ borderRadius: "90%" }}
          /> */}
        </div>
        {/* Other dropdown content */}
        <form action={signout}>
          <button
            className="bg-[#FFE6E6] text-[#FF0000] border border-[#FF0000] text-[18px] font-medium w-full h-10 rounded-[5px] px-4"
            type="submit"
          >
            Logout
          </button>
        </form>
      </div>
    </>
  );
};

export default DropdownUser;
