import React from 'react';

const Raindrop = () => {
  const animationDuration = `${Math.random() * 1 + 1}s`;
  const animationDelay = `${Math.random() * 2}s`;

  return (
    <div
      className="w-1 h-4 bg-blue-500 rounded-full animate-fall"
      style={{
        animationDuration,
        animationDelay,
      }}
    ></div>
  );
};

export default Raindrop;