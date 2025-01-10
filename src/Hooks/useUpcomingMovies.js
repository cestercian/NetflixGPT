import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpComingMovies = ()=>{
    const dispatch = useDispatch()
    const fetchNowPlaying=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
      }
      useEffect(()=>{
        const unsubscribe = fetchNowPlaying();
        return ()=> unsubscribe;
      },[])

      
}

export default useUpComingMovies;