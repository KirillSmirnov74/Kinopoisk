import { MovieListProps } from "../types";
import { MovieCardL } from "./MovieCardL";
import { useNavigate } from "react-router";

export function MovieList({ data }: MovieListProps): React.ReactElement {
  const navigate = useNavigate();

  function handleClickCardFilm(event: React.MouseEvent<HTMLDivElement>) {
    const filmElement = (event.target as HTMLElement).closest('[data-id]');
    if (filmElement) {
      const filmId = (filmElement as HTMLElement).dataset.id;
      navigate(`/film/${filmId}`);
    }
  }

  return (
    <div className='grid grid-cols-5 gap-5 w-full'>
      {data.map((film) => (
        <MovieCardL
          kinopoiskId={film.kinopoiskId}
          key={film.kinopoiskId}
          nameRu={film.nameRu}
          posterUrl={film.posterUrl}
          ratingKinopoisk={film.ratingKinopoisk}
          year={film.year}
          genres={film.genres}
          onClickCard={handleClickCardFilm}
        />
      ))}
    </div>
  );
}
