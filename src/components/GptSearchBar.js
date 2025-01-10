import { Form } from "react-router-dom";
import {lang} from "../utils/languageConstants"
import {useSelector } from "react-redux"

const GPTSearchBar = () => {
  const languageIdentifier = useSelector(store =>store.config.lang);
  return (
    <div className="">
      <Form className="bg-black pt-56 pb-20 px-40 flex justify-center ">
        <input type="text" placeholder={lang[languageIdentifier].gptPlaceHolder} className="py-2 px-6 rounded-l-md text-lg w-96 focus:outline-none"/>
        <button className="text-white bg-red-700 py-2 px-8 rounded-r-md text-lg hover:bg-red-600">{lang[languageIdentifier].search}</button>
      </Form>
    </div>
  );
};

export default GPTSearchBar;
