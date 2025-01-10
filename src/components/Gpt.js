import { NETFLIX_BG } from "../utils/constants";
import GPTSearchBar from "./GptSearchBar";

const Gpt = () => {
  return (
    <div className="">
        <img alt="Netflix-bg" src={NETFLIX_BG} className=" absolute -z-10"/>
      <GPTSearchBar />
    </div>
  );
};

export default Gpt;
