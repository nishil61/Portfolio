import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Firebase Realtime Database configuration
  const USER_LIKED_KEY = 'nishil_portfolio_user_liked_global';
  
  // Get Firebase URL from environment variables (secure)
  const FIREBASE_DATABASE_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL;
  const FIREBASE_ENDPOINT = `${FIREBASE_DATABASE_URL}/portfolio_likes.json`;

  useEffect(() => {
    initializeGlobalLikes();
  }, []);

  const initializeGlobalLikes = async () => {
    try {
      // Check if user has already liked in this browser
      const userHasLiked = localStorage.getItem(USER_LIKED_KEY);
      if (userHasLiked === 'true') {
        setHasLiked(true);
      }

      // Fetch global count from Firebase
      try {
        const response = await fetch(FIREBASE_ENDPOINT);
        if (response.ok) {
          const data = await response.json();
          const globalCount = data?.count || 0;
          setLikes(globalCount);
          console.log('✅ Global likes loaded from Firebase:', globalCount);
        } else {
          console.log('⚠️ Firebase response error:', response.status);
          setLikes(0);
        }
      } catch (error) {
        console.error('❌ Failed to fetch from Firebase:', error);
        console.log('🔧 Make sure you have set up Firebase Realtime Database');
        setLikes(0);
      }

    } catch (error) {
      console.error('Error initializing global likes:', error);
      setLikes(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async () => {
    if (!hasLiked && !isLoading) {
      setIsAnimating(true);
      
      const newGlobalCount = likes + 1;
      
      // Optimistically update UI
      setLikes(newGlobalCount);
      setHasLiked(true);
      localStorage.setItem(USER_LIKED_KEY, 'true');

      // Track if the update was successful
      let updateSuccess = false;

      // Update Firebase with new count
      try {
        const updateResponse = await fetch(FIREBASE_ENDPOINT, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            count: newGlobalCount,
            lastUpdated: new Date().toISOString(),
            lastLikedFrom: navigator.userAgent.substr(0, 50)
          })
        });
        
        if (updateResponse.ok) {
          console.log('✅ Global count updated in Firebase:', newGlobalCount);
          updateSuccess = true;
        } else {
          console.error('❌ Failed to update Firebase:', updateResponse.status);
          // Revert if Firebase update failed
          setLikes(likes);
          setHasLiked(false);
          localStorage.removeItem(USER_LIKED_KEY);
        }
      } catch (error) {
        console.error('❌ Firebase update error:', error);
        // Revert if network error
        setLikes(likes);
        setHasLiked(false);
        localStorage.removeItem(USER_LIKED_KEY);
      }
      
      setTimeout(() => {
        setIsAnimating(false);
        if (updateSuccess) {
          window.alert(`🎉 Thank you for liking my portfolio!`);
        } else {
          window.alert('❌ Failed to register your like. Please check your internet connection and try again.');
        }
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

export default LikeButton;