export enum MediaType {
  all = "all",
  movie = "movie",
  tv = "tv",
  person = "person"
}

export enum TimeWindow {
  day = "day",
  week = "week"
}

export interface genres {
  id: number;
  name: string;
}

export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: [number];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface companies {
  name: string;
  id: number;
  logo_path?: string;
  origin_country: string;
}

export interface MovieDetails extends Movie {
  genres: [genres];
  homepage?: string;
  imbd_id?: string;
  production_companies: [companies];
}

export interface Serie {
  original_name: string;
  id: number;
  name: string;
  vote_count: number;
  vote_average: number;
  first_air_date: Date;
  poster_path: string;
  genre_id: [string];
  origina_language: string;
  backdrop_path: string;
  overview: string;
  origin_country: [string];
  popularity: number;
}

export interface Person {
  adult: false;
  gender: 1;
  name: string;
  id: number;
  known_for: [Movie | Serie];
  known_for_department: string;
  profile_path: string;
  popularity: number;
}

export interface TrendingResult {
  page: number;
  results: [Movie | Serie | Person];
  total_page: number;
  total_results: number;
}
