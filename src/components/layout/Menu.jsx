import ProfileAvatar from "../users/ProfileAvatar";
import { useContext} from 'react';
import { UserContext } from "../../App";
import { VscHome } from "react-icons/vsc";
import { VscGraphLine } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

export default function Menu({setPage}) {
  const User = useContext(UserContext);
  const { user } = User;
  console.log("User in Menu component is ", user);  
  
  const handleClick = (page) => {
    console.log("Button clicked");
    setPage(page);
  } 
  const style = `p-3 rounded-full active:bg-gray-300 transition duration-300`;
 

  return (
    <div className="flex justify-around items-center rounded-t-xl fixed bottom-0 right-0 w-full p-4 bg-white">
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