import { useState } from "react";

export default function Login(setUser){
    const [name, setName] = useState(null);
    const handleSubmit = () => {
        if (name.trim().length === 0) return;
        setUser(name);
    }   
   return (
      <div className="w-full min-h-screen flex items-center justify-center bg-black/30">
        <form onSubmit={handleSubmit} 
              className="px-6 py-10 bg-gray-200 flex flex-col justify-center items-center rounded-4xl shadow-lg space-y-4">
          
          <h1 className="text-xl font-medium mb-8">Login form</h1>
          
          <input type="text"
                className="bg-gray-100 outline-none p-2 rounded-md focus:ring-2 focus:ring-blue-300" 
                name="username"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                />
                
          <button type="submit"
          className="px-4 py-2 mt-4 bg-blue-600 text-white rounded"
          >
            Login
          </button>
          <small className="opacity-30">Login as a Demo User</small>
        </form>
        
      </div>
    )
}