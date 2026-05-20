import { buildPagination } from '../utils/buildPagination';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pages = buildPagination(currentPage, totalPages);

    if (totalPages <= 1 || pages.length === 0) return null;

    return (
        <div className="flex justify-center items-center gap-2 mt-10">
            {/* Назад */}
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`px-3 py-1 text-sm transition-colors cursor-pointer
                     ${currentPage <= 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:text-black'
                    }`}
            >
                ←
            </button>

            {/* Страницы */}
            {pages.map((page, index) => {
                if (page === '...') {
                    return <span key={`dots-${index}`} className="px-2 text-gray-400">...</span>;
                }

                const isActive = page === currentPage;
                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(Number(page))}
                        className={`px-3 py-1 text-sm font-medium transition-colors cursor-pointer
                             ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Вперёд */}
            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className={`px-3 py-1 text-sm transition-colors cursor-pointer ${currentPage >= totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-500 hover:text-black'
                    }`}
            >
                →
            </button>
        </div>
    );
}