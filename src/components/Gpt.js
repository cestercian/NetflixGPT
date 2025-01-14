import GPTSearchBar from "./GptSearchBar";
import GPTRecommendation from "./GPTRecommendation";
import { useSelector } from "react-redux";
import Shimmer from "./ShimmerUI/Shimmer";

const Gpt = () => {
  const searchState = useSelector((store) => store.gpt.searchState);
  return (
    <div className="">
      <div className="bg-black w-[100%] h-screen absolute -z-10" >hadl</div>
      <GPTSearchBar />
      {searchState === 2 && <Shimmer />}
      <GPTRecommendation />
    </div>
  );
};

export default Gpt;
