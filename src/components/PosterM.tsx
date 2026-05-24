import React from 'react'
import { PosterMProps } from '../types'

export function PosterM({ posterUrl }: PosterMProps): React.ReactElement {
    return (
        <div className="mb-2">
            <img
                className="w-full h-80 object-contain rounded-lg"
                src={posterUrl}
                alt="Movie poster"
            />
        </div>
    )
}