import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, poster_path }) => {
  if(!poster_path) return;
  return (
    <div className="mr-4 mb-2 flex flex-col items-center">
      <div className="md:w-56 w-44">
        <img src={IMG_CDN_URL + poster_path} alt="movie-poster"  className=""/>
      </div>
      <p className="text-white text-center text-md p-2">{title}</p>
    </div>
  );
};

export default MovieCard;
