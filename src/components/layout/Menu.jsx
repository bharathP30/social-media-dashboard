import ProfileAvatar from "../users/ProfileAvatar";
import { useState, useContext} from 'react';
import { UserContext, ThemeContext } from "../../App";
import { VscHome, VscGraphLine, VscAdd } from "react-icons/vsc";
import Modal from "./Modal";

export default function Menu({setPage}) {
  const [showModal, setShowModal] = useState(false);
  const User = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const { user } = User;
  console.log("User in Menu component is ", user);  
  
  const handleClick = (page) => {
    console.log("Button clicked");
    setPage(page);
  } 
  const style = `p-3 rounded-full active:bg-white/10 transition duration-300`;
 

  return (
   <>
      <div className={` flex justify-around items-center border rounded-full fixed bottom-2 left-0 right-0 mx-auto w-full md:max-w-md md:right-auto md:left-auto p-2
      ${
          theme === "light"
            ? 'bg-white/20 border-white/20 backdrop-blur-md' 
            : 'bg-gray-600/30 backdrop:backdrop-blur-2xl text-white border-white/10'
      }`}>
        <button
              className={style}
              onClick={()=> handleClick('home')}
        ><VscHome /></button>

        <button onClick={()=>setShowModal(prev => !prev)}
              className={style}
              
        ><VscAdd /></button>

        <button
              className={style}
              onClick={()=> handleClick('stats')}
        ><VscGraphLine /></button>
        <ProfileAvatar name={user} size="sm" onClick={()=> handleClick('profile')}/>
    </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-bold mb-4 text-white">Create Post</h2>
        
        <textarea 
          className="w-full p-3 rounded-lg bg-white/20 border border-white/10 text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-white/30"
          placeholder="What's on your mind?"
          rows="4"
        />
        
        <div className="flex gap-3 mt-4">
          <button 
            onClick={() => setShowModal(false)}
            className="flex-1 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition"
          >
            Cancel
          </button>
          <button 
            onClick={() => {            
              setShowModal(false);
            }}
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition"
          >
            Post
          </button>
        </div>
      </Modal>
   </>

  );
}