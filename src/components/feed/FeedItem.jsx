import { TiThumbsUp, TiMessage, TiArrowBackOutline, TiArrowForwardOutline } from "react-icons/ti";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";

export default function FeedItem({ ups, nums, title, content }) {
  const [showMsg, setShowMsg] = useState(false);
  const theme = useContext(ThemeContext);

  const cardClasses = `w-full max-w-3xl border rounded-md shadow-2xl backdrop-blur-lg
    ${theme === 'light' 
      ? 'bg-white/20 border-white/30 text-black font-thin' 
      : 'bg-black/30 border-white/20 text-white font-thin'
    }`;

  const commentBoxClasses = `mt-4 p-4 rounded-lg border backdrop-blur-md
    ${theme === 'light' 
      ? 'bg-white/20 border-white/30' 
      : 'bg-gray-800/30 border-white/20'
    }`;

  const inputClasses = `w-full p-3 rounded-md outline-none transition-colors
    ${theme === 'light' 
      ? 'bg-white/80 text-black placeholder-gray-500' 
      : 'bg-gray-700/70 text-white placeholder-gray-400'
    }`;

  return (
    <div className={cardClasses}>
      <h3 className={`text-md font-md ${theme === 'light' ? 'text-black/50' : 'text-white/50'}`}>
        {title}
      </h3>
      
      <p className={`mt-2 mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
        {content?.slice(0, 150)} {content?.length > 150 && '...'}
      </p>

      <div className="flex justify-between items-center mt-6">
      
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 rounded-full border border-gray-400/50 active:bg-black/10 transition duration-200">
            <TiThumbsUp className="text-lg" />
            <span>{ups}</span>
          </button>

          <button
            onClick={() => setShowMsg(prev => !prev)}
            className="flex items-center px-4 py-2 rounded-full border border-gray-400/50 active:bg-black/10 transition duration-200"
          >
            <TiMessage className="text-lg" />
            <span>{nums}</span>
          </button>
        </div>

      
        <button className="p-3 rounded-full border border-gray-400/50 active:bg-black/10 transition duration-200">
          <TiArrowForwardOutline className="text-xl" />
        </button>
      </div>

   
      {showMsg && (
        <div className={commentBoxClasses}>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Write a comment..."
              className={inputClasses}
            />
            <button className="p-3 rounded-full border border-gray-400/50 active:bg-black/10 transition duration-200">
              <TiArrowBackOutline className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}