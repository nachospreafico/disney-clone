import { useEffect, useRef, useState } from "react";
import GlobalApi from "./../services/GlobalApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const [movieList, setMovieList] = useState([]);

  const elemRef = useRef();

  function getTrendingMovies() {
    GlobalApi.getTrendingVideos.then((res) => setMovieList(res.data.results));
  }

  const screenWidth = window.innerWidth;

  function sliderRight(element) {
    element.scrollLeft += screenWidth;
  }

  function sliderLeft(element) {
    element.scrollLeft -= screenWidth;
  }

  return (
    <div className="relative">
      <div className="hidden absolute h-full z-10 w-[6vw] md:flex items-center justify-center left-0 opacity-0 hover:opacity-100 duration-150 px-4">
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2xl"
          className="text-white"
          onClick={() => sliderLeft(elemRef.current)}
        />
      </div>
      <div className="hidden absolute h-full z-10 w-[6vw] md:flex items-center justify-center right-0 opacity-0 hover:opacity-100 duration-150 px-4">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2xl"
          className="text-white"
          onClick={() => sliderRight(elemRef.current)}
        />
      </div>
      <div
        className="relative flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth snap-x ease-in-out"
        ref={elemRef}
      >
        {movieList.map((elem, index) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/original${elem.backdrop_path}`}
              key={index}
              className="min-w-[88vw] cursor-pointer md:h-[300px] snap-center object-cover object-left-top mr-5 rounded-md border-[3px] border-transparent hover:border-white ease-in-out duration-150"
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
