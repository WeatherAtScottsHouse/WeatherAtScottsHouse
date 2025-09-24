import React from 'react';
import House from './House';
import Person from './Person';
import WeatherModal from './WeatherModal';

interface SceneProps {
  weather: any;
}

const Scene: React.FC<SceneProps> = ({ weather }) => {
  if (!weather) {
    return null;
  }

  const { main } = weather.weather[0];
  const { temp } = weather.main;

  const isRaining = main === 'Rain';
  const isNice = main === 'Clear' && temp >= 60 && temp <= 80;
  const isHot = main === 'Clear' && temp > 80;

  const getAnimationClass = () => {
    if (isNice) {
      return 'animate-play-catch';
    }
    if (isHot) {
      return 'animate-sprinkler';
    }
    return 'animate-move-around';
  };

  const renderPeople = () => {
    if (isRaining) {
      return null; // People are inside
    }

    return (
      <>
        {/* Man */}
        <div className={`absolute bottom-20 left-1/4 ${getAnimationClass()}`}>
          <Person hairStyle="short" />
        </div>
        {/* Woman */}
        <div className={`absolute bottom-20 left-3/4 ${getAnimationClass()}`}>
          <Person hairStyle="long" shirtColor="bg-pink-500" />
        </div>
        {/* Kids */}
        <div className={`absolute bottom-10 left-1/3 ${getAnimationClass()}`}>
          <Person hairStyle="long" shirtColor="bg-purple-500" />
        </div>
        <div className={`absolute bottom-10 left-2/3 ${getAnimationClass()}`}>
          <Person hairStyle="short" shirtColor="bg-green-500" />
        </div>
        <div className={`absolute bottom-10 left-1/2 ${getAnimationClass()}`}>
          <Person hairStyle="long" shirtColor="bg-red-500" />
        </div>
      </>
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Sky */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-300"></div>
      {/* Ground */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-400"></div>
      
      <WeatherModal weather={weather} />

      {isRaining && <div className="absolute top-0 left-0 w-full h-full bg-gray-400 opacity-50"></div>}
      
      <div className="absolute bottom-1/2 right-0">
        <House />
      </div>
      
      {renderPeople()}
    </div>
  );
};

export default Scene;