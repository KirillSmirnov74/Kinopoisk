import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { logoutUser } from '../redux/auth-slice'
import { Button } from './Button'

interface CollapseProps {
    onCloseCollapse?: () => void
}

export function Collapse({ onCloseCollapse }: CollapseProps): React.ReactElement {
    const isAuthorised = useAppSelector((store) => store.auth.jwt) !== null
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function handleLogout() {
        dispatch(logoutUser())
        navigate('/films')
        onCloseCollapse?.()
        localStorage.removeItem('jwt')
    }

    return (
        <div className="absolute right-2 top-full mt-2 w-56 
                        bg-gray-900/95 backdrop-blur-xl 
                        border border-white/10 
                        rounded-xl shadow-2xl 
                        overflow-hidden z-50">

            <nav className="flex flex-col p-1.5" onClick={onCloseCollapse}>
                {!isAuthorised
                    ? (<Link
                        to="/auth/sign-in"
                        className="flex items-center gap-2.5 px-3.5 py-2.5 
                             text-sm font-medium text-gray-200 
                             hover:text-white hover:bg-white/10 
                             rounded-lg transition-all duration-200"
                    >
                        Войти
                    </Link>)
                    : (<Button
                        type="button"
                        text="Выйти"
                        className="flex items-center gap-2.5 px-3.5 py-2.5 
                             text-sm font-medium text-gray-200 
                             hover:text-white hover:bg-red-500/20 hover:text-red-400
                             rounded-lg transition-all duration-200 w-full text-left"
                        onClick={handleLogout}
                    />)
                }
            </nav>
        </div>
    );
}