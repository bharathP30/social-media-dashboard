import { useState, useEffect, createContext, useContext } from "react";
import Header from "./components/layout/Header";
import Login from "./components/Login";

export const ThemeContext = createContext();
export const UserContext = createContext();

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.log(error);
      }
    }
  }, [key, storedValue, isLoaded]);

  return [storedValue, setStoredValue];
};




export default function App() {
  const [user, setUser] = useState("");
  const [theme, setTheme] = useState("light");
  const [posts, setPosts] = useLocalStorage(user ? `${user}-posts` : "posts", []);

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
