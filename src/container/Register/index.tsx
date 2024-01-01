import AuthLayout from '@/_shared/components/Auth/AuthLayout'
import React, { useContext, useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import { useFormik } from 'formik';
import AppContext from '@/_lib/contextApi';
import RegisterSuccessModal from '../Modal/RegisterSuccessModal';
import { registerValidationSchema } from './validation';

const Register = () => {
    const [steps, setSteps] = useState<number>(0);
    const { setToggleRegisterSuccessModal} =
    useContext(AppContext);
    
    const onSubmit = async (values: any) => {
        const payload = {
            ...values
        }
        console.log(payload);
        setSteps(0)
        
        setToggleRegisterSuccessModal(true);
    };
    const formik = useFormik({
		initialValues:{
            business_name: "",
            business_email: "",
            business_phone_num: "",
            business_category: "",
            acct_number: "",
            logo: "",
            house_num: "",
            street: "",
            city: "",
            state: "",
            contact_name: "",
            contact_phone: "",
            contact_email: "",
            password: "",
        },
        validationSchema:registerValidationSchema,
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
                title={"Welcome to Xpress Rewards"}
                subTitle={"Complete the form below to get started"}
            >
                {
                    steps === 0 && (
                        <Step1
                            values={values}
                            errors={errors}
                            setFieldValue={setFieldValue}
                            handleBlur={handleBlur}
                            touched={touched}
                            next={() => setSteps(1)}
                        />
                    )
                }

                {
                    steps === 1 && (
                        <Step2
                            values={values}
                            errors={errors}
                            setFieldValue={setFieldValue}
                            handleBlur={handleBlur}
                            touched={touched}
                            isValid={isValid}
                            isSubmitting={isSubmitting}
                            close={() => setSteps(0)}
                        />
                    )
                }
            </AuthLayout>
            
        </form>
        <RegisterSuccessModal/>
    </>
  )
}

export default Register