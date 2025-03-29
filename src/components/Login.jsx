import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice.js';
import authSerice from '../appwrite/auth.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Input, Logo, Button } from './index.js';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const startLogin = await authSerice.login(data);
            // Login start ho gya
            if (startLogin) {
                const user = await authSerice.getCurrentUser();
                if (user) {
                    dispatch(authLogin(user));
                }
                navigate("/");
            }
        }
        catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='flex items-center justify-center w-full'>
            <div className="mx-auto w-full max-w-lg bg-[#F5F5DC] text-[#8B4513] rounded-xl p-10 border border-[#8B4513]/30">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight text-[#8B4513]">
                    Login to Your Account!
                </h2>
                <p className="mt-2 text-center text-base text-[#8B4513]/80">
                    Don&apos;t have an account?&nbsp;
                    <Link to={'/signup'}
                        className="font-medium text-[#8B4513] transition-all duration-200 hover:underline">
                        Sign up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder='Enter your Email'
                            type="email"
                            className="bg-[#FAF0E6] text-[#8B4513]" // Light beige input field
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            placeholder='Enter your Password'
                            type="password"
                            className="bg-[#FAF0E6] text-[#8B4513]"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className='w-full bg-[#8B4513] text-white hover:bg-[#A0522D]'>
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
