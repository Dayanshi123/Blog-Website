import React, { useState } from 'react'
import authSerice from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Logo, Input, Button } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authSerice.createAccount(data);
            if (userData) {
                const currentUserData = await authSerice.getCurrentUser();
                if (currentUserData) {
                    dispatch(login(currentUserData));
                }
                navigate("/")
            }
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-lg bg-[#F5F5DC] text-[#8B4513] rounded-xl p-10 border border-[#8B4513]/30">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width='100%' />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight text-[#8B4513]">
                    Sign up to create an account!
                </h2>
                <p className="mt-2 text-center text-base text-[#8B4513]/80">
                    Already have an account?&nbsp;
                    <Link to="/login"
                        className='font-medium text-[#8B4513] transition-all duration-200 hover:underline'>
                        Login
                    </Link>
                </p>
                {error && <p className="text-red-500">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input label='Full Name: '
                            placeholder='Enter your full name'
                            className="bg-[#FAF0E6] text-[#8B4513]"
                            {...register("name", {
                                required: true,
                            })} />
                        <Input label='Email: '
                            placeholder='Enter your email'
                            className="bg-[#FAF0E6] text-[#8B4513]"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })} />
                        <Input label='Password: '
                            placeholder='Enter your password'
                            className="bg-[#FAF0E6] text-[#8B4513]"
                            {...register("password", {
                                required: true,
                            })} />
                        <Button type="submit" className='w-full bg-[#8B4513] text-white hover:bg-[#A0522D]'>
                            Create Account!
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Signup;
