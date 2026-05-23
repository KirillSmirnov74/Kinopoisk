import React from 'react'
import { buildPagination } from '../utils/buildPagination'
import { PaginationProps } from '../types'
import Right from '../assets/icons/Arrrow-right.svg?react'
import Left from '../assets/icons/Arrow-left.svg?react'

export function Pagination({
    currentPage,
    totalPages,
    onPageChange
}: PaginationProps): React.ReactElement | null {
    const pages = buildPagination(currentPage, totalPages)

    if (totalPages <= 1 || pages.length === 0) return null

    return (
        <div className="flex justify-center items-center gap-2 mt-10">
            {/* Назад */}
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`px-3 py-1 text-sm transition-colors cursor-pointer
                     ${currentPage <= 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:text-black"
                    }`}
            >
                <Left width={10} height={10} fill="white" />
            </button>

            {/* Страницы */}
            {pages.map((page, index) => {
                if (page === '...') {
                    return <span key={`dots-${index}`} className="px-2 text-gray-400">...</span>
                }

                const isActive = page === currentPage
                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(Number(page))}
                        className={`px-3 py-1 text-sm font-medium transition-colors cursor-pointer
                             ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                    >
                        {page}
                    </button>
                )
            })}

            {/* Вперёд */}
            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className={`px-3 py-1 text-sm transition-colors cursor-pointer ${currentPage >= totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-500 hover:text-white"
                    }`}
            >
                <Right width={10} height={10} fill="white" />
            </button>
        </div>
    )
}