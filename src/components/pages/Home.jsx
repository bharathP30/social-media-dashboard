import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { UserContext } from "../../App";
import Menu from "../layout/Menu";

export default function Home({setTheme, setPage}) {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    
    console.log("User in Home component is ", user);
    console.log("Current theme in Home component is ", theme);

   return (
      <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-linear-to-tr from-purple-500 via-pink-400 to-blue-500' : 'bg-linear-to-tr from-black via-gray-900/90 to-black' }`}>
        

        <Menu setPage={setPage} />
      </div>
    )
}