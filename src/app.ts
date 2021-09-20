import {
  WeatherFlowHttpService,
  WeatherFlowHttpResponse
} from "./async/weatherflow.http";
import Axios from "axios";
export class App {
  private weatherflowHttp: WeatherFlowHttpService;
  private res: WeatherFlowHttpResponse;
  private fahrenheit: number;
  constructor() {
    this.weatherflowHttp = new WeatherFlowHttpService(Axios);
  }
  activate(): void {
    this.fetchWeatherData();
  }

  async fetchWeatherData(): Promise<void> {
    this.res = await this.weatherflowHttp.getPorchWeather();
    this.fahrenheit = this.getFahrenheitFromCelsius(this.res.airTemperature);
  }

  getFahrenheitFromCelsius(celsius: number): number {
    return celsius * (9 / 5) + 32;
  }
}
