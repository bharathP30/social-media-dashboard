import { useState,useContext } from "react";
import { ThemeContext } from "../App";
import { WiDaySunny, WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { VscDeviceCameraVideo } from "react-icons/vsc";

export default function Login({setUser, setTheme}) {
    const [name, setName] = useState("");
    const [photoPreview, setPhotoPreview] = useState(null);
    const [photoFile, setPhotoFile] = useState(null);
    const theme = useContext(ThemeContext);
    console.log("Current theme in Login component is ", theme);

    const handlePicChange = (e) => {
        const file = e.target.files[0];
       if (file) {
            setPhotoFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length === 0) return;
        console.log(name);

        const data = {
            username: name,
            photo: photoPreview,
        };

        setUser(data);
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
          
          <div className="flex flex-col items-center gap-3 mb-4">
                <div className="relative">
                  {photoPreview ? (
                    <img 
                    src={photoPreview} 
                    alt="Profile Preview" 
                    className="w-24 h-24 rounded-full object-cover border-2 border-white/30" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-300 border-2 border-white/30 flex items-center justify-center">
                      <VscDeviceCameraVideo size={24} className="text-gray-500" />
                    </div>
                  )}
               
                          <label 
                            htmlFor="photo-upload"
                            className="absolute -bottom-1 -right-1 bg-blue-500 hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition shadow-lg"
                            >
                          <span className="text-white text-xl font-bold">+</span>
                          </label>
    
                    <input 
                        id="photo-upload"
                        type="file" 
                        accept="image/*"
                        onChange={handlePicChange}
                        className="hidden"
                      />
                </div>
          </div>

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