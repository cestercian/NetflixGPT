import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
// import { addFeatureMovie } from "../utils/movieSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    const fetchNowPlaying=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      }
      useEffect(()=>{
        const unsubscribe = fetchNowPlaying();
        return ()=> unsubscribe;
      },[])

      
}

export default useNowPlayingMovies;