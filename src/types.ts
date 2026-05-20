export type FormFieldProps =  {
    id?: string,
    label?:string,
    type: string,
    value?: string,
    placeholder: string,
    className: string,
    classNameForLabel?: string,
    maxLength?: number,
    max?: number | string,
    min?: number | string,
    step?: string,
}

export interface FilmModel {
  kinopoiskId: number,
  imdbId? : string,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string | null,
  countries: CountryModel[],
  genres: GenreModel[],
  ratingKinopoisk: number | null,
  ratingImdb: number | null,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string,
}


export interface CountryModel {
  country: string
}

export interface GenreModel {
  genre: string
}

export interface FilmsResponse {
  total: number,
  totalPages: number,
  items: FilmModel[],
}

export type SearchFilmsResponse = FilmsResponse


export interface CountryModel {
  country: string;
}

export interface GenreModel {
  genre: string;
}

export interface FilmResponse {
  // IDs
  kinopoiskId: number
  kinopoiskHDId: string
  imdbId: string

  // Названия
  nameRu: string | null
  nameEn: string | null
  nameOriginal: string | null

  // Изображения
  posterUrl: string
  posterUrlPreview: string
  coverUrl: string | null
  logoUrl: string | null
  webUrl: string

  // Рейтинги и голосования
  reviewsCount: number
  ratingGoodReview: number | null
  ratingGoodReviewVoteCount: number | null
  
  ratingKinopoisk: number | null
  ratingKinopoiskVoteCount: number | null
  
  ratingImdb: number | null
  ratingImdbVoteCount: number | null
  
  ratingFilmCritics: number | null
  ratingFilmCriticsVoteCount: number | null
  
  ratingAwait: number | null
  ratingAwaitCount: number | null
  
  ratingRfCritics: number | null
  ratingRfCriticsVoteCount: number | null

  // Годы и длительность
  year: number | null
  startYear: number | null
  endYear: number | null
  filmLength: number | null

  // Текстовые поля
  slogan: string | null
  description: string | null
  shortDescription: string | null
  editorAnnotation: string | null

  // Флаги
  isTicketsAvailable: boolean
  hasImax: boolean
  has3D: boolean
  serial: boolean
  shortFilm: boolean
  completed: boolean

  // Мета-информация
  productionStatus: string
  type: string
  ratingMpaa: string | null
  ratingAgeLimits: string | null

  // Структурированные данные
  countries: CountryModel[]
  genres: GenreModel[]

  // Системные поля
  lastSync: string
}

export interface FilmBudgetResponse {
  total: number,
  items: BudgetModel[]
}

export interface BudgetModel {
  type: string,
  amount: number,
  currencyCode: string,
  name: string,
  symbol: string
}

export interface FilmsState {
    data: FilmModel[],
    totalPages: number,
    similarsFilms: SimilarsFilmModel[],
    loading: boolean,
    error: boolean,
}

export interface Top250FilmsState {
    data: FilmModel[],
    totalPages: number,
    loading: boolean,
    error: boolean,
}

export interface ResultsOfSearchState {
    data: FilmModel[],
    totalPages: number,
    loading: boolean,
    error: boolean,
}

export interface FilmState {
    data: FilmResponse | null,
    filmBudget: FilmBudgetResponse | null,
    filmStaff: StaffMember[] | null
    loading: boolean,
    error: boolean
}

export interface MovieListProps {
  data: FilmModel[],
}

export interface MovieCardLProps {
  kinopoiskId : number,
  nameRu: string | null,
  posterUrl: string,
  ratingKinopoisk: number | null,
  year: number | null,           
  genres: { genre: string }[], 
  onClickCard: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface MovieInfoProps {
  title : string | null,
  ratingKinopoisk : number | null,
  IMDbRating : number | null,
  filmLength : number | null,
  description : string | null,
  year : number | null,
  nameOrg: string | null,
  genres: {genre: string}[] | null,
  countries : {country: string}[] | null
  budget: BudgetModel[] | null,
  ratingAge : string | null,
  slogan: string | null,
  staff: StaffMember[] | null,
}

export interface SimilarsFilmModel {
  kinopoiskId: number,
  nameRu: string,
  nameEn: string,
  nameOriginal: string,
  posterUrl: string,
  posterUrlPreview: string,
  relationType: string,
}

export interface SimilarsFilmsResponse {
  total: number,
  items: SimilarsFilmModel[]
}

export interface MovieCardForSwiperProps {
  kinopoiskId: number | null,
  nameRu: string | null,
  posterUrl: string | null,
}

export interface StaffMember {
  staffId: number | null,
  nameRu : string | null,
  nameEn : string | null,
  description : string | null,
  posterUrl : string | null,
  professionText : string | null,
  professionKey : string | null,
}

export type StaffResponse = StaffMember[];

export interface PeopleListProps {
    people: StaffMember[] | null;
    maxToShow?: number;
}

export interface MovieMetaInfoProps {
   orgName: string | null,
    slogan: string |  null,
    age : string | null,
    year : string | number
    countries : string,
    symbol : string | null,
    amount : string | number,
    directorsData: StaffMember[] | null,
    actorsData: StaffMember[] | null,
}

 export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}


export interface StaffFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  rating: string;
  general: boolean;
  description: string;
  professionKey: string;
}

export interface StaffSpouse {
  personId: number;
  name: string;
  divorced: boolean;
  divorcedReason: string;
  sex: string;
  children: number;
  webUrl: string;
  relation: string;
}

export interface StaffDetails {
  personId: number;
  webUrl: string;
  nameRu: string;
  nameEn: string;
  sex:  string;
  posterUrl: string;
  growth: string;      
  birthday: string;   
  death: string;
  age: number;
  birthplace: string;
  deathplace: string;
  hasAwards: number;
  profession: string;
  facts: string[];
  spouses: StaffSpouse[];
  films: StaffFilm[];
}

export interface StaffState {
  data: StaffDetails | null;
  filmography: StaffFilm[] | null;
  filmsDetails: FilmResponse[] | null,
  loading: boolean;
  error: boolean;
}

export type StaffDetailsResponse = StaffDetails

export interface StaffMemberMetaInfoProps {
  profession: string | null,
  birthday : string | null,
  age : number | null,
  birthplace: string | null,
  death: string | null,
  deathplace : string | null
}

export interface InfoFieldProps {
  label: string,
  value : string |  number | null,
}

export interface FilterPanelProps {
  closeFilterPanel : () => void
}

export interface GenreOption {
  id: number;
  genre: string;
}

export interface CountryOption {
  id: number;
  country: string;
}

export interface FiltersResponse {
  genres: GenreOption[];
  countries: CountryOption[];
}

export interface FiltersState {
  genres: GenreOption[];
  countries: CountryOption[];
  loading: boolean;
  error: boolean;
}

export interface FilterFormValues {
    sortBy: 'RATING' | 'YEAR';
    filmTitle: string;
    yearFrom: string;
    yearTo: string;
    ratingFrom: string;
    ratingTo: string;
    genre: string;
    country: string;
}

export interface FilmApiParams {
    page?: number
    order?: 'RATING' | 'YEAR' | undefined;
    keyword?: string;
    genres?: number[] | undefined;
    countries?: number[] | undefined;
    yearFrom?: number;
    yearTo?: number;
    ratingFrom?: number;
    ratingTo?: number;
}
