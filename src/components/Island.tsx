import React from 'react'
import { IslandProps } from '../types'

export function Island({ children }: IslandProps): React.ReactElement {
    return (
        <div className="w-full max-w-md p-8 bg-gray-600 rounded-xl shadow-lg">
            {children}
        </div>
    )
}