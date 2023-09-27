import { useEffect, useState, useRef } from "react";
import GlobalApi from "./../services/GlobalApi";
import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => getMovieByGenreId(), []);

  const elemRef = useRef();

  function getMovieByGenreId() {
    GlobalApi.getMovieByGenreId(genreId)
      .then((res) => setMovieList(res.data.results))
      .catch((error) => console.log(error));
  }

  const screenWidth = window.innerWidth;

  function sliderRight(element) {
    element.scrollLeft += screenWidth;
  }

  function sliderLeft(element) {
    element.scrollLeft -= screenWidth;
  }

  return (
    <div className="h-fit relative">
      <div className="hidden absolute h-full z-10 w-[1vw] md:flex items-center justify-center left-0 opacity-0 hover:opacity-100 duration-150 px-4">
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2xl"
          className="text-white"
          onClick={() => sliderLeft(elemRef.current)}
        />
      </div>
      <div className="hidden absolute h-full z-10 w-[1vw] md:flex items-center justify-center right-0 opacity-0 hover:opacity-100 duration-150 px-4">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2xl"
          className="text-white"
          onClick={() => sliderRight(elemRef.current)}
        />
      </div>
      <div
        className="flex flex-row overflow-x-auto gap-4 scrollbar-none py-2 scroll-smooth snap-x ease-in-out"
        ref={elemRef}
      >
        {movieList.map((elem, index) => (
          <MovieCard movie={elem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
