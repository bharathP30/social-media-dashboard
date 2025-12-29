import { useState, useEffect, createContext, useContext } from "react";
import Login from "./components/Login";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import Profile from "./components/pages/Profile";

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
  const [user, setUser] = useLocalStorage("user", null);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [posts, setPosts] = useLocalStorage(user ? `${user}-posts` : "posts", []);
  const [currentPage, setCurrentPage] = useState("home");

  const UserSet = (name) => {
    setUser(name);
    console.log("set User to " + name);
  }
  const logout = (name) => {
    setUser(null);
    console.log("set User to " + name);
  }

  const ThemeSet = (theme) => {
    setTheme(theme);
  };

  const PageSet = (page) => {
    setCurrentPage(page);
  };  

  console.log("Current page is ", currentPage);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setTheme={ThemeSet} setPage={PageSet} />;
      case 'stats':
        return <Statistics setTheme={ThemeSet} setPage={PageSet} />;
      case 'profile':
        return <Profile setTheme={ThemeSet} setPage={PageSet} />;
      default:
        return <Home setTheme={ThemeSet} setPage={PageSet} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200">
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          {!user ? (<Login setUser={UserSet} setTheme={ThemeSet} />) : (renderPage())}
         
         
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
