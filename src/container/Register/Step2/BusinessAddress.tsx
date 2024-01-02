import FormTitle from '@/_shared/components/Auth/FormTitle'
import FormError from '@/_shared/components/FormError';
import { I_Register } from '@/types/onboarding';
import { MenuItem, Select, TextField } from '@mui/material'

import React, { FC } from 'react'

interface BusinessAddressProps {
    values: I_Register;
    errors: Record<string, string>;
    touched: Record<string, string | boolean>;
    setFieldValue: ((field: string, value: any,) => void);
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
}
const BusinessAddress:FC<BusinessAddressProps> = (props) => {
    const {values, errors, touched, setFieldValue, handleBlur} = props;
  return (
    <div>
        <FormTitle title={"Business Address"}  color={"text-primary-25"}/>
        <div className='flex flex-col space-y-6 mt-4'>
            <div className="w-full flex flex-row items-center gap-4">
                <div className="w-2/5">
                    <FormTitle title={"House Number"} />
                    <TextField
                        onBlur={handleBlur}
                        fullWidth
                        type="number"
                        placeholder="Enter number"
                        onChange={(e) => setFieldValue("house_num", e.target.value)}
                        value={values?.house_num}
                        className='mt-2'
                        name={"house_num"}
                    />
                    {touched.house_num && errors.house_num && (
                        <FormError message={errors.house_num} />
                    )}
                </div>

                <div className="w-3/5">
                    <FormTitle title={"Street"} />
                    <TextField
                        onBlur={handleBlur}
                        fullWidth
                        type="text"
                        placeholder="Enter street"
                        onChange={(e) => setFieldValue("street", e.target.value)}
                        value={values?.street}
                        className='mt-2'
                        name={"street"}
                    />
                    {touched.street && errors.street && (
                        <FormError message={errors.street} />
                    )}
                </div>
            </div>
            <div className="w-full flex flex-row items-center gap-4">
                <div className="w-2/4">
                    <FormTitle title={"City"} />
                    <TextField
                        onBlur={handleBlur}
                        fullWidth
                        type="text"
                        placeholder="Enter city"
                        onChange={(e) => setFieldValue("city", e.target.value)}
                        value={values?.city}
                        className='mt-2'
                        name={"city"}
                    />
                    {touched.city && errors.city && (
                        <FormError message={errors.city} />
                    )}
                </div>

                <div className="w-2/4">
                    <FormTitle title={"State"} />
                    <Select
                        fullWidth
                        onBlur={handleBlur}
                        value={values?.state}
                        onChange={(e) => setFieldValue("state", e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className='mt-2'
                        name={"state"}
                    >
                        <MenuItem value="">
                            <p className="text-base text-black-200">Select state</p>
                        </MenuItem>
                        <MenuItem value={"Lagos"}>Lagos</MenuItem>
                        <MenuItem value={"Oyo"}>Oyo</MenuItem>
                        <MenuItem value={"Ogun"}>Ogun</MenuItem>
                    </Select>
                    {touched.state && errors.state && (
                        <FormError message={errors.state} />
                    )}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default BusinessAddress