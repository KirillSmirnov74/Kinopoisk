import React from "react"
import { InfoFieldProps } from "../types"
export function InfoField({ label, value }: InfoFieldProps): React.ReactElement | null {

    if (!value) {
        return null
    }

    return (
        <>
            <div className="text-gray-500 font-medium">{label}</div>
            <div className="text-gray-200">{value}</div>
        </>
    )
}