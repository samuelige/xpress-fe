import Deals from "@/container/Dashboard/Deals";
import { Suspense } from "react";
import Loading from "../loading";
import { NextPage } from "next";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const page: NextPage = () => {
  
  return (
      <div className="w-full">
          <Suspense fallback={<Loading />}>
            <Deals/>;
          </Suspense>
      </div>
  )
}

export default page;
