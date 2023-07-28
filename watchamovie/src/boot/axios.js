import axios from "axios";

export const api_movie = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjViZjExYjg3YmY3M2MzMjc2ODhjZDUyNjU2NTRkZSIsInN1YiI6IjY0YjMzYmIyMjNkMjc4MDEwNzMwOTIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L_ji1elagRGxA4S62y3gGlrcfhY8864zLqo7mSu54wg`,
  },
});
