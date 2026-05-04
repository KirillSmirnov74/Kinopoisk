import { useEffect } from "react";
import { MovieCardL } from "./MovieCardL";
import { useAppSelector } from "../redux/store";
// import { fetchFilms } from "../redux/films-slice";


export function MovieList() {
  const films = useAppSelector((state) => state.films.data)
  // const dispatch = useAppDispatch()
  console.log(films)

  useEffect(() => {
    // dispatch(fetchFilms())
  }, [])

  return (
    <div className='grid grid-cols-5 gap-5 w-full max-w-7xl mx-auto px-5 '>
      <div>
        <MovieCardL />
      </div>
      <div className='w-full h-80 bg-blue-300 rounded-2xl'>02</div>
      <div className='w-full h-80 bg-blue-300 rounded-2xl'>03</div>
      <div className='w-full h-80 bg-blue-300 rounded-2xl'>04</div>

      <div className='w-full h-80 bg-blue-300 rounded-2xl'>05</div>
      <div className='w-full h-80 bg-blue-300 rounded-2xl'>06</div>
      <div className='w-full h-80 bg-blue-300 rounded-2xl'>07</div>
      <div className='w-full h-80 bg-blue-300 rounded-2xl'>08</div>
      <div className='w-full h-80 bg-blue-300 rounded-2xl'>09</div>
      <div className='w-full h-80 bg-blue-300 rounded-2xl'>10</div>
    </div>
  );
}
