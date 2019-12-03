import * as React from 'react';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { History, LocationState } from 'history';

interface LoginValues {
    email: string;
    password: string;
}

interface LoginProps {
    history: History<LocationState>;
    initialEmail?: string;
    initialPassword?: string;
}

export const LoginForm = (props: FormikProps<LoginValues>) => {
    const {
        values,
        touched,
        dirty,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: 'block' }}>
                Email
            </label>
            <input
                id="email"
                placeholder="Enter your email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            <label htmlFor="password" style={{ display: 'block' }}>
                Password
            </label>
            <input
                id="password"
                placeholder="Enter your password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >
                Reset
            </button>
            <button
                type="submit"
                disabled={
                    isSubmitting ||
                    !!(errors.email && touched.email) ||
                    !!(errors.password && touched.password)
                }
            >
                Login
            </button>
        </form>
    );
};

const LoginPage = withFormik<LoginProps, LoginValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || '',
        password: props.initialPassword || ''
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Email not valid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    }),

    handleSubmit({ email, password }: LoginValues, { props, setSubmitting, setErrors }) {
        localStorage.setItem('auth', 'true');
        props.history.push('/');
    }
})(LoginForm);

export default LoginPage;
