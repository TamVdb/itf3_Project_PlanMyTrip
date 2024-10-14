const Hero = ({ handleLoginPopup }) => {
   return (
      <>
         <div className="container py-4 flex flex-col justify-center items-center overflow-visible">
            <h1 className="font-title font-bold text-wine text-center text-3xl sm:text-5xl lg:text-6xl pt-36 sm:pt-44 md:w-[900px]">
               Your activity planner for the perfect travel experience
            </h1>
            <p className="text-darkerText text-lg font-semibold md:w-[850px] text-center pt-6">
               Plan My Trip makes planning your adventures easy and fun. Just a few clicks to map out, optimize, and enjoy every moment of your trip!
            </p>
            <button
               onClick={handleLoginPopup}
               className="bg-orange-500 text-white py-1 px-5 rounded-full mt-7 hover:bg-orange-500/80 transition-200 "
            >
               Join Now
            </button>

         </div>
      </>
   );
};

export default Hero;