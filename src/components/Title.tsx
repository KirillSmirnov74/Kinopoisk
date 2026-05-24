import React from "react"
import { TitleProps } from "../types"

export function Title({ title, className }: TitleProps): React.ReactElement {
    return (
        <h1 className={className}>{title}</h1>
    )
}