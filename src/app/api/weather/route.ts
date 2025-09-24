import { NextResponse } from 'next/server';

export async function GET() {
  const lat = 34.0258744;
  const lon = -84.5374217;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!apiKey) {
    // Return mock data if API key is not set
    const mockData = {
      coord: {
        lon: -84.5374,
        lat: 34.0259,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      base: 'stations',
      main: {
        temp: 65,
        feels_like: 64.25,
        temp_min: 62.81,
        temp_max: 67.86,
        pressure: 1021,
        humidity: 80,
        sea_level: 1021,
        grnd_level: 910,
      },
      visibility: 10000,
      wind: {
        speed: 4.09,
        deg: 121,
        gust: 3.47,
      },
      rain: {
        '1h': 2.73,
      },
      clouds: {
        all: 83,
      },
      dt: 1726660758,
      sys: {
        type: 1,
        id: 6736,
        country: 'US',
        sunrise: 1726636384,
        sunset: 1726680975,
      },
      timezone: -14400,
      id: 420006353,
      name: 'Kennesaw',
      cod: 200,
    };
    return NextResponse.json(mockData);
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}