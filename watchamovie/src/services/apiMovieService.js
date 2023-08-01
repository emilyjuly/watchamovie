import { api_movie } from "../boot/axios";

class apiMovieService {
  static async getTrendingMovies() {
    const { data } = await api_movie.get("trending/movie/week");
    return data.results;
  }

  static async movieSearch(query) {
    const { data } = await api_movie.get(`search/movie?query=${query}`);
    return data.results;
  }

  static async getOnlyMovie(id) {
    const { data } = await api_movie.get(`movie/${id}`);
    return data;
  }

  static async getGenres() {
    const { data } = await api_movie.get(`genre/movie/list`);
    return data.genres;
  }
}

export default apiMovieService;
