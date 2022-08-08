import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"
import { Weather } from "../Models/Weather.js"

class WeatherService{

  async getWeather(){
    let res = await sandboxApi.get('/weather')
    ProxyState.weather = new Weather(res.data)
  }
}
export const weatherService = new WeatherService