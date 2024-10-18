const TriAddForm = () => {

   return (
      <>
         <h2>Add a new Trip</h2>
         <form action="">
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

         </form>
      </>
   );
};

export default TriAddForm;