import React, { useState } from 'react';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { History, LocationState } from 'history';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
    LoginContainer,
    Form,
    CustomButton,
    InputContainer,
    ButtonContainer,
    ResetContainer,
    CustomField
} from '../styles/LoginPage';
import logo from '../images/logo.png';

interface LoginValues {
    email: string;
    password: string;
    showPassword: boolean;
}

interface State {
    showPassword: boolean;
}

interface LoginProps {
    history: History<LocationState>;
    initialEmail?: string;
    initialPassword?: string;
    initShowPassword?: boolean;
}
export const MyInnerForm: React.FC<State & FormikProps<LoginValues>> = props => {
    const [showPassword, setShowPassword] = useState(false);

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

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

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
                        placeholder="Enter your email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email && touched.email ? true : false}
                        helperText={errors.email && touched.email && errors.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PermIdentityIcon></PermIdentityIcon>
                                </InputAdornment>
                            )
                        }}
                    />
                    <CustomField
                        id="password"
                        placeholder="Enter your password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={errors.email && touched.email ? true : false}
                        helperText={errors.password && touched.password && errors.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon></LockIcon>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <ResetContainer>
                        <span>Forgot password ?</span>
                    </ResetContainer>
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

const LoginPage = withFormik<State & LoginProps, LoginValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || '',
        password: props.initialPassword || '',
        showPassword: props.initShowPassword || false
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
})(MyInnerForm);

export default LoginPage;
