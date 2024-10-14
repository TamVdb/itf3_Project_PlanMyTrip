import Hero from './containers/Hero/Hero.jsx';
import BgImage from './assets/test-bg.png';


function App() {

   const bgMain = {
      background: "linear-gradient(0deg, #F0F9FB 0%, #DAF0F3 50%, #A8DAE3 75%)",
   };

   const bgImage = {
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${BgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
   };

   return (
      <>
         <div style={bgMain}>
            <div style={bgImage} className="relative z-0">
               <Hero />
            </div>
         </div >
      </>
   );
}

export default App;
