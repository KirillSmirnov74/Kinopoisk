import React from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from './Button'
import { FormField } from './FormField'
import { Title } from './Title'
import { SubmitHandler, useForm } from "react-hook-form"
import { FormSignUpValues } from '../types'
import { useAppDispatch } from '../redux/store'
import { fetchSignUp } from '../redux/auth-slice'


export function FormSignUp(): React.ReactElement {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<FormSignUpValues>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const password = watch('password')

    function renderAlert(text: string | undefined): React.ReactElement {
        return (
            <div className="text-xs mt-2 text-red-400">{text}</div>
        )
    }

    const onSubmit: SubmitHandler<FormSignUpValues> = async (data) => {
        try {
            await dispatch(fetchSignUp(data)).unwrap()
            reset()
            navigate('/auth/activate/link-parser')

        } catch (error) {
            console.log('Ошибка')
        }
    }

    return (
        <>
            <Title className="text-xl text-center mb-5 text-white" title="Регистрация" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FormField
                        type="text"
                        id="name"
                        label="Имя"
                        placeholder="Ваше имя"
                        className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white mb-1 mt-1.5"
                        classNameForLabel="text-sm text-white"
                        {...register('username', {
                            minLength: { value: 5, message: 'Имя должно превышать 5 символов' },
                            maxLength: { value: 30, message: 'Имя не должно превышать 30 символов' },
                            required: 'Имя обязательно для заполнения'
                        })}
                    />
                    {errors.username && renderAlert(errors.username.message)}
                </div>

                <div className="mt-2">
                    <FormField
                        type="email"
                        id="email"
                        label="Email"
                        placeholder="ваш email"
                        className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white mb-1 mt-1.5"
                        classNameForLabel="text-sm text-white"
                        {...register('email', {
                            required: 'Email обязателен для заполнения',
                        })}
                    />
                    {errors.email && renderAlert(errors.email.message)}
                </div>

                <div className="mt-2">
                    <FormField
                        type="password"
                        id="password"
                        label="Пароль"
                        placeholder="Ваш пароль"
                        className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white mb-1 mt-1.5"
                        classNameForLabel="text-sm text-white"
                        {...register('password', {
                            required: 'Пароль обязателен для заполнения',
                            minLength: { value: 6, message: 'Пароль должен быть не менее 6 символов' },
                            maxLength: { value: 30, message: 'Пароль не должен превышать 30 символов' },
                        })}
                    />
                    {errors.password && renderAlert(errors.password.message)}
                </div>

                <div className="mt-2">
                    <FormField
                        type="password"
                        id="confirmPassword"
                        label="Подтверждение пароля"
                        placeholder="Подтвердите пароль"
                        className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white mt-1.5"
                        classNameForLabel="text-sm text-white"
                        {...register('confirmPassword', {
                            required: 'Подтверждение пароля обязательно',
                            validate: (value) => value === password || 'Пароли не совпадают'
                        })}
                    />
                    {errors.confirmPassword && renderAlert(errors.confirmPassword.message)}
                </div>

                <Button
                    className="w-full bg-blue-500 py-2 rounded-xl text-white font-semibold mb-5 mt-8"
                    text="Зарегистрироваться" />
            </form>

            <p className="text-center text-sm text-white">
                Уже есть аккаунт?
                <Link to="/auth/sign-in" className="text-blue-600 font-semibold hover:underline ml-2">
                    Войти
                </Link>
            </p>
        </>
    )
}