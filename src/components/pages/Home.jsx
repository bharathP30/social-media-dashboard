import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { UserContext } from "../../App";
import Menu from "../layout/Menu";
import RedditFeed from "../feed/redditFeed";



export default function Home({setTheme, setPage}) {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    
    console.log("User in Home component is ", user);
    console.log("Current theme in Home component is ", theme);

   return (
      <div className="absolute inset-0 bg-center bg-cover flex flex-col items-center justify-start min-h-screen">

        <div className={`w-full max-w-3xl mx-4 mt-8 mb-20 p-6 border rounded-3xl shadow-2xl backdrop-blur-lg
        ${
        theme === 'light' ? 'bg-white/20 border-white/20 backdrop-blur-md' : 'bg-gray-600/30 backdrop:backdrop-blur-2xl text-white border-white/10'
        }`}> 
         
        </div>

        <RedditFeed />
        <Menu setPage={setPage} />
      </div>
    )
}