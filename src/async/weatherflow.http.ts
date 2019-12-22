import * as moment from "moment";
import { AxiosInstance } from "axios";

export interface WeatherFlowHttpResponse {
  dateOfMeasurement: string;
  stationPressure: number;
  airTemperature: number;
  relativeHumidity: number;
  lightningStrikeCount: number;
  lightningStrikeAverageDistance: number;
  battery: number;
  reportInterval: number;
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
  async getPorchWeather(): Promise<WeatherFlowHttpResponse> {
    const url = `${this.API_URL}/${this.PORCH_STATION_ID}?api_key=${this.API_KEY}`;
    const res = await (await this.http.get(url)).data.obs;
    const result = res[res.length - 1];

    return {
      dateOfMeasurement: moment(result[0]).format("MM/dd/YYYY hh:mm"),
      stationPressure: result[1],
      airTemperature: Math.floor(result[2]),
      relativeHumidity: result[3],
      lightningStrikeCount: result[4],
      lightningStrikeAverageDistance: result[5],
      battery: result[6],
      reportInterval: result[7]
    };
  }
}
