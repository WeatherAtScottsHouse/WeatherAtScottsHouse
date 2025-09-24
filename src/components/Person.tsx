import React from 'react';

type PersonSize = 'adult' | 'adolescent' | 'child' | 'infant';

interface PersonProps {
  skinColor?: string;
  shirtColor?: string;
  pantsColor?: string;
  hairStyle?: 'short' | 'long' | 'bald';
  size?: PersonSize;
}

const sizeConfig = {
  adult: {
    container: 'w-16 h-32',
    head: 'w-10 h-10',
    hair: {
      short: 'w-10 h-3',
      long: 'w-12 h-12',
    },
    body: 'top-10 w-12 h-16',
    legs: 'bottom-0 w-12 h-6',
    leg: 'w-5 h-6',
  },
  adolescent: {
    container: 'w-14 h-28',
    head: 'w-8 h-8',
    hair: {
      short: 'w-8 h-2',
      long: 'w-10 h-10',
    },
    body: 'top-8 w-10 h-14',
    legs: 'bottom-0 w-10 h-5',
    leg: 'w-4 h-5',
  },
  child: {
    container: 'w-12 h-24',
    head: 'w-6 h-6',
    hair: {
      short: 'w-6 h-2',
      long: 'w-8 h-8',
    },
    body: 'top-6 w-8 h-12',
    legs: 'bottom-0 w-8 h-4',
    leg: 'w-3 h-4',
  },
  infant: {
    container: 'w-10 h-20',
    head: 'w-5 h-5',
    hair: {
      short: 'w-5 h-1',
      long: 'w-6 h-6',
    },
    body: 'top-5 w-6 h-10',
    legs: 'bottom-0 w-6 h-3',
    leg: 'w-2 h-3',
  },
};

const Person: React.FC<PersonProps> = ({
  skinColor = 'bg-yellow-300',
  shirtColor = 'bg-blue-500',
  pantsColor = 'bg-gray-700',
  hairStyle = 'short',
  size = 'adult',
}) => {
  const config = sizeConfig[size];

  return (
    <div className={`relative ${config.container}`}>
      {/* Head */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-full ${config.head} ${skinColor}`}></div>
      {/* Hair */}
      {hairStyle === 'short' && (
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-black ${config.hair.short}`}></div>
      )}
      {hairStyle === 'long' && (
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-full ${config.hair.long}`}></div>
      )}
      {/* Body */}
      <div className={`absolute left-1/2 -translate-x-1/2 ${config.body} ${shirtColor}`}></div>
      {/* Legs */}
      <div className={`absolute left-1/2 -translate-x-1/2 ${config.legs} ${pantsColor}`}>
        <div className={`absolute top-0 left-0 bg-inherit ${config.leg}`}></div>
        <div className={`absolute top-0 right-0 bg-inherit ${config.leg}`}></div>
      </div>
    </div>
  );
};

export default Person;