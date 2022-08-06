import { sandboxApi } from "./AxiosService.js"


class WeatherService{
  async getWeather(){
    let res = await sandboxApi.get('/weather')
    
  }
}