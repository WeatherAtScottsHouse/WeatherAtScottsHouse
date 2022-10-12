import { DateTime } from "luxon";
import { AxiosInstance } from "axios";

export interface WeatherFlowHttpResponse {
  [key: string]: any;
}

export class WeatherFlowHttpService {
  private readonly API_URL = "https://weather.linghome.net";
  private readonly SCOTTS_LAT = 34.0258744;
  private readonly SCOTTS_LON = -84.5374217;
  private readonly http: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.http = axios;
  }
  async getPorchWeather(): Promise<WeatherFlowHttpResponse> {
    const url = `${this.API_URL}?lat=${this.SCOTTS_LAT}&lon=${this.SCOTTS_LON}&units=metric`;
    const result = (await (await this.http.get(url)).data) as any;

    return {
      dateOfMeasurement: DateTime.fromMillis(result.dt * 1000).toLocaleString(DateTime.DATETIME_FULL),
      stationPressure: result.main.pressure,
      airTemperature: Math.floor(result.main.temp),
      relativeHumidity: result.main.humidity,
    };
  }
}
