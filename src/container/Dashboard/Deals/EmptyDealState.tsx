import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';
import { emptyState } from "@/_shared/assets/images";

const EmptyDealState: React.FC = () => {
  const router = useRouter();
  return (
    <div className="grid place-content-center py-11">
      <Image src={emptyState} alt="emptyState" className="mx-auto" />

      <div className="flex flex-col text-center mt-5">
        <h5 className="text-black-20 text-lg font-semibold">
          No deal added at the moment
        </h5>
        <p className="text-gray-400 text-sm mt-2">Please create a deal</p>

        <div className="flex flex-row mt-8 pl-12">
          <Button
            className="text-primary-25 text-sm"
            variant="outlined"
            onClick={() => null}
          >
            <span className="text-sm ">
              Add Deals
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyDealState;
