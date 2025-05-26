import React, { useState, useContext } from 'react';
import InputField from './InputField';
import Button from './Button';
import './FormSection.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Register, Login } from '../utils';
import { UserContext } from '../../Context/UserContext';
import { useSelector,useDispatch } from 'react-redux';
import { setUserId,setemail,setToken,setUserName } from '../../slices/userSlice';

const FormSection = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const isLogin = location.pathname.includes("login");
    const navigate = useNavigate();
    // Update this to use the login function from context
    const { login } = useContext(UserContext);
    const ctx = useContext(UserContext);


    const [fields, setFields] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState("");

    const validateField = (name, value) => {
        if (!value.trim()) return `${name} is required`;

        switch (name) {
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email';
                break;
            case 'password':
                if (value.length < 6) return 'Password must be at least 6 characters';
                break;
            case 'confirmPassword':
                if (!isLogin && value !== fields.password) return "Passwords don't match";
                break;
            default:
                break;
        }

        return '';
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setFields((prev) => ({ ...prev, [name]: value }));
        const errorMsg = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
        setAuthError(""); // Clear auth error on input change
    };

    const validateAllFields = () => {
        const keysToValidate = isLogin
            ? ['username', 'password']
            : ['fullname', 'username', 'email', 'password', 'confirmPassword'];

        const newErrors = {};
        keysToValidate.forEach((key) => {
            const errorMsg = validateField(key, fields[key]);
            if (errorMsg) newErrors[key] = errorMsg;
        });

        setErrors(newErrors);
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const buttonName = e.nativeEvent.submitter.name;
        setLoading(true);
        setAuthError("");

        const validationErrors = validateAllFields();

        if (Object.keys(validationErrors).length === 0) {
            try {
                if (buttonName === 'login') {
                    const url = import.meta.env.VITE_API_URL + '/auth/login';
                    const response = await Login(fields.username, fields.password, url);

                    // Get user data and token from response
                    const userData = response.data.user;
                    const token = response.data.token;

                    console.log("Login success", userData);

                    // Use the login function from context to store everything at once
                    login(userData, token);

                    // Redirect user after login success
                    navigate('/chats');

                } else if (buttonName === 'signup') {
                    const url = import.meta.env.VITE_API_URL + '/auth/register';
                    const payload = {
                        fullName: fields.fullname,
                        username: fields.username,
                        email: fields.email,
                        password: fields.password,
                    };
                    const response = await Register(payload, url);
                    console.log("Register success", response);
                    navigate('/login');
                }
            } catch (err) {
                console.log(err)
                if (err.response) {
                    const { status, data } = err.response;

                    switch (status) {
                        case 400:
                            setAuthError(data.message || "Invalid input. Please try again.");
                            break;
                        case 401:
                            setAuthError("Invalid username or password.");
                            break;
                        case 403:
                            setAuthError("You are not authorized to access this account.");
                            break;
                        case 404:
                            setAuthError("User not found.");
                            break;
                        case 500:
                            setAuthError("Server error. Please try again later.");
                            break;
                        default:
                            setAuthError("Something went wrong. Please try again.");
                    }
                } else {
                    setAuthError("Network error. Please check your connection.");
                }
            }
        }

        setLoading(false);
    };

    // Rest of your component remains the same
    return (
        <form onSubmit={handleSubmit}>
            {!isLogin && (
                <>
                    <InputField
                        label="Full Name"
                        onChange={onChange}
                        inputProperties={{ type: 'text', name: 'fullname', required: true }}
                        value={fields.fullname}
                        error={errors.fullname}
                        className="login-input"
                    />
                    <InputField
                        label="Email"
                        onChange={onChange}
                        inputProperties={{ type: 'text', name: 'email', required: true }}
                        value={fields.email}
                        error={errors.email}
                        className="login-input"
                    />
                </>
            )}

            <InputField
                label={isLogin ? "Username or Email" : "Username"}
                onChange={onChange}
                inputProperties={{ type: 'text', name: 'username', required: true }}
                value={fields.username}
                error={errors.username}
                className="login-input"
            />

            <InputField
                label="Password"
                onChange={onChange}
                inputProperties={{ type: 'password', name: 'password', required: true }}
                value={fields.password}
                error={errors.password}
                className="login-input"
            />

            {!isLogin && (
                <InputField
                    label="Confirm Password"
                    onChange={onChange}
                    inputProperties={{ type: 'password', name: 'confirmPassword', required: true }}
                    value={fields.confirmPassword}
                    error={errors.confirmPassword}
                    className="login-input"
                />
            )}



            <div className="login-btn-container">
                {isLogin ? (
                    <span>New User? <a href="/signup">Signup</a></span>
                ) : (
                    <span>Already a User? <a href="/login">Login</a></span>
                )}

                <Button
                    type="submit"
                    className="login-btn"
                    disabled={Object.values(errors).some((error) => error) || loading}
                    name={isLogin ? "login" : "signup"}
                >
                    {loading ? (
                        <>
                            <span className="spinner" />
                            {/* {isLogin ? "Logging in..." : "Registering..."} */}
                        </>
                    ) : (
                        isLogin ? "Login" : "Register"
                    )}
                </Button>

            </div>
            {authError && <p className="auth-error">{authError}</p>}
        </form>
    );
};

export default FormSection;
