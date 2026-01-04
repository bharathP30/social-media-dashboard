import { TiThumbsUp, TiMessage, TiArrowBackOutline, TiArrowForwardOutline } from "react-icons/ti";
import { useState, useContext } from "react";
import { UserContext,ThemeContext } from "../../App";

export default function FeedItem({id, ups, nums, title, content }) {
  const [showMsg, setShowMsg] = useState(false);
  const theme = useContext(ThemeContext);
  const [commentText, setCommentText] = useState('');
  const {userInteractions, handleLike, addComment} = useContext(UserContext);

  const postInteraction = userInteractions?.[id] || {};
  const isLiked = postInteraction.liked || false;
  const likeCount = ups + (postInteraction.likeCount || 0);
  const userComments = postInteraction.comments || [];
  const totalComments = nums + userComments.length;

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      addComment(id, commentText);
      setCommentText('');
    }
  };

  const cardClasses = `w-full max-w-3xl p-2 border rounded-md shadow-2xl backdrop-blur-lg
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
          <button onClick={() => handleLike(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-gray-400/50 transition duration-200 `}>
            <TiThumbsUp className={`${
              isLiked 
                ? 'text-blue-500' 
                : 'text-gray-400/50'
            }`}  />
            <span>{likeCount}</span>
          </button>

          <button
            onClick={() => setShowMsg(prev => !prev)}
            className="flex items-center px-4 py-2 rounded-full border border-gray-400/50 active:bg-black/10 transition duration-200"
          >
            <TiMessage className="text-lg" />
            <span>{totalComments}</span>
          </button>
        </div>

      
        <button className="p-3 rounded-full border border-gray-400/50 active:bg-black/10 transition duration-200">
          <TiArrowForwardOutline className="text-xl" />
        </button>
      </div>

   
      {showMsg && (
        <div className={commentBoxClasses}>

           {userComments.length > 0 && (
            <div className="mb-4 space-y-2">
              <p className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                My Comments:
              </p>
              {userComments.map((comment) => (
                <div 
                  key={comment.id}
                  className={`p-3 rounded-lg ${theme === 'light' ? 'bg-white/30' : 'bg-gray-700/30'}`}
                >
                  <p className={`text-sm ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                    <span className="font-semibold">{comment.author}:</span> {comment.text}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(comment.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Write a comment..."
              className={inputClasses}
              
            />
            <button className="p-3 rounded-full border border-gray-400/50 active:bg-black/10 transition duration-200"
              onClick={handleCommentSubmit} 
              disabled={!commentText.trim()}
              >
              <TiArrowBackOutline className="text-xl"/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}