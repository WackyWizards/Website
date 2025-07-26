'use client';

import { useState, useEffect, useRef } from 'react';

interface GameConfig {
  name: string;
  displayName: string;
  steamUrl: string;
}

export default function GameLauncher() {
  const gameConfig: GameConfig = {
    name: 'observation',
    displayName: 'Observation',
    steamUrl: 'steam://run/590830//-rungame spoonstuff.observation'
  };

  const gamesLocation: string = '/#games';
  const [status, setStatus] = useState<'idle' | 'launching' | 'success' | 'error'>('idle');
  const fallbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (fallbackTimeoutRef.current) {
        clearTimeout(fallbackTimeoutRef.current);
      }
    };
  }, []);

  function launchGame() {
    setStatus('launching');

    try {
      // Clear any existing timeout
      if (fallbackTimeoutRef.current) {
        clearTimeout(fallbackTimeoutRef.current);
      }

      // Attempt to launch the game
      window.location.href = gameConfig.steamUrl;

      // Set up fallback timeout - assume success after a short delay
      fallbackTimeoutRef.current = setTimeout(() => {
        setStatus('success');

        // Reset to idle after showing success message
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      }, 1500); // Short delay to show launching state

      // Handle visibility change to detect if user switches away (optional enhancement)
      function handleVisibilityChange() {
        if (document.visibilityState === 'hidden') {
          if (fallbackTimeoutRef.current) {
            clearTimeout(fallbackTimeoutRef.current);
          }
          setStatus('success');

          // Reset to idle after game is presumed to have started
          setTimeout(() => {
            setStatus('idle');
          }, 2000);
        }
      }

      document.addEventListener('visibilitychange', handleVisibilityChange, { once: true });
      
    } catch (error) {
      console.error('Failed to launch game:', error);
      setStatus('error');

      // Auto-reset error state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  }

  function goBackToGames() {
    window.location.href = gamesLocation;
  }

  function retryLaunch() {
    setStatus('idle');
  }

  const statusConfig = {
    idle: {
      text: 'Click the button below to launch the game.',
      color: 'text-gray-300'
    },
    launching: {
      text: 'Launching the game...',
      color: 'text-yellow-400'
    },
    success: {
      text: 'Game is starting! Check your Steam client.',
      color: 'text-green-400'
    },
    error: {
      text: 'Failed to launch the game. Please ensure Steam and S&Box are installed and try again.',
      color: 'text-red-400'
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="flex flex-col text-center max-w-lg w-full bg-gray-950/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-700/50">
        
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Game Launcher
        </h1>
        
        <h2 className="text-xl text-gray-400 mb-8 capitalize">
          {gameConfig.displayName}
        </h2>
        
        <div className="mb-8">
          <p className={`text-lg font-medium ${currentStatus.color} transition-colors duration-300`}>
            {currentStatus.text}
          </p>
          
          {status === "launching" && (
            <div className="mt-4">
              <div className="animate-pulse flex justify-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {status === 'idle' && (
            <button
              onClick={launchGame}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:cursor-pointer"
            >
              🚀 Launch {gameConfig.displayName}
            </button>
          )}

          {status === 'error' && (
            <button
              onClick={retryLaunch}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:cursor-pointer"
            >
              🔄 Try Again
            </button>
          )}

          {(status === 'idle' || status === 'error') && (
            <button
              onClick={goBackToGames}
              className="w-full bg-gray-700/80 hover:bg-gray-600/80 text-white px-5 py-3 rounded-full text-base font-medium transition-all duration-200 border border-gray-600 hover:border-gray-500 hover:cursor-pointer"
            >
              ← Back to Games
            </button>
          )}
        </div>

        {status === 'error' && (
          <div className="mt-6 p-4 bg-red-900/20 border border-red-800/30 rounded-xl">
            <h3 className="text-sm font-semibold text-red-300 mb-2">Troubleshooting Tips:</h3>
            <ul className="text-xs text-red-200 space-y-1 text-left">
              <li>• Make sure Steam is running</li>
              <li>• Verify S&Box is installed in your Steam library</li>
              <li>• Check if your browser allows custom protocol handlers</li>
              <li>• Try launching Steam as administrator</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}