import { SchemaType } from "@google/generative-ai";

export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const DEFAULT_USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg";

export const GPT_QUERY_NOTE =
  ".NOTE: only provide name of the movie,year of release,primary language of the movie and say whether the movie contains adult content or not, of top 10 movies: Example:. ";
export const GPT_ROLE =
  "Act as a movie recommendation system for the given query. Query:";

export const schema = {
  description: "Recommeded movies",
  type: SchemaType.ARRAY,
  items: {
    type: SchemaType.OBJECT,
    properties: {
      name: { type: SchemaType.STRING },
      year: { type: SchemaType.NUMBER },
      primaryLanguage: { type: SchemaType.STRING },
      adult: { type: SchemaType.BOOLEAN }
    }
  }
};
