import React from 'react'
import { PosterLProps } from '../types'

export function PosterL({ posterUrl }: PosterLProps): React.ReactElement {
    return (
        <div className="w-80 flex-shrink-0">
            <img
                className="w-full h-auto object-cover rounded-2xl shadow-2xl/50 border border-gray-700/50"
                src={posterUrl}
            />
        </div>
    )
}