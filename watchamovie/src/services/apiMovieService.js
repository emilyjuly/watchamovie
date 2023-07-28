import { api_movie } from "../boot/axios";

class apiMovieService {
  static async getPopularMovies() {
    const { data } = await api_movie.get("popular");
    return data.results;
  }
}

export default apiMovieService;
