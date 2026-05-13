// components/Pagination.tsx
import { Link } from "react-router";
import { buildPagination } from '../utils/buildPagination';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath?: string;
}

export function Pagination({
    currentPage,
    totalPages,
    basePath = '/films'
}: PaginationProps) {
    const pages = buildPagination(currentPage, totalPages);

    if (totalPages <= 1 || pages.length === 0) return null;

    const getPageUrl = (page: number) => {
        if (page === 1) {
            return basePath;
        }
        return `${basePath}/page/${page}`;
    };

    return (
        <div className="flex justify-center items-center gap-2 mt-10">
            {/* Назад */}
            {currentPage > 1 ? (
                <Link to={getPageUrl(currentPage - 1)} className="px-3 py-1 text-gray-700 hover:text-black transition-colors">
                    ←
                </Link>
            ) : (
                <span className="px-3 py-1 text-gray-400">←</span>
            )}

            {/* Страницы */}
            {pages.map((page, index) => {
                if (page === '...') {
                    return <span key={`dots-${index}`} className="px-2 text-gray-400">...</span>;
                }

                const isActive = page === currentPage;
                return (
                    <Link
                        key={`${page}-${index}`}
                        to={getPageUrl(Number(page))}
                        className={`px-3 py-1 text-sm ${isActive ? 'text-black font-medium' : 'text-gray-500 hover:text-black transition-colors'}`}
                    >
                        {page}
                    </Link>
                );
            })}

            {/* Вперед */}
            {currentPage < totalPages ? (
                <Link to={getPageUrl(currentPage + 1)} className="px-3 py-1 text-gray-500 hover:text-black transition-colors">
                    →
                </Link>
            ) : (
                <span className="px-3 py-1 text-gray-500">→</span>
            )}
        </div>
    );
}