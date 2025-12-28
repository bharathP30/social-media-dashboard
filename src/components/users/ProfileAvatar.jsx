import React from 'react';

const ProfileAvatar = ({ name = 'User', imageUrl, size = 'md', className = '' }) => {
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-24 h-24 text-4xl',
  };

  
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

 
  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-teal-500',
    ];
    return colors[Math.abs(hash % colors.length)];
  };

  const bgColor = stringToColor(name);

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${sizeClasses[size]} ${bgColor} ${className}`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'; 
          }}
        />
      ) : (
        <span className="font-medium text-white">{initials}</span>
      )}
    </div>
  );
};

export default ProfileAvatar;