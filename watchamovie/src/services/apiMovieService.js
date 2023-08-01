import { api_movie } from "../boot/axios";

class apiMovieService {
  static async getPopularMovies() {
    const { data } = await api_movie.get("movie/popular");
    return data.results;
  }

  static async movieSearch(query) {
    const { data } = await api_movie.get(`search/movie?query=${query}`);
    return data.results;
  }

  static async getOnlyMovie(id) {
    const { data } = await api_movie.get(`movie/${id}`)
    return data;
  }
}

export default apiMovieService;
