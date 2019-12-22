import {
  WeatherFlowHttpService,
  WeatherFlowHttpResponse
} from "./async/weatherflow.http";
import Axios from "axios";
export class App {
  public message: string = "Hello World!";
  private weatherflowHttp: WeatherFlowHttpService;
  private res: WeatherFlowHttpResponse;
  private fahrenheit: number;
  constructor() {
    this.weatherflowHttp = new WeatherFlowHttpService(Axios);
  }
  activate() {
    this.fetchWeatherData();
  }

  async fetchWeatherData() {
    this.res = await this.weatherflowHttp.getPorchWeather();
    this.fahrenheit = this.getFahrenheitFromCelsius(this.res.airTemperature);
  }

  getFahrenheitFromCelsius(celsius) {
    return celsius * (9 / 5) + 32;
  }
}
