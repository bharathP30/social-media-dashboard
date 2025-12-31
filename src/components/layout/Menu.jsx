import ProfileAvatar from "../users/ProfileAvatar";
import { useContext} from 'react';
import { UserContext } from "../../App";
import { ThemeContext } from "../../App";
import { VscHome } from "react-icons/vsc";
import { VscGraphLine } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

export default function Menu({setPage}) {
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
        <button
              className={style}
              
        ><VscAdd /></button>
        <button
              className={style}
              onClick={()=> handleClick('stats')}
        ><VscGraphLine /></button>
        <ProfileAvatar name={user} size="sm" onClick={()=> handleClick('profile')}/>
    </div>
  );
}