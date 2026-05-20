import { Link } from "react-router";
import { Button } from "./Button";
import { FormField } from "./FormField";
import { Island } from "./Island";
import { Title } from "./Title";


export function FormSignIn() {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <Island>
                <Title className="text-xl text-center mb-5 text-white" title="Sign in" />
                <form className="mb-2">
                    <div>
                        <FormField
                            type="email"
                            id="email"
                            label="Email"
                            placeholder="Your email"
                            className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white" />
                    </div>
                    <div className="mt-2">
                        <FormField
                            type="password"
                            id="password"
                            label="Password"
                            placeholder="Your password"
                            className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white" />
                    </div>
                </form>
                <a className=" block text-xs mb-6 mt-3 text-gray-400">Forgot password?</a>
                <Button className="w-full bg-blue-500 py-2 rounded-xl text-white font-semibold mb-5" text="Sign in" />
                <p className="text-center text-sm text-white">
                    Don't have an account?
                    <Link to='/auth/sign-up' className="text-blue-600 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </Island >
        </div>
    )
}