import { TiThumbsUp, TiMessage, TiArrowBackOutline, TiArrowForwardOutline } from "react-icons/ti";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";

export default function FeedItem({ ups, nums, title, content }) {
  const [showMsg, setShowMsg] = useState(false);
  const theme = useContext(ThemeContext);

  const cardClasses = `w-full max-w-3xl mx-4 mt-8 mb-20 p-6 border rounded-3xl shadow-2xl backdrop-blur-lg
    ${theme === 'light' 
      ? 'bg-white/30 border-white/40' 
      : 'bg-gray-800/30 border-white/20 text-white'
    }`;

  const commentBoxClasses = `mt-4 p-4 rounded-lg border backdrop-blur-md
    ${theme === 'light' 
      ? 'bg-white/30 border-white/40' 
      : 'bg-gray-800/30 border-white/20'
    }`;

  const inputClasses = `w-full p-3 rounded-md outline-none transition-colors
    ${theme === 'light' 
      ? 'bg-white/80 text-black placeholder-gray-500' 
      : 'bg-gray-700/70 text-white placeholder-gray-400'
    }`;

  return (
    <div className={cardClasses}>
      <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`}>
        {title}
      </h3>
      
      <p className={`mt-2 mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
        {content?.slice(0, 150)} {content?.length > 150 && '...'}
      </p>

      <div className="flex justify-between items-center mt-6">
      
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 px-4 py-2 rounded-full border border-gray-400/50 hover:bg-black/10 transition active:scale-95">
            <TiThumbsUp className="text-lg" />
            <span>{ups}</span>
          </button>

          <button
            onClick={() => setShowMsg(prev => !prev)}
            className="flex items-center space-x-1 px-4 py-2 rounded-full border border-gray-400/50 hover:bg-black/10 transition active:scale-95"
          >
            <TiMessage className="text-lg" />
            <span>{nums}</span>
          </button>
        </div>

      
        <button className="p-3 rounded-full border border-gray-400/50 hover:bg-black/10 transition active:scale-95">
          <TiArrowForwardOutline className="text-xl" />
        </button>
      </div>

   
      {showMsg && (
        <div className={commentBoxClasses}>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Write a comment..."
              className={inputClasses}
            />
            <button className="p-3 rounded-full border border-gray-400/50 hover:bg-black/10 transition active:scale-95">
              <TiArrowBackOutline className="text-xl rotate-180" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}