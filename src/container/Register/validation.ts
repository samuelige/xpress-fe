import { Yup } from '@/_lib/yup';
import { AnySchema } from 'yup';

export const registerValidationSchema = (): AnySchema => {
    return Yup.object({
        business_name: Yup.string()
            .trim()
            .required('Business name required')
            .max(50, 'Too many symbols'),
        business_email: Yup.string()
            .email()
            .extEmail('Invalid email format')
            .required('Business email address is required'),
        business_phone_num: Yup.string()
            .extMobilePhone('Invalid phone number')
            .nullable(),
        business_category: Yup.string()
            .required('Business category is required'),
        acct_number: Yup.string()
            .required('Account number is required'),
        // logo: Yup.string()
        //     .required('Logo is required'),
        house_num: Yup.string()
            .required('House number is required'),
        street: Yup.string()
            .required('Street is required'),
        city: Yup.string()
            .required('City is required'),
        state: Yup.string()
            .required('State is required'),
        contact_name: Yup.string()
            .required('Contact name is required'),
        contact_phone: Yup.string()
            .extMobilePhone('Invalid contact phone number')
            .nullable(),
        contact_email: Yup.string()
            .email()
            .extEmail('Invalid email format')
            .required('Contact email  address is required'),
        password: Yup
            .string()
            .required('Password is required')
            .min(8, "Your password must be longer than 8 characters.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    });
};
