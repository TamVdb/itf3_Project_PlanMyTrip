import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ onSwitchToSignup = () => { } }) => {
   const [showPassword, setShowPassword] = useState(false);

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         // Envoie les informations de connexion à l'API
         const response = await axios.post('http://localhost:8000/login', { username, password });

         if (response.status === 200) {
            // Redirige vers la page d'accueil ou tableau de bord en cas de succès
            navigate('/trips');
         } else {
            console.log('Connexion échouée');
         }
      } catch (error) {
         console.error("Erreur lors de la connexion:", error);
      }
   };


   return (
      <>
         <div className="px-8 pt-16 pb-8">
            <h2 className="text-2xl text-custom-wine font-semibold font-title text-center mb-5">
               Log in to save your trips
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
               <div>
                  <label htmlFor="username" className="input-label text-darkerText">Username</label>
                  <input id="username" type="text" className="input" onChange={(e) => setUsername(e.target.value)} />
               </div>
               <div>
                  <label htmlFor="password" className="input-label text-darkerText">Password</label>
                  <div className="relative">
                     <input className="input pr-8" id="password" onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} />
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
                  Submit
               </button>
            </form>
            <p className="text-center text-darkerText mt-6"
               onClick={onSwitchToSignup}>Don't have an account yet? <span className='cursor-pointer font-medium text-custom-orange hover:text-custom-orange-700 underline'>Sign up</span></p>
         </div>
      </>
   );
};

export default Login;