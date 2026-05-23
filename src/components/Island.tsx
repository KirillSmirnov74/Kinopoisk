import React from 'react'

export function Island({ children }: { children: React.ReactNode }): React.ReactElement {
    return (
        <div className="w-full max-w-md p-8 bg-gray-600 rounded-xl shadow-lg">
            {children}
        </div>
    )
}