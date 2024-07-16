"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react"
export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passStatus, setPassStatus] = useState(false)
    const [logStatus, setLogStatus] = useState('')
    const handleForm = async (data) => {
        const { email, password } = data;
        const resp = await signIn("credentials", {
            email,
            password,
            redirect: true,
            // callbackUrl: path ? path : "/",
        });
        console.log(resp);
    }
    return (
        <div className="w-full lg:max-w-[600px] mx-auto px-4 lg:px-0 mt-12 font-poppins">
            <div className="flex items-center justify-center h-auto lg:h-[calc(100dvh-90px)] ">
                <div className="flex flex-col items-center w-full border p-12 shadow-lg">
                    <div className="space-y-7 flex items-center flex-col w-full">
                        <h1 className="text-primary text-3xl font-bold">Log In</h1>
                        <p className="text-primary text-center text-sm font-medium">Login to access your account</p>
                        <form onSubmit={handleSubmit(handleForm)} className="space-y-4 w-full">
                            <div className=" mb-8 flex flex-col gap-4">
                                <div className="w-full">
                                    <input {...register('email')} type="email" placeholder="Your email here" className="input bg-[#F5F9FE] w-full p-7 rounded-none" />
                                </div>
                                <div className="w-full space-y-2">
                                    <label className="input flex items-center gap-2 bg-[#F5F9FE] p-7 rounded-none">
                                        <input {...register('password')} type={passStatus ? "text" : "password"} className="grow w-full" placeholder="••••••••" />
                                        {
                                            passStatus ? <FaRegEye className="text-2xl hover:cursor-pointer" onClick={() => setPassStatus(!passStatus)} /> : <FaRegEyeSlash className="text-2xl hover:cursor-pointer" onClick={() => setPassStatus(!passStatus)} />
                                        }
                                    </label>
                                    <div className="flex justify-end">
                                        <span className=" text-[#7C8BA0] mr-3 text-sm">Forget Password?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <button type="submit" class="relative inline-flex items-center justify-center w-full px-12 py-3 overflow-hidden text-lg font-medium text-primary border-2 border-primary hover:text-white group hover:bg-gray-50">
                                    <span class="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative">Login</span>
                                </button>
                            </div>
                            <p className="text-sm">Don’t have account? <Link href="/register" className="text-[#3461FD]">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
