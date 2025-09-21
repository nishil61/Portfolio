import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const LikeButtonSimple = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simple localStorage-based persistence with timestamp validation
  const GLOBAL_STORAGE_KEY = 'nishil_portfolio_total_likes';
  const USER_LIKED_KEY = 'nishil_portfolio_user_status';
  const LIKES_VERSION = 'v1'; // Version to reset if needed

  useEffect(() => {
    initializeLikes();
  }, []);

  const initializeLikes = () => {
    try {
      // Check if user has already liked
      const userStatus = localStorage.getItem(`${USER_LIKED_KEY}_${LIKES_VERSION}`);
      if (userStatus === 'true') {
        setHasLiked(true);
      }

      // Get global likes count with validation
      const storedLikes = localStorage.getItem(`${GLOBAL_STORAGE_KEY}_${LIKES_VERSION}`);
      let likesCount = 0;

      if (storedLikes) {
        try {
          const likesData = JSON.parse(storedLikes);
          // Validate the data structure and use the count
          if (likesData && typeof likesData.count === 'number' && likesData.count >= 0) {
            likesCount = likesData.count;
          }
        } catch (parseError) {
          console.log('Invalid likes data, starting fresh');
          // Reset corrupted data
          localStorage.removeItem(`${GLOBAL_STORAGE_KEY}_${LIKES_VERSION}`);
        }
      }

      setLikes(likesCount);
    } catch (error) {
      console.error('Error initializing likes:', error);
      setLikes(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = () => {
    if (!hasLiked && !isLoading) {
      setIsAnimating(true);
      
      const newLikesCount = likes + 1;
      
      // Update state immediately
      setLikes(newLikesCount);
      setHasLiked(true);
      
      // Store user's like status
      localStorage.setItem(`${USER_LIKED_KEY}_${LIKES_VERSION}`, 'true');
      
      // Store global likes count with metadata
      const likesData = {
        count: newLikesCount,
        timestamp: Date.now(),
        version: LIKES_VERSION
      };
      localStorage.setItem(`${GLOBAL_STORAGE_KEY}_${LIKES_VERSION}`, JSON.stringify(likesData));
      
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
        disabled={hasLiked || isLoading}
        className={`group flex items-center space-x-3 px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
          hasLiked
            ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white cursor-default'
            : isLoading
            ? 'bg-gray-300 text-gray-500 cursor-wait'
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
            {isLoading ? 'Loading...' : hasLiked ? 'Liked!' : 'Like this portfolio'}
          </span>
          <span className="text-xs opacity-75">
            {isLoading ? '...' : `${likes} ${likes === 1 ? 'like' : 'likes'}`}
          </span>
        </div>
      </button>
    </div>
  );
};

export default LikeButtonSimple;