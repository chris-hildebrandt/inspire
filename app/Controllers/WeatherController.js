import { weatherService } from "../Services/WeatherService.js"
import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {
  // TODO fix template getter
  // @ts-ignore
  console.log(ProxyState.weather);
  // @ts-ignore
  document.getElementById('weather').innerHTML = ProxyState.weather.WeatherTemplate
}

export class WeatherController {
  constructor() {
    setInterval(this.getWeather, 120000)
    ProxyState.on('tempUnit', _drawWeather)
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
  }


  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error('getWeather', error)
      Pop.error(error)
    }
  }

  changeTempUnit() {
    switch (ProxyState.tempUnit) {
      case 'F':
        this.getWeather
        ProxyState.temp = (ProxyState.temp - 32) / 1.8
        ProxyState.tempUnit = 'C'
        break;
      case 'C':
        this.getWeather
        ProxyState.temp = ProxyState.weather.temp
        ProxyState.tempUnit = 'K'
        break;
      case 'K':
        this.getWeather
        ProxyState.temp = ((ProxyState.temp - 273.15)*1.8)+32
        ProxyState.tempUnit = 'F'
        break;
    }
  }
}