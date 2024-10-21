import { FaHeart } from 'react-icons/fa';

const Footer = () => {
   return (
      <>
         <footer className="bg-custom-blue p-2">
            <div className="container py-4 flex justify-between items-center">

               <div className=" flex font-logo text-custom-lightBlue text-2xl sm:text-3xl">Plan My Trip</div>
               <div className="flex flex-col">
                  <p className="text-right text-white">Legal Notice | Privacy Policy | Cookies Policy</p>
                  <p className="text-right inline-flex align-center text-white mt-1">© 2024 - Plan My Trip | All rights reserved •
                     Made with <FaHeart className="text-custom-lightBlue mx-2" /> by Tamara Vandebroeck</p>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;