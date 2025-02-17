import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
// import { addFeatureMovie } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRated);
  const fetchNowPlaying = async () => {
    let data;
    try {
      data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        OPTIONS
      );
    } catch {
      return;
    }
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    if (!topRatedMovies) {
      const unsubscribe = fetchNowPlaying();
      return () => unsubscribe;
    }
  }, []);
};

export default useTopRatedMovies;
