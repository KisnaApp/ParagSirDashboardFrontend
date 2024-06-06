import DropdownUser from "@/components/SearchBar/searchBar";
import { DownNav } from "./downnav.dashboard";
import { TopNav } from "./topnav.dashboard";

export const DashboardNavigation = () => {
  return (
    <div className=" grid grid-cols-3 ">
      <nav className="fixed top-0 col-span-11 w-screen z-[100]">
        {/* <TopNav /> */}
        <DownNav />
        <div className=" fixed top-0 right-0 col-span-1 z-99">
          <DropdownUser />
        </div>
      </nav>
    </div>
  );
};
