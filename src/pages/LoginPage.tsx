import * as React from 'react';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { History, LocationState } from 'history';
import Button from '@material-ui/core/Button';
import {
    LoginContainer,
    Form,
    CustomButton,
    InputContainer,
    ButtonContainer,
    CustomField
} from '../styles/LoginPage';
import logo from '../images/logo.png';

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
        <LoginContainer>
            <Form onSubmit={handleSubmit}>
                <h1 style={{ textAlign: 'center' }}>Welcome!</h1>
                <img
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        height: '50px',
                        width: '50px'
                    }}
                    src={logo}
                    alt="logo"
                />
                <InputContainer>
                    <CustomField
                        id="email"
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email && touched.email ? true : false}
                        helperText={errors.email && touched.email && errors.email}
                    />
                    <CustomField
                        id="password"
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={errors.email && touched.email ? true : false}
                        helperText={errors.password && touched.password && errors.password}
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >
                        Reset
                    </Button>
                    <CustomButton
                        type="submit"
                        disabled={
                            isSubmitting ||
                            !!(errors.email && touched.email) ||
                            !!(errors.password && touched.password)
                        }
                    >
                        Login
                    </CustomButton>
                </ButtonContainer>
                <p style={{ textAlign: 'center' }}>Don`t have an account? Sign up</p>
            </Form>
        </LoginContainer>
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
