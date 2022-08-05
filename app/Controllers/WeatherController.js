import { ProxyState } from "../AppState.js"

function _drawWeather(){
  // TODO fix template getter
  // @ts-ignore
  console.log(ProxyState.weather.WeatherTemplate);
  // @ts-ignore
  document.getElementById('weather').innerHTML = ProxyState.weather.WeatherTemplate
}

export class WeatherController{
  constructor(){
    console.log('weather ctor up');
    setInterval(this.getWeather, 15000)
    ProxyState.on('weather', _drawWeather)
  }


  getWeather(){
  ProxyState.weather = ProxyState.weather
  }
}