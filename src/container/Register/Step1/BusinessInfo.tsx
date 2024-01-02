import DragAndDropSection from '@/_lib/dropzone';
import { download } from '@/_shared/assets/icons';
import FormTitle from '@/_shared/components/Auth/FormTitle'
import FormError from '@/_shared/components/FormError';
import ImageDetailsCard from '@/_shared/components/ImageDetailsCard';
import { I_Register } from '@/types/onboarding';
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input';
import React, { FC, useState } from 'react'
import { FileWithPath } from "react-dropzone";

interface BusinessInfoProps {
    values: I_Register;
    errors: Record<string, string>;
    touched: Record<string, string | boolean>;
    setFieldValue: ((field: string, value: any,) => void);
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
    next:() => void;
}
const BusinessInfo:FC<BusinessInfoProps> = (props) => {
    const {values, errors, touched, setFieldValue, handleBlur, next} = props;
    const [imageFile, setImageFile] = useState<Record<string, string | any>>({});
    
    const handleDrop = async (acceptedFiles: FileWithPath[]) => {
        setFieldValue("logo", acceptedFiles[0]);
        setImageFile({
          path: acceptedFiles.map((file) => URL.createObjectURL(file)),
          name: acceptedFiles[0].name,
          size: acceptedFiles[0].size,
        });
    };
    const handleFileDialogCancel = () => {
        setImageFile({});
    };
  return (
    <>
        <FormTitle title={"Business Information"}  color={"text-primary-25"}/>
        <div className='flex flex-col space-y-6 mt-4'>
            <div className="w-full">
                <FormTitle title={"Business name"} />
                <TextField
                    onBlur={handleBlur}
                    fullWidth
                    type="text"
                    placeholder="Enter Business name"
                    onChange={(e) => setFieldValue("business_name", e.target.value)}
                    value={values?.business_name}
                    className='mt-2'
                    name={"business_name"}
                />
                {touched.business_name && errors.business_name && (
                    <FormError message={errors.business_name} />
                )}
            </div>
            <div className="w-full">
                <FormTitle title={"Business Email Address"} />
                <TextField
                    onBlur={handleBlur}
                    fullWidth
                    type="email"
                    placeholder="info@polymath.com"
                    onChange={(e) => setFieldValue("business_email", e.target.value)}
                    value={values?.business_email}
                    className='mt-2'
                    name={"business_email"}
                />
                {touched.business_email && errors.business_email && (
                    <FormError message={errors.business_email} />
                )}
            </div>
            <div className="w-full">
                <FormTitle title={"Business Phone Number"} />
                <MuiTelInput
                    fullWidth
                    defaultCountry="NG"
                    onChange={(value: any) => setFieldValue("business_phone_num", value)}
                    onBlur={handleBlur}
                    value={values?.business_phone_num}
                    className='mt-2'
                    name={"business_phone_num"}
                />
                {touched.business_phone_num && errors.business_phone_num && (
                    <FormError message={errors.business_phone_num} />
                )}
            </div>
            <div className="w-full">
                <FormTitle title={"Business Category"} />
                <Select
                    fullWidth
                    onBlur={handleBlur}
                    value={values?.business_category}
                    onChange={(e) => setFieldValue("business_category", e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    className='mt-2'
                    name={"business_category"}
                >
                    <MenuItem value="">
                        <p className="text-base text-black-200">Select category</p>
                    </MenuItem>
                    <MenuItem value={"health"}>Health</MenuItem>
                    <MenuItem value={"beauty"}>Beauty</MenuItem>
                    <MenuItem value={"it_solution"}>IT Solution</MenuItem>
                </Select>
                {touched.business_category && errors.business_category && (
                    <FormError message={errors.business_category} />
                )}
            </div>
            <div className="w-full">
                <FormTitle title={"Account No"} />
                <TextField
                    onBlur={handleBlur}
                    fullWidth
                    type="number"
                    placeholder="Enter Account No"
                    onChange={(e) => setFieldValue("acct_number", e.target.value)}
                    value={values?.acct_number}
                    name={"acct_number"}
                    className='mt-2'
                />
                {touched.acct_number && errors.acct_number && (
                    <FormError message={errors.acct_number} />
                )}
            </div>
            <div className="w-full">
                <FormTitle title={"Image (Logo)"} />
                <DragAndDropSection
                    height={"12.75rem"}
                    accept={".jpg"}
                    onDrop={handleDrop}
                    onFileDialogCancel={handleFileDialogCancel}
                    acceptanceText={"Maximum upload size: 10MB (.jpg)"}
                    emptyState={download}
                    emptyStateSize={{ width: 40, height: 36 }}
                    hideOnDropValue={true}
                />

                {imageFile.hasOwnProperty("path") &&
                    imageFile.hasOwnProperty("name") &&
                    imageFile.hasOwnProperty("size") && (
                    <ImageDetailsCard
                        image={imageFile.path[0]}
                        name={imageFile.name}
                        size={imageFile.size}
                    />
                )}
                
            </div>
        </div>
        <div className='flex flex-row space-x-[0.94rem] items-center mt-10'>
            <Button
                variant="contained"
                type="button"
                onClick={next}
                className="[&.MuiButtonBase-root]:w-[11.5625rem] [&.MuiButtonBase-root]:h-[3.5rem]"
                disabled={
                    !values.business_name || !values.business_email || !values.business_phone_num || !values.business_category || !values.acct_number
                }
            >
                Next
            </Button>
            <p>Step 1 of 2</p>
        </div>
    </>
  )
}

export default BusinessInfo