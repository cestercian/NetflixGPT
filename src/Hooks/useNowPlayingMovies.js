import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const fetchNowPlaying = async () => {
    let data;
    try {
      data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        OPTIONS
      );
    } catch {
      return;
    }
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlayingMovies) {
      const unsubscribe = fetchNowPlaying();
      return () => unsubscribe;
    }
  }, []);
};

export default useNowPlayingMovies;
