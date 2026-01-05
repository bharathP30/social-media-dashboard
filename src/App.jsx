import { useState, useEffect, createContext } from "react";
import Login from "./components/Login";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import Profile from "./components/pages/Profile";
import darkBGD from './assets/images/darkBGD.jpg';
import pinkBGD from './assets/images/pinkBGD.jpg';
import useLocalStorage from "./components/functions/useLocalStorage";

export const ThemeContext = createContext();
export const UserContext = createContext();
export const PageContext = createContext();

export default function App() {
  const [user, setUser] = useLocalStorage("user", null);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [currentPage, setCurrentPage] = useState("home");
  
  console.log("name in App component are ", user?.username);

const [userInteractions, setUserInteractions] = useLocalStorage( `${user?.username || 'default'}_interactions`, {});
const [userPosts, setUserPosts] = useLocalStorage(`${user?.username || 'default'}`, []);

const handleLike = (postId) => {
  setUserInteractions(prev => ({
    ...prev,
    [postId]: {
      ...prev[postId],
      liked: !prev[postId]?.liked,
      likeCount: prev[postId]?.liked 
        ? (prev[postId]?.likeCount || 0) - 1 
        : (prev[postId]?.likeCount || 0) + 1
    }
  }));
};

const addComment = (postId, commentText) => {
  setUserInteractions(prev => ({
    ...prev,
    [postId]: {
      ...prev[postId],
      comments: [
        ...(prev[postId]?.comments || []),
        {
          id: Date.now(),
          text: commentText,
          author: user.username,
          timestamp: new Date().toISOString()
        }
      ]
    }
  }));
};

  const UserSet = (userData) => {
    setUser(userData);
    console.log("set User to " + userData);
  }
  const logout = (name) => {
    setUser(null);
    console.log("set User to " + name);
  }

  const clearAll = () => {
    console.log("Clearing all user data");
    setUserPosts([]);
    setUserInteractions({});
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
    <div className="w-full min-h-screen min-w-screen bg-cover bg-fixed bg-no-repeat"  style={{ backgroundImage: `url('${theme === 'light' ? pinkBGD : darkBGD}')` }}>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={{user, UserSet, clearAll, logout, userInteractions, handleLike, addComment, userPosts, setUserPosts}}>
          <PageContext.Provider value={currentPage}>
            {!user ? (<Login setUser={UserSet} setTheme={ThemeSet} />) 
            : (<div className="animate-in fade-in duration-300">
              {renderPage()}
                </div>)}
          </PageContext.Provider>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
