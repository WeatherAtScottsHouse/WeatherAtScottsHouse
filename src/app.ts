import {
  WeatherFlowHttpService,
  WeatherFlowHttpResponse
} from "./async/weatherflow.http";
import Axios from "axios";
export class App {
  public message: string = "Hello World!";
  private weatherflowHttp: WeatherFlowHttpService;
  private centigrade: number;
  private fahrenheit: number;
  constructor() {
    this.weatherflowHttp = new WeatherFlowHttpService(Axios);
  }
  activate() {
    this.fetchWeatherData();
  }

  async fetchWeatherData() {
    const res = await this.weatherflowHttp.getPorchWeather();
    const obsArray = res.data.obs;
    this.centigrade = obsArray[obsArray.length - 1][2];
    this.fahrenheit = this.getFahrenheitFromCelsius(this.centigrade);
  }

  getFahrenheitFromCelsius(celsius) {
    return Math.floor(celsius * (9 / 5) + 32);
  }

  getCelsiusFromFahrenheit(fahrenheit) {
    return Math.floor((fahrenheit - 32) * (5 / 9));
  }
}
