import axios from "axios";

const moviesBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4c9750dbe6d20d992ccc899cc390fa1f";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=4c9750dbe6d20d992ccc899cc390fa1f";

const getTrendingVideos = axios.get(
  moviesBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) => {
  return axios.get(movieByGenreBaseURL + "&with_genres=" + id);
};

export default { getTrendingVideos, getMovieByGenreId };
