import React from 'react'
import ChevronDown from '../assets/icons/Chevron-down.svg?react'
import AngleUp from '../assets/icons/Angle-up.svg?react'
import { UserPickProps } from '../types'

export function UserPick({ onClick, isOpen, infoAboutUser }: UserPickProps): React.ReactElement {

    const userName = infoAboutUser?.username || 'Иван Сорокин'
    const initials = userName
        .split(' ')
        .map((name) => name.charAt(0).toUpperCase())
        .join('')
        .slice(0, 2)

    return (
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-pointer group">
            <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
                <span className="text-xs font-bold text-white tracking-wide">{initials}</span>
            </div>

            <div className="flex-1 min-w-0">
                <span className="text-sm font-semibold text-white/90 truncate block group-hover:text-white transition-colors duration-200">
                    {userName}
                </span>
            </div>

            <button
                type="button"
                onClick={onClick}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5"
            >
                {isOpen ? <AngleUp width={16} height={16} fill='white' /> : <ChevronDown width={16} height={16} fill='white' />}
            </button>
        </div>
    )
}