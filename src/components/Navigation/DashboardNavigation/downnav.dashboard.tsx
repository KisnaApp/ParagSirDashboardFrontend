"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardLinks, iDashLinks } from "@/utils/links/DashboardLinks";
import { Box } from "@chakra-ui/react";
// import { Logo } from "@/components/Logo/logo";
import DropdownUser from "@/components/SearchBar/searchBar";
import Image from "next/image";

export const DownNav = () => {
  return (
    <Box
      role="menu"
      className="flex items-center py-3 justify-center  gap-10 shadow-md bg-white w-full divide-x-2 px-8"
    >
      {/* ++++++++++  Links +++++++++++++ */}
      <div className=" lg:visible ">
        <Image
          src="/assets/images/Logo.svg"
          width={100}
          height={50}
          alt="hello"
        />
      </div>
      <NavLinks />
    </Box>
  );
};

// handle Nav link here

export const NavLinks = () => {
  const activeLink = usePathname();

  return (
    <div className=" w-full md:flex flex-row items-center px-5">
      {DashboardLinks.map(({ text, url }: iDashLinks) => {
        return (
          <Link href={url} key={`${text}-${url}`}>
            <span
              className={`${
                activeLink &&
                activeLink.includes(url) &&
                "bg-[#25215E] text-white"
              } transition ease-in-out mx-1 px-3 py-2 hover:bg-[#25215E] hover:text-white rounded-[8px] flex flex-row items-center `}
            >
              {/* <span>{icon}</span> */}
              <span className="text-[18px] font-semibold">{text}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
};
