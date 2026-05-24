import React from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from './Button'
import { FormField } from './FormField'
import { Title } from './Title'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormSignInValues } from '../types'
import { useAppDispatch } from '../redux/store'
import { fetchSignIn } from '../redux/auth-slice'

export function FormSignIn(): React.ReactElement {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<FormSignInValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    function renderAlert(text: string | undefined): React.ReactElement {
        return (
            <div className="text-xs mt-2 text-red-400">{text}</div>
        )
    }

    const onSubmit: SubmitHandler<FormSignInValues> = async (data: FormSignInValues) => {
        try {
            await dispatch(fetchSignIn(data)).unwrap()
            navigate('/films')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Title className="text-xl text-center mb-5 text-white" title="Войти" />
            <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FormField
                        type="email"
                        id="email"
                        label="Email"
                        placeholder="Ваш email..."
                        className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white mt-1"
                        classNameForLabel="text-sm text-white"
                        {...register('email', {
                            minLength: { value: 10, message: 'Email должен быть не короче 10 символов' },
                            maxLength: { value: 40, message: 'Email не должен превышать 40 символов' },
                            required: 'Email обязателен для заполнения'
                        })}
                    />
                    {errors.email && renderAlert(errors.email.message)}
                </div>

                <div className="mt-2">
                    <FormField
                        type="password"
                        id="password"
                        label="Пароль"
                        placeholder="Ваш пароль..."
                        className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white mt-1"
                        classNameForLabel="text-sm text-white"
                        {...register('password', {
                            minLength: { value: 5, message: 'Пароль должен быть не короче 5 символов' },
                            maxLength: { value: 20, message: 'Пароль не должен превышать 20 символов' },
                            required: 'Пароль  обязателен для заполнения'
                        })}
                    />
                    {errors.password && renderAlert(errors.password.message)}
                </div>
                <Button
                    className="w-full bg-blue-500 py-2 rounded-xl text-white font-semibold mb-5 mt-7"
                    text="Войти" />
                <p className="text-center text-sm text-white">
                    Нет аккаунта?
                    <Link to="/auth/sign-up" className=" ml-2 text-blue-600 font-semibold hover:underline">
                        Зарегистрироваться
                    </Link>
                </p>
            </form>
        </>
    )
}