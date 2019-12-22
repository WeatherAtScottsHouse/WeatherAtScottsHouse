import { WeatherFlowHttpService } from "../src/async/weatherflow.http";
import Axios from "axios";

describe("Weatherflow Http Service", () => {
  let service;

  beforeEach(() => {
    service = new WeatherFlowHttpService(Axios);
  });

  it("should get data", done => {
    const result = service.getPorchWeather();
    result.then(x => {
      console.log(x);
      done();
    });
  });
});
