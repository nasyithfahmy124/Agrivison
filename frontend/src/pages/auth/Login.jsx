import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/auth";
import {
    FiMail,
} from "react-icons/fi";

import AuthContainer from "../../components/auth/AuthContainer";
import AuthBranding from "../../components/auth/AuthBranding";
import PasswordInput from "../../components/auth/PasswordInput";
import GoogleButton from "../../components/auth/GoogleButton";

export default function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] =
    useState(false);

    const [username, setUsername] =
    useState("");

    const [password, setPassword] =
    useState("");

    const [error, setError] =
    useState("");


    const handleSubmit = async (
    e
    ) => {
    e.preventDefault();

    try {
        setLoading(true);

        await authApi.login(
        username,
        password
        );

        navigate("/");
    } catch (err) {
        console.error(err);

        setError(
        "Invalid credentials"
        );
    } finally {
        setLoading(false);
    }
    };
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -20,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            className="w-full max-w-6xl">
            <AuthContainer branding={<AuthBranding />}>
                <div
                    className=" flex flex-col justify-center p-10 lg:p-16">

                    <div className="absolute -top-16 -left-20 h-70 w-70 rounded-full bg-emerald-400/20 blur-3xl" />
                    <div className="absolute top-0 left-20 h-62 w-62 rounded-full bg-green-200/20 blur-3xl"/>
                    <div className="relative">
                        <div className="relative z-10">

                            <h1 className="text-4xl font-bold text-emerald-700">
                                <span className="text-black">Agri</span>Wisdom
                            </h1>

                            <h2 className="mt-2 text-3xl font-semibold">
                                Welcome Back
                            </h2>

                            <p className="mt-3 text-slate-500">
                                Sign in to continue managing
                                your agricultural insights.
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Username
                            </label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                                <input type="text" value={username} onChange={(e) => setUsername( e.target.value)} placeholder="Enter username" className="w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"/>
                            </div>
                        </div>
                        <PasswordInput alue={password} onChange={(e) => setPassword( e.target.value )}/>
                        {error && (
                        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600" >
                            {error}
                        </div>
                        )}
                        <button type="submit" disabled={loading} className="w-full rounded-xl bg-emerald-700 py-3 font-medium text-white hover:bg-emerald-800">
                             {loading ? "Signing In..." : "Sign In"}
                        </button>
                        <GoogleButton />
                    </form>
                    
                    <p className=" mt-8 text-center text-sm text-slate-500">
                        Don't have an account?
                        <Link to="/register" className="ml-1 font-medium text-emerald-700">
                            Register
                        </Link>
                    </p>

                </div>
            </AuthContainer>
        </motion.div>
    );
}