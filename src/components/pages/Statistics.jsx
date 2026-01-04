import { useContext } from "react";
import { ThemeContext, UserContext } from "../../App";
import { SlArrowLeft } from "react-icons/sl";

export default function Statistics({setTheme, setPage}) {
    const theme = useContext(ThemeContext);
    const {user} = useContext(UserContext);
    console.log("User in Statistics component is ", user);
    const cardStyle = `p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300 ${theme === 'light' ? 'bg-white/20 border-white/30 hover:shadow-black/20' : 'bg-black/50 border-white/20 hover:shadow-white/20'}`;
    const cardDataStyle1 = `text-sm font-thin ${theme === 'light' ? 'text-black' : 'text-white'}`;
    const cardDataStyle2 = `text-2xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`;

    const mockData = {
        totalPosts: 42,
        totalComments: 156,
        totalLikes: 2500,
        linkKarma: 2200,
        commentKarma: 3800,
        totalKarma: 6000,
        totalScore: 450,
        subscribers: 1000,  
    };


   return (
    <div className={`absolute inset-0 bg-center bg-cover flex flex-col items-center justify-center min-h-screen ${theme === 'light' && 'bg-black/30'}`}>
             <button
             className={`fixed top-4 left-4 px-4 py-2 rounded-md border transition duration-300 ${theme === "light"? 'bg-white/30 border-white/10 active:bg-white/20': 'bg-gray-700/20 border-white/10 backdrop-blur-2xl text-white active:bg-gray-600/30'}`}>
             <SlArrowLeft onClick={()=> setPage('home')} />
             </button>

        <div className={`relative grid grid-cols-2 md:grid-cols-4 gap-4 border p-6 rounded-3xl shadow-2xl ${theme === 'light' ? 'bg-white/10 border-white/20 backdrop-blur-sm' : 'bg-gray-800/40 backdrop:backdrop-blur-2xl text-white border-white/20'}`}>
        <div className={cardStyle}>
          <h3 className={cardDataStyle1}>Total Posts</h3>
          <p className={cardDataStyle2}>{mockData.totalPosts}</p>
        </div>
        <div className={cardStyle}>
          <h3 className={cardDataStyle1}>Total Comments</h3>
          <p className={cardDataStyle2}>{mockData.totalComments}</p>
        </div>
        <div className={cardStyle}>
          <h3 className={cardDataStyle1}>Total Likes</h3>
          <p className={cardDataStyle2}>{mockData.totalLikes}</p>
        </div>
        <div className={cardStyle}>
          <h3 className={cardDataStyle1}>Subscribers</h3>
          <p className={cardDataStyle2}>{mockData.subscribers}</p>
        </div>
        <div className={cardStyle}>
          <h3 className={cardDataStyle1}>Link Karma</h3>
          <p className={cardDataStyle2}>{mockData.linkKarma}</p>
        </div>
        <div className={cardStyle}>
          <h3 className={cardDataStyle1}>Comment Karma</h3>
          <p className={cardDataStyle2}>{mockData.commentKarma}</p>
        </div>
      </div>

    </div>
    )
}