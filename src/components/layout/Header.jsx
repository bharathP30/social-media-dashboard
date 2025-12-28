import ProfileAvatar from "../users/ProfileAvatar";
import { useContext} from 'react';
import { UserContext } from "../../App";

export default function Header() {
  const user = useContext(UserContext);
  
  return (
    <header className="flex justify-between items-center sticky top-0 left-0 w-full p-6 bg-white z-10">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <ProfileAvatar name={user} size="md" />
    </header>
  );
}