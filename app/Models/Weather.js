

export class Weather{
  constructor(data){
    this.weather = data.weather.main
    this.description = data.weather.description
    this.icon = `http://openweathermap.org/img/wn/${data.weather.icon}@2x.png` 
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