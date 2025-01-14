const TrailerTitle = ({title,overview}) => {
  return (
    <div className="absolute px-[5%] md:px-14 pt-[150%] sm:pt-[100%] md:pt-[20%] w-screen h-screen bg-gradient-to-r from-black">
      
      <h1 className="text-2xl md:text-5xl font-bold py-5 text-white">{title}</h1>
      <p className="hidden md:inline-block text-md w-1/2 text-white">{overview}</p>
      <div className="md:mt-10 ">
        <button className="py-2 px-12 font-semibold text-md md:text-lg text-white rounded-lg bg-red-500  mr-4">Play</button>
        <button className="hidden md:inline-block py-2 px-12 font-semibold text-md md:text-lg text-white rounded-lg bg-gray-700 opacity-40">More Info</button>
      </div>
    </div>
  );
};

export default TrailerTitle;
