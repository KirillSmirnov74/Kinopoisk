import { Link } from "react-router";
import { Button } from "./Button";
import { FormField } from "./FormField";
import { Island } from "./Island";
import { Title } from "./Title";
export function FormSignUp() {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <Island>
                <Title className="text-xl text-center mb-5 text-white" title="Sign Up" />
                <form>
                    <div>
                        <FormField type="text" id="name" label="Name" placeholder="Your Name" />
                    </div>
                    <div className="mt-2">
                        <FormField type="email" id="email" label="Email" placeholder="Your email" />
                    </div>
                    <div className="mt-2">
                        <FormField type="password" id="password" label="Password" placeholder="Your password" />
                    </div>

                    <div className="mt-2">
                        <FormField type="password" id="ConfirmPassword" label="ConfirmPassword" placeholder="Confirm password" />
                    </div>
                </form>
                <Button className="w-full bg-blue-500 py-2 rounded-xl text-white font-semibold mb-5 mt-8" text="Sign up" />
                <p className="text-center text-sm text-white">
                    Already have an account?
                    <Link to='/auth/sign-in' className="text-blue-600 font-semibold hover:underline">
                        Sign in
                    </Link>
                </p>
            </Island >
        </div>
    )
}