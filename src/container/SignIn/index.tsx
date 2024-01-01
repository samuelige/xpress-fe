"use client"

import AuthLayout from '@/_shared/components/Auth/AuthLayout'
import React from 'react'

import { useFormik } from 'formik';
import FormTitle from '@/_shared/components/Auth/FormTitle';
import { Button, TextField } from '@mui/material';
import FormError from '@/_shared/components/FormError';
import CustomPasswordField from '@/_shared/components/CustomPasswordField';
import { signInValidationSchema } from './validation';

const SignIn = () => {
    
    const onSubmit = async (values: any) => {
        const payload = {
            ...values
        }
        console.log(payload);
    };
    const formik = useFormik({
		initialValues:{
            email: "",
            password: "",
        },
        validationSchema:signInValidationSchema,
		onSubmit: onSubmit,
        
    })
    const {
        values,
        errors,
        setFieldValue,
        handleBlur,
        handleSubmit,
        touched,
        isSubmitting,
        isValid
    } = formik;

  return (
    <>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <AuthLayout
                title={"Welcome Back!"}
                subTitle={"Sign in to your Xpress reward partner’s dashboard"}
            >
                <div className='flex flex-col space-y-8'>
                    <div className="w-full">
                        <FormTitle title={"Contact Email Address"} />
                        <TextField
                            onBlur={handleBlur}
                            fullWidth
                            type="email"
                            placeholder="johndon@gmail.com"
                            onChange={(e) => setFieldValue("email", e.target.value)}
                            value={values?.email}
                            className='mt-2'
                            name={"email"}
                        />
                        {touched.email && errors.email && (
                            <FormError message={errors.email} />
                        )}
                    </div>
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

                        <p className='text-gray-400 text-sm mt-4'>Forget Password? <span className='text-primary-25 cursor-pointer'>Reset it</span></p>

                    </div>
                    <div className='flex flex-row '>
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            fullWidth
                        >
                            Sign In
                        </Button>
                    </div>
                </div>
            </AuthLayout>
            
        </form>
    </>
  )
}

export default SignIn