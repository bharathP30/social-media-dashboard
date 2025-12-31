import React, { useState, useEffect } from 'react';
import { CircleLoader } from 'react-spinners';

export default function RedditFeed(){
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Latest Funny Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
          <h3 className="text-lg font-semibold text-blue-600">{post.title}</h3>
          <p className="text-gray-600 mt-2 truncate">{post.selftext?.slice(0, 100)}...</p>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>👍 {post.ups} upvotes</span>
            <span>💬 {post.num_comments} comments</span>
          </div>
        </div>
      ))}
    </div>
  );
};