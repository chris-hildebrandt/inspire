import { ToDosController } from "./Controllers/ToDosController.js";
import { WeatherController } from "./Controllers/WeatherController.js"
import { DisplayController } from "./Controllers/DisplayController.js"

class App {
  toDosController = new ToDosController();

  weatherController = new WeatherController()

  displayController = new DisplayController()
}

window["app"] = new App();
