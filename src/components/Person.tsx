import React from 'react';

interface PersonProps {
  skinColor?: string;
  shirtColor?: string;
  pantsColor?: string;
  hairStyle?: 'short' | 'long' | 'bald';
}

const Person: React.FC<PersonProps> = ({
  skinColor = 'bg-yellow-300',
  shirtColor = 'bg-blue-500',
  pantsColor = 'bg-gray-700',
  hairStyle = 'short',
}) => {
  return (
    <div className="relative w-16 h-32">
      {/* Head */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${skinColor}`}></div>
      {/* Hair */}
      {hairStyle === 'short' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-black"></div>
      )}
      {hairStyle === 'long' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-black rounded-b-full"></div>
      )}
      {/* Body */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-12 h-16 ${shirtColor}`}></div>
      {/* Legs */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-6 ${pantsColor}`}>
        <div className="absolute top-0 left-0 w-5 h-6 bg-inherit"></div>
        <div className="absolute top-0 right-0 w-5 h-6 bg-inherit"></div>
      </div>
    </div>
  );
};

export default Person;
