import { Form } from "react-router-dom";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addMoviesRecommendation, changeSearchState } from "../utils/gptSlice";
import { GPT_QUERY_NOTE, GPT_ROLE, schema } from "../utils/constants";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GPTSearchBar = () => {
  const languageIdentifier = useSelector((store) => store.config.lang);
  const query = useRef(null);
  const dispatch = useDispatch();

  const gptSearchHandle = async () => {
    dispatch(changeSearchState(2));
    console.log("searching...");

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GPT_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      }
    });
    const prompt = GPT_ROLE + query.current.value + GPT_QUERY_NOTE;
    const result = await model.generateContent(prompt);
    const movieData = result.response.text();

    let movies;
    try{
      movies= await JSON.parse(movieData);
    }
    catch{
      console.log("error  occurred");
      return;
    }
    if (movies) dispatch(addMoviesRecommendation(movies));
    
  };

  return (
    <div className="" onSubmit={gptSearchHandle}>
      <Form className="bg-black pt-56 pb-20 px-40 flex justify-center ">
        <input
          type="text"
          placeholder={lang[languageIdentifier].gptPlaceHolder}
          ref={query}
          className="py-2 px-6 rounded-l-md text-md md:text-lg w-96 focus:outline-none"
        />
        <button className="text-white bg-red-700 py-2 px-8 rounded-r-md text-md md:text-lg hover:bg-red-600">
          {lang[languageIdentifier].search}
        </button>
      </Form>
    </div>
  );
};

export default GPTSearchBar;
