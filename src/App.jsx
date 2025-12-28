import { useState, useEffect, createContext, useContext } from "react";
import Header from "./components/layout/Header";
import Login from "./components/Login";

export const ThemeContext = createContext();
export const UserContext = createContext();



export default function App() {
  const [user, setUser] = useState("");
  const [theme, setTheme] = useState("light");
  const UserSet = (name) => {
    setUser(name);
    console.log("set user to " + name)
  }

  if (!user) {
    return <Login setUser={UserSet} />;
  }
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>

          <Header />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
