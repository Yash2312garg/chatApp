import React, { useState, useContext } from 'react'
import { Register } from './utils';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Signup.css"
import "../App.css";
import { UserContext } from '../Context/UserContext';


function Signup() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); //
    const [login, setlogin] = useState(false);
    // const [response,setResponse] = useState(null)
    const { setUserName, setId } = useContext(UserContext)
    const location = useLocation()
    const navigate = useNavigate();  // For redirecting to a new path

    console.log(location)
    async function register(ev) {
        ev.preventDefault();
        const url = location?.pathname.includes("login") ? "http://localhost:4000/login" : "http://localhost:4000/register";
        const response = await Register(username.trim(), password.trim(), url)
        setUserName(username.trim())
        console.log(response)
        setId(response.data.id)
        if (response.status === 201) { // Check if the status code indicates success
            navigate("/chats"); // Redirect to the chats app
        }

    }

    const handleRedirect = () => {
        // If the current path includes "login", navigate to signup
        if (location?.pathname.includes("login")) {
            navigate("/signup");
        } else {
            // Otherwise, navigate to login
            navigate("/login");
        }
    };

    return (
        <div className='bg-gray-100 w-screen h-screen flex justify-center items-center relative '>
            <div className='bg-white w-[90vw] md:w-[70vw] lg:w-[60vw] h-[90vh] md:h-[80vh] rounded-lg shadow-lg flex flex-col md:flex-row p-4 md:p-8'>

                {/* Left Side (Welcome Section) - Hidden on small screens */}
                <div className='hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 w-full md:w-[75%] h-full text-center text-white rounded-t-lg md:rounded-l-lg md:rounded-tr-none p-8'>
                    {/* Dynamic Heading */}
                    <span className='text-3xl md:text-4xl font-bold mb-4'>
                        {location?.pathname.includes("login") ? 'Welcome Back!' : 'Join Digital Chat'}
                    </span>

                    {/* Dynamic Description */}
                    <span className='text-sm md:text-lg text-center font-light'>
                        {location?.pathname.includes("login")
                            ? 'Login to continue your conversations and connect with friends.'
                            : 'Share your smile with the world and make new friends by signing up today.'}
                    </span>
                </div>

                {/* Right Side (Form Section) */}
                <div className='flex-col flex justify-center items-center w-full md:w-[60%] h-full gap-4 md:gap-6 p-4 md:p-8 z-999'>
                    <div className='text-2xl md:text-3xl font-semibold text-gray-800'>
                        {location?.pathname.includes("login") ? 'Login Here' : 'Signup Here'}
                    </div>
                    <form className='flex-col flex gap-4 md:gap-6 w-full'>

                        {/* Username Input */}
                        <div className='flex-col flex gap-2'>
                            <label htmlFor="username" className='text-sm md:text-lg font-medium text-gray-700'>Username</label>
                            <input
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                type="text"
                                name="username"
                                id="username"
                                placeholder='Enter Username...'
                            />
                        </div>

                        {/* Password Input */}
                        <div className='flex-col flex gap-2'>
                            <label htmlFor="password" className='text-sm md:text-lg font-medium text-gray-700'>Password</label>
                            <div className="relative w-full">
                                <input
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none w-full"
                                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                    name="password"
                                    id="password"
                                    placeholder='Enter Password...'
                                />

                                {/* Toggle Show/Hide Button */}
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? 'Hide' : 'Show'} {/* Change label dynamically */}
                                </button>
                            </div>
                        </div>
                        {location?.pathname.includes("login") && <div className='flex-col flex gap-2 flex-end w-full'>
                            <button className='text-green-600 text-sm'>Reset Password ?</button>
                        </div>}

                        {/* Button */}
                        <button
                            disabled={password.trim() === "" || username.trim() === ""}
                            onClick={register}
                            className='text-base md:text-lg font-medium w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-300 ease-out transform hover:scale-105'>
                            {location?.pathname.includes("login") ? 'Login' : 'Register'}
                        </button>
                    </form>

                    {/* Toggle between Login/Signup */}
                    <div className='flex gap-2 text-sm font-medium text-gray-600'>
                        <span>{location?.pathname.includes("login") ? 'New user?' : 'Already a member?'}</span>
                        <button
                            onClick={handleRedirect}
                            className='text-green-600 hover:underline'>
                            {location?.pathname.includes("login") ? 'Register' : 'Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup
