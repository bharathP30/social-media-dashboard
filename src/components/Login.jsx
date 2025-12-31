import { useState,useContext } from "react";
import { ThemeContext } from "../App";
import { WiDaySunny, WiMoonAltWaningCrescent4 } from "react-icons/wi";

export default function Login({setUser, setTheme}) {
    const [name, setName] = useState("");
    const theme = useContext(ThemeContext);
    console.log("Current theme in Login component is ", theme);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length === 0) return;
        console.log(name);
        setUser(name);
    }   

    const handleThemeToggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

   return (
      <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-linear-to-tr from-purple-500/30 via-gray-900/50 to-purple-500/30' : 'bg-linear-to-tr from-black/40 via-gray-900/80 to-black/60' }`}>
        <button onClick={handleThemeToggle}
        className={`fixed top-4 right-4 px-4 py-2 rounded-md border transition duration-300 ${theme === "light"? 'bg-white/30 border-white/10 active:bg-white/20': 'bg-gray-700/20 border-white/10 backdrop:backdrop-blur-2xl text-white active:bg-gray-600/30'}`}>
        {theme==="light"? (<WiMoonAltWaningCrescent4 size={24} />) : <WiDaySunny size={24} />}
        </button>
        
        <form onSubmit={handleSubmit} 
              className={`px-6 py-10 w-3/4 lg:w-2/5 max-w-md border flex flex-col justify-center items-center gap-2 rounded-4xl shadow-lg space-y-4 ${theme === 'light' ? 'bg-white/10 text-black border-white/20 backdrop-blur-sm' : 'bg-black/30 backdrop:backdrop-blur-lg text-white border-gray-400/20' }`}
              >
                
          <h1 className="text-xl font-medium mb-8">Login form</h1>
          
          <input type="text"
                className={`outline-none p-4 w-full md:w-11/12 rounded-md focus:ring-1 ${theme === 'light' ? ' bg-black/10 focus:ring-white/30 text-black' : 'bg-black/30 text-white focus:ring-white/10'}`} 
                name="username"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                placeholder="Enter your username"
                />
                
          <button type="submit"
          className="px-4 py-2 mt-4 w-1/2 bg-blue-600/80 active:bg-blue-700/60 text-white rounded-md trasition duration-200"
          >
            Login
          </button>
          <small className="opacity-40 ">Login as a Demo User</small>
        </form>      
      </div>
    )
}