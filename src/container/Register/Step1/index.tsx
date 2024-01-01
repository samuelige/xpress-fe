import { I_Register } from '@/types/onboarding';
import React, { FC } from 'react'
import BusinessInfo from './BusinessInfo';

interface Step1Props {
    values: I_Register;
    errors: Record<string, string>;
    touched: Record<string, string | boolean>;
    setFieldValue: ((field: string, value: any,) => void);
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
    next:() => void;
}
const Step1:FC<Step1Props> = (props) => {
    const {values, errors, touched, setFieldValue, handleBlur, next} = props;
  return (
    <BusinessInfo
        values={values}
        errors={errors}
        setFieldValue={setFieldValue}
        handleBlur={handleBlur}
        touched={touched}
        next={next}
    />
  )
}

export default Step1