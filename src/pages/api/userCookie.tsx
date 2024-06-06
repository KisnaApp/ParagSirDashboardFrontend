import { Box, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <div>
      <main className="px-4 md:px-12 bg-[#FBFBFE]">
        <section className="grid grid-cols-2 gap-5 mt-4">
          {/* Order */}
          <div className="space-y-2">
            {/* <div className="h-10 bg-gray-200 shimmer w-1/2"></div> */}
            <div className="h-96 bg-gray-200 shimmer"></div>
          </div>
          {/* Sale */}
          {/* <div className="space-y-2">
            <div className="h-10 bg-gray-200 shimmer w-1/2"></div>
            <div className="h-96 bg-gray-200 shimmer"></div>
          </div> */}
        </section>
        {/* Test */}
        {/* <section className="grid grid-cols-12 gap-5 mt-4">
          <div className="col-span-5 space-y-2">
            <div className="h-6 bg-gray-200 shimmer w-1/4"></div>
            <div className="h-48 bg-gray-200 shimmer"></div>
          </div>
          <div className="col-span-3 space-y-2">
            <div className="h-6 bg-gray-200 shimmer w-1/4"></div>
            <div className="h-48 bg-gray-200 shimmer"></div>
          </div>
          <div className="col-span-4 space-y-2">
            <div className="h-6 bg-gray-200 shimmer w-1/4"></div>
            <div className="h-48 bg-gray-200 shimmer"></div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
