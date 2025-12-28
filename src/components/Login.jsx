import { useState } from "react";

export default function Login({setUser}){
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length === 0) return;
        console.log(name);
        setUser(name);
    }   

   return (
      <div className="w-full min-h-screen flex items-center justify-center bg-linear-to-tr from-purple-500 via-pink-400 to-blue-500">
        <form onSubmit={handleSubmit} 
              className="px-6 py-10 bg-white/20 border-white/30 backdrop-blur-lg flex flex-col justify-center items-center rounded-4xl shadow-lg space-y-4"
              >
                
          <h1 className="text-xl font-medium mb-8">Login form</h1>
          
          <input type="text"
                className="bg-gray-100/50 outline-none p-2 rounded-md focus:ring-1 focus:ring-white/50" 
                name="username"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                />
                
          <button type="submit"
          className="px-4 py-2 mt-4 w-1/2 bg-blue-600/80 active:bg-blue-700 text-white rounded-md trasition duration-200"
          >
            Login
          </button>
          <small className="opacity-30">Login as a Demo User</small>
        </form>
        
      </div>
    )
}