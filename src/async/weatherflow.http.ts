import { AxiosInstance } from "axios";

export interface WeatherFlowHttpResponse {
  [key: string]: any;
  obs: number[];
}

export class WeatherFlowHttpService {
  private readonly API_KEY = "20c70eae-e62f-4d3b-b3a4-8586e90f3ac8";
  private readonly API_URL =
    "https://swd.weatherflow.com/swd/rest/observations/device";
  private readonly http: AxiosInstance;
  private readonly SKY_WEATHER_STATION_ID = "14085";
  private readonly PORCH_STATION_ID = "13799";
  constructor(axios: AxiosInstance) {
    this.http = axios;
  }
  getPorchWeather(): Promise<WeatherFlowHttpResponse> {
    const url = `${this.API_URL}/${this.PORCH_STATION_ID}?api_key=${this.API_KEY}`;
    return this.http.get(url);
  }
}
