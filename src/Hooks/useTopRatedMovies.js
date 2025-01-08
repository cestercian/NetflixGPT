import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
// import { addFeatureMovie } from "../utils/movieSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()
    const fetchNowPlaying=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
      }
      useEffect(()=>{
        const unsubscribe = fetchNowPlaying();
        return ()=> unsubscribe;
      },[])

      
}

export default useTopRatedMovies;