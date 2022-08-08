import { ProxyState } from "../AppState.js"

export class Weather {
  constructor(data) {
    this.weather = data.weather[0].description
    this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    this.temp = data.main.temp
    this.humidity = data.main.humidity
    this.wind = data.wind.speed
    this.city = data.name
    ProxyState.temp = ((this.temp - 273.15) * 1.8) + 32
  }

  get WeatherTemplate() {
    return `
      <section class="d-flex bg-dark bg-glass card rounded no-select draggable-none border-0 p-2 mt-md-5">
        <div class="justify-self-center">
          <img id="icon" class="p-1 no-select draggable-none" src="${this.icon}"></img>
          <div id="main" class="text-center no-select draggable-none">${this.weather}</div>
        </div>
        <div>
          <div id="temp" class="units text-light text-center p-md-2 no-select draggable-none">${ProxyState.temp.toFixed(0)} <span class="btn text-light" onclick="app.weatherController.changeTempUnit()">${ProxyState.tempUnit}</span></div>
        </div>
      </section>
    `
  }
}