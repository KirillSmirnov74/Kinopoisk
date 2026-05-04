export type FormFieldProps =  {
    id: string,
    label:string,
    type: string,
    value?: string,
    placeholder: string,
    // name: string,
    // onChange:() => void,
}

export interface FilmModel {
  kinopoiskId: number;
  imdbId: string | null;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  countries: CountryModel[];
  genres: GenreModel[];
  ratingKinopoisk: number | null;
  ratingImdb: number | null;
  year: number;
  type: string; 
  posterUrl: string;
  posterUrlPreview: string;
}

export interface CountryModel {
  country: string;
}

export interface GenreModel {
  genre: string;
}

export interface FilmsResponse {
  total: number;
  totalPages: number;
  items: FilmModel[];
}

export interface FilmsState {
    data: FilmModel[],
    loading: boolean,
    error: boolean
}