import NewOutLetLastMonth from "./NewOutLet/NewOutLetLastMonth";
import NewOutLetTable from "./NewOutLet/NewOutLetTable";
import NewOutletCurrentMonth from "./NewOutLet/NewOutletCurrentMonth";
const NewOutlet = () => {
  return (
    <div className=" grid grid-cols-12 gap-5 ">
      <div className=" col-span-6 ">
        <div className="bg-white border border-[#CACAFA]">
          <div className=" border-b-2 border-[#CACAFA] flex justify-between items-center ">
            <h2 className="font-bold text-[24px] text-[#25215E] m-3 ">
              Net Sales Trend
            </h2>
          </div>
          <div className="p-4">
            <NewOutLetTable />
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <div className="bg-white shadow-sm border border-[#CACAFA] rounded mb-5">
          <div className="border-b-2 border-[#CACAFA] flex justify-between items-center">
            <h1 className="font-bold text-[24px] text-[#25215E] m-3">
              New Outlet Current Month
            </h1>
          </div>
          <div className="py-4">
            <NewOutletCurrentMonth />
          </div>
        </div>
        <div className="bg-white shadow-sm border border-[#CACAFA] rounded mb-5 ">
          <div className="border-b-2 border-[#CACAFA] flex justify-between items-center">
            <h1 className="font-bold text-[24px] text-[#25215E] m-3">
              New Outlet Last Month
            </h1>
          </div>
          <div className="py-4">
            <NewOutLetLastMonth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOutlet;
