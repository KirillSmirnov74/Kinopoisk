import React from 'react'
import { FormSignUp } from '../components/FormSignUp'
import { Island } from '../components/Island'


export function SignUp(): React.ReactElement {

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <Island>
                <FormSignUp />
            </Island>
        </div>
    )
}