import { DashboardNavigation } from "@/components/Navigation/DashboardNavigation/Navigation.dashboard";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const __app_token = cookieStore.get("__app_token");
  if (!__app_token) {
    // redirect("/summary");
    redirect("/login");
  } else {
    console.log("prefetch?login");
  }
  return (
    <main className="bg-[#FBFBFE] max-h-screen">
      <>
        <DashboardNavigation />
        <section className="mt-[80px] pt-[4px]">{children}</section>
      </>
    </main>
  );
};

export default DashboardLayout;
