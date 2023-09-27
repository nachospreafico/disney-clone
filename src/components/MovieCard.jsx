const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        className=" w-[110px] md:w-[200px] h-auto hover:border-gray-200 duration-300 border-transparent border-[3px] cursor-pointer rounded-md"
      ></img>
    </>
  );
};

export default MovieCard;
