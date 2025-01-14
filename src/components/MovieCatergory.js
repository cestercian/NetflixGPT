import MovieCard from "./MovieCard";

const MovieCatergory = ({ movies,title }) => {
  return (
    <div className="">
      <h2 className="mx-10 mb-2 text-lg font-medium text-white py-4">{title}</h2>
      <div className="flex mx-10 py-2 overflow-x-scroll scroll-smooth scrollbar-hide">
        { movies && movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.original_title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCatergory;
