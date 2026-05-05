
import { MovieListProps } from "../types";
import { MovieCardL } from "./MovieCardL";



export function MovieList({ data }: MovieListProps): React.ReactElement {

  function handleClicCardFilm(event: React.MouseEvent<HTMLDivElement>) {
    const filmElement = (event.target as HTMLElement).closest('[data-id]');
    if (filmElement) {
      const filmId = (filmElement as HTMLElement).dataset.id;
      console.log(filmId)
    }
  }

  return (
    <div className='grid grid-cols-5 gap-5 w-full max-w-7xl mx-auto px-5'  >
      {data.map((film) => (
        <MovieCardL
          kinopoiskId={film.kinopoiskId}
          key={film.kinopoiskId}
          nameRu={film.nameRu}
          posterUrl={film.posterUrl}
          ratingKinopoisk={film.ratingKinopoisk}
          year={film.year}
          genres={film.genres}
          onClickCard={handleClicCardFilm}
        />
      ))}
    </div>
  );
}
