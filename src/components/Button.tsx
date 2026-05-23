import React from 'react'
import { ButtonProps } from '../types'

export function Button({ type, className, text, onClick }: ButtonProps): React.ReactElement {
    return (
        <button type={type} onClick={onClick} className={className}>{text}</button>
    )
}