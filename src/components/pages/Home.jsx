import { useState, useContext, useEffect } from "react";
import { ThemeContext, UserContext } from "../../App";
import Menu from "../layout/Menu";
import RedditFeed  from "../feed/RedditFeed";

export default function Home({setTheme, setPage}) {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    const [time, setTime] = useState("");
    const date = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    useEffect(() => {
      const startTime = setInterval(() => {
         setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(startTime);
    }, []);

    console.log("User in Home component is ", user);
    console.log("Current theme in Home component is ", theme);

   return (
      <div className={`absolute inset-0 bg-center bg-cover flex flex-col items-center justify-start min-h-screen ${theme === 'light' && 'bg-black/30'}`}>

        <div className={`w-full max-w-3xl mx-4 mt-8 mb-20 px-4 py-2 border rounded-full shadow-2xl font-thin flex justify-between items-center
        ${
        theme === 'light' ? 'bg-white/20 text-black/50 border-white/20 backdrop-blur-md' : 'bg-gray-600/30 backdrop-blur-2xl text-white/50 border-white/10'
        }`}> 
          <p>{date}</p> <p>{time}</p> 
        </div>

        <RedditFeed />
        <Menu setPage={setPage} />
      </div>
    )
}