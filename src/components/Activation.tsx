import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../redux/store'
import { useParams, Link } from 'react-router'
import { activateUser } from '../redux/auth-slice'
import { Title } from './Title'
import { RequestStatus } from '../types'


export function Activation(): React.ReactElement {
    const { uid, token } = useParams()
    const dispatch = useAppDispatch()
    const [status, setStatus] = useState<RequestStatus>('idle')

    useEffect(() => {
        if (!uid || !token) return

        const activate = async () => {
            setStatus('loading')
            try {
                await dispatch(activateUser({ uid, token })).unwrap()
                setStatus('success')
            } catch (error) {
                setStatus('error')
            }
        }

        activate()
    }, [uid, token, dispatch])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="text-center max-w-md w-full">
                <Title title="Активация аккаунта" className="text-2xl font-bold text-white mb-4" />

                {status === 'idle' && (
                    <p className="text-gray-300">Обработка запроса...</p>
                )}

                {status === 'loading' && (
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-300">Активация в процессе...</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">Аккаунт успешно активирован!</h3>
                        <p className="text-gray-300">
                            Теперь вы можете войти в систему.
                        </p>
                        <Link to='/auth/sign-in' className="text-blue-600 font-semibold hover:underline mt-2">
                            Войти
                        </Link>
                    </div>
                )}

                {status === 'error' && (
                    <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">Ошибка активации</h3>
                        <p className="text-gray-300">
                            Ссылка недействительна или срок её действия истёк.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}