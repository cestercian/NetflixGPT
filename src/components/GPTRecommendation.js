import { useSelector } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const GPTRecommendation = (movie) => {
  const movies = useSelector((store) => store.gpt.MoviesRecommendation);
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      const fetchMovies = async (movie) => {
        const data = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movie?.name}&include_adult=${movie?.adult}&language=${movie?.primaryLanguage}&primary_release_year=${movie?.year}&page=1`,
          OPTIONS
        );
        const json = await data.json();
        return json;
      };

      const promiseArray = movies.map((movie) => fetchMovies(movie));
      const movieData = await Promise.all(promiseArray);
      setRecommendedMovies(movieData);
    };
    getMovieData();
  }, [movies]);

  if (!movies) return;

  return (
    <div className="">
      {recommendedMovies && (
        <div>
          <h1 className="text-white text-3xl mx-10 my-5 font-bold">
            Recommendation
          </h1>
          <div className="flex overflow-x-auto scrollbar-hide mx-10">
            {recommendedMovies.map((movie) => (
              <MovieCard
                key={movie?.results[0]?.id}
                title={movie?.results[0]?.original_title}
                poster_path={movie?.results[0]?.poster_path}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GPTRecommendation;
