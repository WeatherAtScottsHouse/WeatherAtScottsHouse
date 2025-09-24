'use client';

import { useState, useEffect } from 'react';
import Scene from '@/components/Scene';

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/weather');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weather && <Scene weather={weather} />}
    </main>
  );
}
