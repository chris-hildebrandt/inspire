import { ToDosController } from "./Controllers/ToDosController.js";
import { WeatherController } from "./Controllers/WeatherController.js"
import { DisplayController } from "./Controllers/DisplayController.js"
import { QuotesController } from "./Controllers/QuotesController.js";

class App {
  toDosController = new ToDosController();

  weatherController = new WeatherController()

  displayController = new DisplayController()

  quotesController = new QuotesController()
}

window["app"] = new App();
