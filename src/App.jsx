import { useState, useEffect, createContext, useContext } from "react";
import Header from "./components/layout/Header";
import Login from "./components/Login";

const ThemeContext = createContext();
const UserContext = createContext();



export default function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");


  if (!user) {
    return <Login setUser={(name) => setUser(name)} />;
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
