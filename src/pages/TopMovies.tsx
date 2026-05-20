import { useEffect } from "react";
import { MovieList } from "../components/MovieList";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { fetchTop250Films } from "../redux/filmsTop250-slice"; // Убедись, что имя импорта правильное
import { getFilmsWithPoster } from "../helpers";
import { useSearchParams } from "react-router"; // 👈 Импорт хука
import { Pagination } from "../components/Pagination";

export function TopMovies() {
    const { data: top250Films, totalPages, loading } = useAppSelector((state) => state.top250Films);
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = searchParams.get('page');
    const currentPage = pageParam ? Number(pageParam) : 1;

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(newPage));
        setSearchParams(params);
    };

    const filmsWithPoster = getFilmsWithPoster(top250Films || []);

    useEffect(() => {
        dispatch(fetchTop250Films(currentPage));
        window.scrollTo(0, 0);
    }, [dispatch, currentPage]);

    if (loading || !top250Films) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] w-full">
                <p className="text-gray-400 text-lg">Загрузка...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center min-h-screen w-full">
            <div className="w-full max-w-7xl">
                <MovieList data={filmsWithPoster} />
                <div className="mt-10">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages || 1}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}