import React, { useContext } from "react";
import Image from "next/image";
import { Button } from "@mui/material";

import Portal from "@/_shared/HOC/Portal";
import CustomModal from "@/_shared/components/CustomModal";
import AppContext from "@/_lib/contextApi";
import { pending } from "@/_shared/assets/icons";


const RegisterSuccessModal = () => {
  const { toggleRegisterSuccessModal, setToggleRegisterSuccessModal} =
    useContext(AppContext);
  

  const handleContinue = () => {
    setToggleRegisterSuccessModal(false);
  };

  return (
    <Portal>
      <CustomModal
        open={toggleRegisterSuccessModal}
        setClose={() => null}
        overFlowShouldNotCloseModal
      >
        <div className="w-[21rem] sm:w-[27.625rem] flex flex-col p-10">
          <Image
            src={pending}
            width={68}
            height={68}
            className="object-contain mx-auto"
            alt="pending_icon"
          />
          <h1 className="mb-1 mt-2 text-2xl font-semibold text-warning-100 text-center">
            Pending
          </h1>
          <p className="text-sm text-center text-black-200 mt-6 mb-10">
            Your registration is awaiting approval from our partnership team
          </p>
          {/* <div className="flex flex-col pt-6">
            <Image
                src={pending}
                width={68}
                height={68}
                className="object-contain mx-auto"
                alt="pending_icon"
            />
            <h1 className="mb-1 mt-2 text-2xl font-semibold text-warning-100 text-center">
              Pending
            </h1>
            <p className="text-sm text-center text-black-200 mt-6">
              Your registration is awaiting approval from our partnership team
            </p>
          </div> */}
          <Button variant="contained" fullWidth onClick={handleContinue}>
            Done
          </Button>
          {/* <div className="mt-10">
            <Button variant="contained" fullWidth onClick={handleContinue}>
              Done
            </Button>
          </div> */}
          
        </div>
      </CustomModal>
    </Portal>
  );
};

export default RegisterSuccessModal;
