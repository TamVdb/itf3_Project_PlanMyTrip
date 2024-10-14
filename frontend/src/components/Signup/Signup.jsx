import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = ({ switchToLogin }) => {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <>
         <div className={"p-4"}>
            <h1 className="text-2xl text-gray-600 font-semibold text-center mb-4">
               Create Your Account
            </h1>
            <form className="flex flex-col gap-3">
               <div>
                  <label for="username" className="input-label">
                     Username
                  </label>
                  <input id="username" type="text" className="input" />
               </div>
               <div>
                  <label htmlFor="email" className="input-label">
                     Email
                  </label>
                  <input id="email" type="email" className="input" />
               </div>
               <div>
                  <label htmlFor="password" className="input-label">
                     Password
                  </label>
                  <div className="relative">
                     <input
                        className="input pr-8"
                        id="password"
                        type={showPassword ? "text" : "password"}
                     />

                     {showPassword ? (
                        <FaEye
                           className="text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                           onClick={() => setShowPassword(!showPassword)}
                        />
                     ) : (
                        <FaEyeSlash
                           className="text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                           onClick={() => setShowPassword(!showPassword)}
                        />
                     )}
                  </div>
               </div>
            </form>
            <button className="bg-blue-500 text-white py-1 px-5 rounded-full mt-7 block w-full hover:bg-blue-500/80 transition-200">
               Create Account
            </button>
            <p
               className="text-center text-gray-500 text-sm my-3 hover:text-blue-700 cursor-pointer"
               onClick={switchToLogin}
            >
               Already have an Account? Log in
            </p>
         </div>
      </>
   );
};

export default Signup;