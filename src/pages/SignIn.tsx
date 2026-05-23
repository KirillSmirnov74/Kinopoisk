import React from "react";
import { FormSignIn } from '../components/FormSignIn'
import { Island } from '../components/Island'

export function SignIn(): React.ReactElement {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <Island>
                <FormSignIn />
            </Island>
        </div>
    )
}
