import FormTitle from '@/_shared/components/Auth/FormTitle'
import FormError from '@/_shared/components/FormError';
import { I_Register } from '@/types/onboarding';
import { TextField } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input';

import React, { FC } from 'react'

interface ContactInfoProps {
    values: I_Register;
    errors: Record<string, string>;
    touched: Record<string, string | boolean>;
    setFieldValue: ((field: string, value: any,) => void);
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
}
const ContactInfo:FC<ContactInfoProps> = (props) => {
    const {values, errors, touched, setFieldValue, handleBlur} = props;
  return (
    <div>
        <FormTitle title={"Contact Person Information"}  color={"text-primary-25"}/>
        <div className='flex flex-col space-y-6 mt-4'>
        <div className="w-full">
                <FormTitle title={"Contact Name"} />
                <TextField
                    onBlur={handleBlur}
                    fullWidth
                    type="text"
                    placeholder="Enter contact name"
                    onChange={(e) => setFieldValue("contact_name", e.target.value)}
                    value={values?.contact_name}
                    className='mt-2'
                    name={"contact_name"}
                />
                {touched.contact_name && errors.contact_name && (
                    <FormError message={errors.contact_name} />
                )}
            </div>
            <div className="w-full">
                <FormTitle title={"Contact Phone Number"} />
                <MuiTelInput
                    fullWidth
                    defaultCountry="NG"
                    onChange={(value: any) => setFieldValue("contact_phone", value)}
                    onBlur={handleBlur}
                    value={values?.contact_phone}
                    className='mt-2'
                    name={"contact_phone"}
                />
                {touched.contact_phone && errors.contact_phone && (
                    <FormError message={errors.contact_phone} />
                )}
            </div>
            <div className="w-full">
                <FormTitle title={"Contact Email Address"} />
                <TextField
                    onBlur={handleBlur}
                    fullWidth
                    type="email"
                    placeholder="johndon@gmail.com"
                    onChange={(e) => setFieldValue("contact_email", e.target.value)}
                    value={values?.contact_email}
                    className='mt-2'
                    name={"contact_email"}
                />
                {touched?.contact_email && errors.contact_email && (
                    <FormError message={errors.contact_email} />
                )}
            </div>
            
        </div>
    </div>
  )
}

export default ContactInfo