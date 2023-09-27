import { genres } from "./../constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <section className="flex flex-col">
      {genres.map(
        (elem, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-16" key={elem.id}>
              <h2 className="text-2xl text-white font-bold">{elem.name}</h2>
              <MovieList genreId={elem.id} />
            </div>
          )
      )}
    </section>
  );
};

export default GenreMovieList;
