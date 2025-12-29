import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { UserContext } from "../../App";
import Menu from "../layout/Menu";

export default function Home() {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    
    console.log("User in Home component is ", user);
    console.log("Current theme in Home component is ", theme);

   return (
      <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-linear-to-tr from-purple-500 via-pink-400 to-blue-500' : 'bg-linear-to-tr from-black via-gray-900/90 to-black' }`}>
        <button
        className={`fixed top-4 right-4 px-4 py-2 rounded-md border transition duration-300 ${theme === "light"? 'bg-white/30 border-white/10 active:bg-white/20': 'bg-gray-700/20 border-white/10 backdrop:backdrop-blur-2xl text-white active:bg-gray-600/30'}`}>
        </button>
        
        <Menu />
      </div>
    )
}