import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
// import { addFeatureMovie } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const fetchNowPlaying = async () => {
    let data;
    try{
      data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        OPTIONS
      );

    }
    catch{
      return;
    }
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    if (!popularMovies) {
      const unsubscribe = fetchNowPlaying();
      return () => unsubscribe;
    }
  }, []);
};

export default usePopularMovies;
