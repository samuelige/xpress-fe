import { I_Register } from '@/types/onboarding';
import { Button } from '@mui/material';
import React, { FC } from 'react'
import BusinessAddress from './BusinessAddress';
import ContactInfo from './ContactInfo';
import Password from './Password';

interface Step2Props {
    values: I_Register;
    errors: Record<string, string>;
    touched: Record<string, string | boolean>;
    setFieldValue: ((field: string, value: any,) => void);
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
    isSubmitting:boolean;
    isValid:boolean;
    close:() => void;
}
const Step2:FC<Step2Props> = (props) => {
    const {values, errors, touched, setFieldValue, handleBlur, isSubmitting, isValid, close} = props;
  return (
    <>
        <div className='flex flex-col space-y-10'>
            <BusinessAddress
                values={values}
                errors={errors}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
                touched={touched}
            />
            <ContactInfo
                values={values}
                errors={errors}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
                touched={touched}
            />
            <Password
                values={values}
                errors={errors}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
                touched={touched}
            />
        </div>
        <div className='flex flex-row space-x-[0.94rem] items-center mt-10'>
            <Button
                variant="contained"
                type="submit"
                disabled={!isValid || isSubmitting}
                className="[&.MuiButtonBase-root]:w-[11.5625rem] [&.MuiButtonBase-root]:h-[3.5rem]"
            >
                Submit
            </Button>
            <p>Step 2 of 2</p>
        </div>
    </>
  )
}

export default Step2