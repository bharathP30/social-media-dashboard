import { useContext } from "react";
import { ThemeContext } from "../../App";
import { UserContext } from "../../App";
import { SlArrowLeft } from "react-icons/sl";
import { WiDaySunny } from "react-icons/wi";

export default function Profile({setTheme, setPage}) {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    
   

   return (
      <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-white/80' : 'bg-gray-800/80' }`}>
        <button
        className={`fixed top-4 left-4 px-4 py-2 rounded-md border transition duration-300 ${theme === "light"? 'bg-white/30 border-white/10 active:bg-white/20': 'bg-gray-700/20 border-white/10 backdrop:backdrop-blur-2xl text-white active:bg-gray-600/30'}`}>
        <SlArrowLeft onClick={()=> setPage('home')} />
        </button>
        <button
        className={`fixed top-4 right-4 px-4 py-2 rounded-md border transition duration-300 ${theme === "light"? 'bg-white/30 border-white/10 active:bg-white/20': 'bg-gray-700/20 border-white/10 backdrop:backdrop-blur-2xl text-white active:bg-gray-600/30'}`}>
        <WiDaySunny onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')} />
        </button>

     
      </div>
    )
}