import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { handleError, handleSuccess } from '../../utils';
import { Toaster } from 'react-hot-toast';

const Signup = ({ onSwitchToLogin = () => { } }) => {

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const [showPassword, setShowPassword] = useState(false);

   const handleSignupSubmit = (e) => {
      e.preventDefault();

      const newUser = {
         username,
         email,
         password
      };

      axios.post(`${import.meta.env.VITE_APP_URL}/api/users/signup`, newUser)
         .then(res => {
            if (res.status === 201) {
               console.log('User created successfully');
               // Show toast with success message
               handleSuccess('User created successfully');
               // Switch to login form after 2 seconds
               setTimeout(() => {
                  onSwitchToLogin();
               }, 2000);
            }
         })
         .catch(err => {
            if (err.response && err.response.status === 400) {
               // Show toast with error message
               handleError('Email already exists. Please use a different email.');
            } else {
               console.log(err);
            }
         });
   };


   return (
      <>
         <Toaster />
         <div className="px-8 pt-16 pb-8">
            <h2 className="text-2xl text-custom-wine font-semibold font-title text-center mb-5">
               Sign up to save your trips
            </h2>
            <form onSubmit={handleSignupSubmit} className="flex flex-col gap-3">
               <div>
                  <label htmlFor="username" className="input-label text-darkerText">Username</label>
                  <input id="username" type="text" className="input" onChange={(e) => setUsername(e.target.value)} />
               </div>
               <div>
                  <label htmlFor="email" className="input-label text-darkerText">Email</label>
                  <input id="email" type="email" className="input" onChange={(e) => setEmail(e.target.value)} />
               </div>
               <div>
                  <label htmlFor="password" className="input-label text-darkerText">Password</label>
                  <div className="relative">
                     <input className="input pr-8" id="password" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
                     {showPassword ? (
                        <FaEye
                           className="text-darkerText absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                           onClick={() => setShowPassword(!showPassword)}
                        />
                     ) : (
                        <FaEyeSlash
                           className="text-darkerText absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                           onClick={() => setShowPassword(!showPassword)}
                        />
                     )}
                  </div>
               </div>
               <button className="bg-custom-yellow text-white py-1.5 rounded-lg mt-4 block w-full hover:bg-custom-lightYellow transition-200">
                  Create Account
               </button>
            </form>

            <p className="text-center text-darkerText mt-6"
               onClick={onSwitchToLogin}>Already have an Account? <span className='cursor-pointer font-medium text-custom-orange hover:text-custom-orange-700 underline'>Log in</span></p>
         </div>
      </>
   );
};

export default Signup;