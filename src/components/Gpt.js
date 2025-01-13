import { NETFLIX_BG } from "../utils/constants";
import GPTSearchBar from "./GptSearchBar";
import GPTRecommendation from "./GPTRecommendation";

const Gpt = () => {
  
  return (
    <div className="bg-black">
      <GPTSearchBar />
      <GPTRecommendation/>
    </div>
  );
};

export default Gpt;
