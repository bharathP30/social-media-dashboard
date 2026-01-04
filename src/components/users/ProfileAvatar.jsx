const ProfileAvatar = ({ name = 'User', imageUrl, size = 'md', onClick, className = '' }) => {
  console.log('name in ProfileAvatar is ', name);
  const userName = typeof name === 'object' ? name?.username : 'User';
  const userPhoto = typeof name === 'object' ? name?.photo : imageUrl;
  console.log('userName in ProfileAvatar is ', userName);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-24 h-24 text-4xl',
    xxl: 'w-32 h-32 text-5xl',
  };

  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

    const image = userPhoto;
    console.log("initials are ", initials);
 
  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
      'bg-gradient-to-tr from-blue-600 to-blue-300',
      'bg-gradient-to-tr from-green-600 to-green-300',
      'bg-gradient-to-tr from-purple-600 to-purple-300',
      'bg-gradient-to-tr from-pink-600 to-pink-300',
      'bg-gradient-to-tr from-yellow-600 to-yellow-300',
      'bg-gradient-to-tr from-red-600 to-red-300',
      'bg-gradient-to-tr from-indigo-600 to-indigo-300',
      'bg-gradient-to-tr from-teal-600 to-teal-300',
    ];
    return colors[Math.abs(hash % colors.length)];
  };

  const bgColor = stringToColor(userName);

  const handleClick = () => {
    console.log("Profile avatar clicked");
    onClick && onClick();
    };

  return (
    <div onClick={handleClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${sizeClasses[size]} ${bgColor} ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={"Photo of " + userName}
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