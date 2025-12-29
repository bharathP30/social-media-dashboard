import ProfileAvatar from "../users/ProfileAvatar";
import { useContext} from 'react';
import { UserContext } from "../../App";
import { VscHome } from "react-icons/vsc";
import { VscGraphLine } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

export default function Menu() {
  const user = useContext(UserContext);
  const handleClick = () => {
    console.log("Button clicked");
  } 
  const style = `p-3 rounded-full active:bg-gray-300 transition duration-300`;
   
  return (
    <div className="flex justify-around items-center rounded-t-xl fixed bottom-0 right-0 w-full p-4 bg-white">
        <button
              className={style}
              onClick={handleClick}
        ><VscHome /></button>
        <button
              className={style}
              onClick={handleClick}
        ><VscAdd /></button>
        <button
              className={style}
              onClick={handleClick}
        ><VscGraphLine /></button>
        <ProfileAvatar name={user} size="sm" />
    </div>
  );
}