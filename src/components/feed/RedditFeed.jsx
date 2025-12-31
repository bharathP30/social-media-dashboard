import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { ThemeContext } from "../../App";
import FeedItem from './FeedItem';

export default function RedditFeed(){
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useContext(ThemeContext); 

  useEffect(() => {
    fetch('https://www.reddit.com/r/funny.json?limit=10')
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.children.map(child => child.data));
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>;

  return (
    <div className={`w-full max-w-3xl max-h-xl mx-4 mt-8 mb-20 p-6 border rounded-3xl shadow-2xl backdrop-blur-lg
        ${
        theme === 'light' ? 'bg-white/20 border-white/20 backdrop-blur-md' : 'bg-gray-600/30 backdrop:backdrop-blur-2xl text-white border-white/10'
        }`}>

         <h2 className="text-2xl font-bold mb-4 text-gray-800">Latest</h2>
      {posts.map(post => (
        <FeedItem key={post.id} ups={post.ups} nums={post.num_comments} title={post.title} content={post.selftext} />
       
      ))}
    </div>
  );
};