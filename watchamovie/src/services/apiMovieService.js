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
}

export default apiMovieService;
