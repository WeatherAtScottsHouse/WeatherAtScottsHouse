import React from 'react';

const House = () => {
  return (
    <div className="relative w-96 h-96">
      {/* House base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-60 bg-yellow-200 border-4 border-yellow-800">
        {/* Windows */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 border-4 border-blue-800"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-blue-200 border-4 border-blue-800"></div>
      </div>
      {/* Roof */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-b-[120px] border-b-red-500"></div>
      {/* Door */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-yellow-700 border-4 border-black flex items-center justify-start">
        {/* Doorknob */}
        <div className="w-4 h-4 bg-yellow-400 rounded-full ml-2"></div>
      </div>
    </div>
  );
};

export default House;