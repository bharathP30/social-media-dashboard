import { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext, ThemeContext } from "../../App";
import FeedItem from './FeedItem';

export default function RedditFeed(){
  const { userPosts } = useContext(UserContext);
  const [posts, setPosts] = useState(userPosts || []);
  const [loading, setLoading] = useState(true);
  const theme = useContext(ThemeContext); 
  
  
  useEffect(() => {
    fetch('https://www.reddit.com/r/funny.json?limit=5')
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.children.map(child => child.data));
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return (
  <div className="flex justify-center items-center min-h-100">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

  return (
    <div className={`w-full h-full max-w-3xl max-h-auto overflow-y-auto p-4 mx-auto mb-20 space-y-4 md:p-6 border rounded-3xl shadow-2xl
        ${
        theme === 'light' ? 'bg-white/20 border-white/30 backdrop-blur-md' : 'bg-black/30 backdrop-blur-2xl text-white border-white/10'
        }`}>

         <h2 className={`text-2xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white/80'}`}>
          Latest
        </h2>
      {posts.map(post => (
        <FeedItem key={post.id} id={post.id} ups={post.ups} nums={post.num_comments} title={post.title} content={post.selftext} />
       
      ))}
    </div>
  );
};