

export class Weather{
  constructor(data){
    this.weather = data.weather.main
    this.description = data.weather.description
    this.icon = data.weather.icon
    this.temp = data.main.temp
    this.humidity = data.main.humidity
    this.wind = data.wind.speed
    this.city = data.name
  }

  get WeatherTemplate(){
    return `
    <div>weather is drawing</div>
    `
  }
}