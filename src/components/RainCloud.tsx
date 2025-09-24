import React from 'react';

const RainCloud = () => {
  return (
    <div className="relative w-48 h-24">
      <div className="absolute top-0 left-0 w-24 h-24 bg-gray-400 rounded-full"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-400 rounded-full"></div>
      <div className="absolute top-8 left-8 w-20 h-20 bg-gray-400 rounded-full"></div>
    </div>
  );
};

export default RainCloud;