const Header = ({ onShowModal }) => {

   const handleLoginModal = (e) => {
      e.preventDefault();
      onShowModal('login'); // Passe 'login' en paramètre pour ouvrir le modal avec Login
   };

   const handleSignUpModal = (e) => {
      e.preventDefault();
      onShowModal('signup'); // Passe 'signup' pour ouvrir le modal avec Signup
   };

   return (
      <>
         <header className="shadow-lg absolute top-0 left-0 w-full z-10">
            <div className="container py-4 flex justify-between items-center">
               <div className="font-logo text-custom-blue text-2xl sm:text-3xl">Plan My Trip</div>
               <nav className="flex justify-between items-center">
                  <ul className="flex items-center gap-4">
                     <li><a href="#" onClick={handleLoginModal} className="text-lg font-medium text-custom-blue hover:text-darkerText px-2 py-4">Log in</a></li>
                     <li><a href="#" onClick={handleSignUpModal} className="text-lg font-medium text-custom-blue hover:text-darkerText px-2 py-4">Sign up</a></li>
                  </ul>
               </nav>
            </div>
         </header>
      </>
   );
};

export default Header;