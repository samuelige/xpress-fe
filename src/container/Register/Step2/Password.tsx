import FormTitle from '@/_shared/components/Auth/FormTitle'
import CustomPasswordField from '@/_shared/components/CustomPasswordField';
import FormError from '@/_shared/components/FormError';
import { I_Register } from '@/types/onboarding';

import React, { FC, useState } from 'react'

interface PasswordProps {
    values: I_Register;
    errors: Record<string, string>;
    touched: Record<string, string | boolean>;
    setFieldValue: ((field: string, value: any,) => void);
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
}
const Password:FC<PasswordProps> = (props) => {
    const {values, errors, touched, setFieldValue, handleBlur} = props;
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    
  return (
    <div>
        <FormTitle title={"Contact Person Information"}  color={"text-primary-25"}/>
        <div className='flex flex-col space-y-6 mt-4'>
            <div className="w-full">
                <FormTitle title={"Password"} />
                <CustomPasswordField
                    handleBlur={handleBlur}
                    placeholder="Enter password"
                    setFieldValue={(e) => setFieldValue("password", e.target.value)}
                    values={values?.password}
                    className={'mt-2'}
                    name={"password"}
                />
                {touched.password && errors.password && (
                    <FormError message={errors.password} />
                )}
            </div>
            <div className="w-full">
                <FormTitle title={"Confirm Password"} />
                <CustomPasswordField
                    handleBlur={handleBlur}
                    placeholder="Enter confirm password"
                    setFieldValue={(e) => setConfirmPassword(e.target.value)}
                    values={confirmPassword}
                    className={'mt-2'}
                />
                {confirmPassword && values?.password && confirmPassword !== values?.password && (
                    <FormError message={"Confirm password does not match"} />
                )}
            </div>
        </div>
    </div>
  )
}

export default Password