import React from 'react';

interface WeatherModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weather: any;
}

const WeatherModal: React.FC<WeatherModalProps> = ({ weather }) => {
  if (!weather) {
    return null;
  }

  const { main, description, icon } = weather.weather[0];
  const { temp, humidity } = weather.main;
  const isSunny = main === 'Clear';
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-modal absolute top-4 left-4 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 p-4 rounded-lg shadow-lg flex items-center text-gray-800 dark:text-white z-50">
      <div className="weather-icon">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconUrl} alt={description} className="w-20 h-20" />
      </div>
      <div className="weather-text">
        <h2 className="text-xl font-bold mb-2">Weather Details</h2>
        <p>Temperature: {temp}°F</p>
        <p>Humidity: {humidity}%</p>
        <p>Condition: {main}</p>
        <p>Description: {description}</p>
        <p>Sunny: {isSunny ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default WeatherModal;