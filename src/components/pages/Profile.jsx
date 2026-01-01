import { useState, useContext } from "react";
import { ThemeContext, UserContext, PageContext } from "../../App";
import { SlArrowLeft } from "react-icons/sl";
import { WiDaySunny, WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { VscAccount, VscAdd, VscSignOut, VscGraphLine, VscSettingsGear } from "react-icons/vsc";
import ProfileAvatar  from "../users/ProfileAvatar";

export default function Profile({setTheme, setPage}) {
    const theme = useContext(ThemeContext);
    const {user ,logout} = useContext(UserContext);
    const page = useContext(PageContext);
    const [showAccount, setShowAccount] = useState(false);
    
   console.log("User in Profile component is ", user);

   return (
      <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-linear-to-tr from-purple-500/30 via-black/50 to-purple-500/30' : 'bg-linear-to-tr from-black/40 via-gray-900/80 to-black' }`}>
       
        <button
        className={`fixed top-4 left-4 px-4 py-2 rounded-md border transition duration-300 ${
          theme === "light"
            ? 'bg-white/20 border-white/10 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm' 
            : 'bg-gray-700/20 border-white/10 backdrop-blur-md text-white hover:bg-gray-600/30 active:bg-gray-600/40'
        }`}>
          <SlArrowLeft onClick={()=> setPage('home')} />
        </button>

        <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
       className={`fixed top-4 right-4 px-4 py-2 rounded-md border transition duration-300 ${
          theme === "light"
            ? 'bg-white/20 border-white/10 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm' 
            : 'bg-gray-700/20 border-white/10 backdrop-blur-md text-white hover:bg-gray-600/30 active:bg-gray-600/40'
        }`}>
       { theme === 'light' ? <WiMoonAltWaningCrescent4 size={24} /> : <WiDaySunny size={24} /> }
        </button>

        <div className={`w-full max-w-md mx-4 p-8 rounded-3xl shadow-2xl border ${
        theme === 'light' 
          ? 'bg-white/20 border-white/10 text-gray-900  backdrop-blur-sm' 
          : 'bg-black/20 border-gray-400/20 text-white  backdrop-blur-sm'
      }`}>
            <div className="flex flex-col items-center gap-4 mb-8">
            <ProfileAvatar name={user} size="xxl"/>
            <h2 className="text-2xl text-center font-medium font-sans mb-4">{user.charAt(0).toUpperCase() + user.slice(1)}</h2>
            </div> 
            
            <ul className="space-y-4 w-full text-center font-sans font-medium">

            <li onClick={()=> setShowAccount(!showAccount)}
              className={`px-4 py-3 rounded-lg transition duration-300 cursor-pointer ${
              theme === 'light'
                ? 'bg-white/20 hover:bg-white/30 active:bg-white/40'
                : 'bg-gray-700/30 hover:bg-gray-700/40 active:bg-gray-700/50'
            }`}>

              <div className="flex items-center gap-3 font-medium">
              <VscAccount />
              <span>Account</span>
              </div>

              {showAccount && (
              <div className={`mt-3 p-3 rounded-lg flex items-center gap-2 ${
                theme === 'light' 
                  ? 'bg-black/10' 
                  : 'bg-black/30'
              }`}>
                <VscAdd />
                <span className="text-sm">Add new Account</span>
              </div>
              )} 
            </li>

            <li onClick={()=> setPage('stats')}
              className={`px-4 py-3 rounded-lg transition duration-300 cursor-pointer ${
              theme === 'light'
                ?'bg-white/20 hover:bg-white/30 active:bg-white/40'
                : 'bg-gray-700/30 hover:bg-gray-700/40 active:bg-gray-700/50'
            }`}>
              <div className="flex items-center gap-3 font-medium">
              <VscGraphLine />
              <span>Analytics</span>
              </div>
            </li>

            <li
            className={`px-4 py-3 rounded-lg transition duration-300 cursor-pointer ${
              theme === 'light'
                ? 'bg-white/20 hover:bg-white/30 active:bg-white/40'
                : 'bg-gray-700/30 hover:bg-gray-700/40 active:bg-gray-700/50'
            }`}
            >
              <div className="flex items-center gap-3 font-medium">
              <VscSettingsGear />
              <span>Settings</span>
              </div>
            </li>

            <li 
              onClick={()=> {
              logout();
              setPage('home');
              window.location.reload();
              }}
              className={`px-4 py-3 rounded-lg transition duration-300 cursor-pointer border ${
              theme === 'light'
                ? 'bg-red-500/20 hover:bg-red-500/30 active:bg-red-500/40 border-red-400/30 text-red-700'
                : 'bg-red-500/20 hover:bg-red-500/30 active:bg-red-500/40 border-red-400/30 text-red-400'
              }`}
            >
                <div className="flex items-center gap-3 font-medium">
                <VscSignOut />
                <span>Sign out</span>
                </div>
            </li>

            </ul>
        </div> 
      </div>
    )
}