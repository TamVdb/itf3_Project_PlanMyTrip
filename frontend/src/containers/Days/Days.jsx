const Day = ({ nbDay }) => {
   return (
      <>
         <div className="bg-white flex flex-col border border-custom-blue rounded-xl w-full lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] gap-4 justify-between">
            <div className="rounded-t-xl bg-custom-blue py-2">
               <p className="font-title text-lg text-white text-center">Day {nbDay}</p>
            </div>
            <div className="px-4 flex justify-between items-start min-h-[200px]">
               {/* Placeholder for activities */}
            </div>
         </div>
      </>
   );
};

const Days = ({ days }) => {

   const dayCards = [];

   for (let i = 1; i <= days; i++) {
      dayCards.push(<Day key={i} nbDay={i} />);
   }

   return (
      <>
         {dayCards}
      </>
   );
};

export default Days;