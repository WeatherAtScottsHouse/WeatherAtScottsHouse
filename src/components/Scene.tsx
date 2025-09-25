import React, { useState, useEffect } from 'react';
import House from './House';
import Person from './Person';
import WeatherModal from './WeatherModal';
import RainCloud from './RainCloud';
import Raindrop from './Raindrop';

interface SceneProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weather: any;
}

const Scene: React.FC<SceneProps> = ({ weather }) => {
  const [cloudPositions, setCloudPositions] = useState<{ top: string; left: string; }[]>([]);
  const [raindropPositions, setRaindropPositions] = useState<{ top: string; left: string; }[]>([]);

  const getNumberOfClouds = () => {
    if (!isRaining) return 0;
    const tier = getRainTier();
    if (tier === 'light') return 1;
    if (tier === 'medium') return 2;
    return 3;
  };

  const getNumberOfRaindrops = () => {
    const numClouds = getNumberOfClouds();
    if (numClouds === 0) return 0;
    // 5-8 drops per cloud
    return numClouds * (Math.floor(Math.random() * 4) + 5);
  };

  useEffect(() => {
    const numClouds = getNumberOfClouds();
    const newCloudPositions = [];
    for (let i = 0; i < numClouds; i++) {
      newCloudPositions.push({
        top: `${Math.random() * 40}%`,
        left: `${Math.random() * 80}%`,
      });
    }
    setCloudPositions(newCloudPositions);

    const numRaindrops = getNumberOfRaindrops();
    const newRaindropPositions = [];
    for (let i = 0; i < numRaindrops; i++) {
      newRaindropPositions.push({
        top: `${Math.random() * 50}%`, // start in the sky
        left: `${Math.random() * 100}%`,
      });
    }
    setRaindropPositions(newRaindropPositions);
  }, [weather, getNumberOfClouds, getNumberOfRaindrops]);

  if (!weather) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { main, description } = weather.weather[0];
  const { temp } = weather.main;
  const { all: cloudiness } = weather.clouds;
  const rainVolume = weather.rain ? weather.rain['1h'] : 0;

  const isRaining = main === 'Rain';
  const isOvercast = cloudiness > 50;
  const isNice = main === 'Clear' && temp >= 60 && temp <= 80;
  const isHot = main === 'Clear' && temp > 80;

  const getRainTier = () => {
    if (rainVolume < 2.5) return 'light';
    if (rainVolume < 7.6) return 'medium';
    return 'heavy';
  };


  const getAnimationClass = () => {
    if (isNice) {
      return 'animate-play-catch';
    }
    if (isHot) {
      return 'animate-sprinkler';
    }
    return 'animate-move-around';
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderPeople = () => {
    if (isRaining) {
      return null; // People are inside
    }

    return (
      <>
        {/* Man */}
        <div className={`absolute bottom-20 left-1/4 ${getAnimationClass()}`}>
          <Person hairStyle="short" size="adult" />
        </div>
        {/* Woman */}
        <div className={`absolute bottom-20 left-3/4 ${getAnimationClass()}`}>
          <Person hairStyle="long" shirtColor="bg-pink-500" size="adult" />
        </div>
        {/* 5 year old */}
        <div className={`absolute bottom-10 left-1/3 ${getAnimationClass()}`}>
          <Person hairStyle="long" shirtColor="bg-purple-500" size="child" />
        </div>
        {/* 3 year old */}
        <div className={`absolute bottom-10 left-2/3 ${getAnimationClass()}`}>
          <Person hairStyle="short" shirtColor="bg-green-500" size="child" />
        </div>
        {/* 1 year old */}
        <div className={`absolute bottom-10 left-1/2 ${getAnimationClass()}`}>
          <Person hairStyle="long" shirtColor="bg-red-500" size="infant" />
        </div>
      </>
    );
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden ${isRaining || isOvercast ? 'filter grayscale' : ''}`}>
      <WeatherModal weather={weather} />
      <div className="scene-content">
        {/* Sky */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-300"></div>
        {/* Ground */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-400"></div>

        {cloudPositions.map((pos, i) => (
          <div key={i} style={{ top: pos.top, left: pos.left }} className="absolute z-10">
            <RainCloud />
          </div>
        ))}

        {raindropPositions.map((pos, i) => (
          <div key={i} style={{ top: pos.top, left: pos.left }} className="absolute z-30">
            <Raindrop />
          </div>
        ))}

        <div className="absolute bottom-1/2 right-0 z-20">
          <House />
        </div>

      </div>
    </div>
  );
};

export default Scene;