import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className=" flex justify-between items-center rounded-lg border border-[#E0E0FF] bg-white py-4 px-5 shadow-default ">
      <div className="mt-4 flex items-end justify-between">
        <div className="m-2 gap-1">
          <h4 className=" text-title-lg font-bold text-graydark">{total}</h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium  `}
        ></span>
      </div>
      <div className="flex h-18 w-18 items-center justify-center rounded-full bg-meta-2">
        {children}
      </div>
    </div>
  );
};

export default CardDataStats;
