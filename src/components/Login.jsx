import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Login({setUser}){
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length === 0) return;
        console.log(name);
        setUser(name);
    }   

    const theme = useContext(ThemeContext);
    console.log("Current theme in Login component is ", theme);

   return (
      <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-linear-to-tr from-purple-500 via-pink-400 to-blue-500' : 'bg-linear-to-tr from-black via-gray-900/90 to-black' }`}>
        <button className={`fixed top-4 right-4 px-4 py-2 rounded-md border transition duration-300 ${theme === "light"? 'bg-white/30 border-white/10 active:bg-white/20': 'bg-gray-700/20 border-white/10 backdrop:backdrop-blur-2xl text-white active:bg-gray-600/30'}`}>
        {theme==="light"? "Dark" : "Light"}
        </button>
        
        <form onSubmit={handleSubmit} 
              className={`px-6 py-10 border flex flex-col justify-center items-center rounded-4xl shadow-lg space-y-4 ${theme === 'light' ? 'bg-white/20 text-black border-white/10 backdrop-blur-lg' : 'bg-black/30 backdrop:backdrop-blur-2xl text-white border-gray-400/20' }`}
              >
                
          <h1 className="text-xl font-medium mb-8">Login form</h1>
          
          <input type="text"
                className={`outline-none p-2 rounded-md focus:ring-1 ${theme === 'light' ? ' bg-gray-100/50 focus:ring-white/50 text-black' : 'bg-black/30 text-white focus:ring-white/10'}`} 
                name="username"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                />
                
          <button type="submit"
          className="px-4 py-2 mt-4 w-1/2 bg-blue-600/80 active:bg-blue-700/60 text-white rounded-md trasition duration-200"
          >
            Login
          </button>
          <small className="opacity-30">Login as a Demo User</small>
        </form>
        
      </div>
    )
}