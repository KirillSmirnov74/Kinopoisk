import React from "react"

export function Title({ title, className }: { title: string | null, className: string }): React.ReactElement {
    return (
        <h1 className={className}>{title}</h1>
    )
}