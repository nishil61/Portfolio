import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedLikes = localStorage.getItem('portfolioLikes');
    const userHasLiked = localStorage.getItem('userHasLiked');
    
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    } else {
      setLikes(0);
      localStorage.setItem('portfolioLikes', '0');
    }
    
    if (userHasLiked === 'true') {
      setHasLiked(true);
    }
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      setIsAnimating(true);
      localStorage.setItem('portfolioLikes', newLikes.toString());
      localStorage.setItem('userHasLiked', 'true');
      setTimeout(() => {
        setIsAnimating(false);
        window.alert('Thank you for liking my portfolio! I appreciate your support.');
      }, 600);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        onClick={handleLike}
        disabled={hasLiked}
        className={`group flex items-center space-x-3 px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
          hasLiked
            ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white cursor-default'
            : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:text-white'
        } ${isAnimating ? 'animate-pulse scale-110' : ''}`}
      >
        <Heart 
          size={24} 
          className={`transition-all duration-300 ${
            hasLiked ? 'fill-current' : 'group-hover:fill-current'
          } ${isAnimating ? 'animate-bounce' : ''}`} 
        />
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">
            {hasLiked ? 'Liked!' : 'Like this portfolio'}
          </span>
          <span className="text-xs opacity-75">
            {likes} {likes === 1 ? 'like' : 'likes'}
          </span>
        </div>
      </button>
    </div>
  );
};

export default LikeButton;