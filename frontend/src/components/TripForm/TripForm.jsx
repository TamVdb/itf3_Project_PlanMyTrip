const TripForm = () => {

   return (
      <form className="flex flex-col gap-3">
         <div>
            <label htmlFor="tripName" className="input-label">
               Trip Name
            </label>
            <input
               id="tripName"
               type="text"
               className="input"
            />
         </div>
         <div>
            <label htmlFor="tripDate" className="input-label">
               Trip Date
            </label>
            <input
               id="tripDate"
               type="date"
               className="input"
            />
         </div>
      </form>
   );
};