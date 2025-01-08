import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
// import { addFeatureMovie } from "../utils/movieSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch()
    const fetchNowPlaying=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      }
      useEffect(()=>{
        const unsubscribe = fetchNowPlaying();
        return ()=> unsubscribe;
      },[])

      
}

export default usePopularMovies;