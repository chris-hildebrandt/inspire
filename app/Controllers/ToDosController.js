import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";
import { Pop } from "../Utils/Pop.js";

function _drawToDos(){

}

export class ToDosController{
  constructor(){
    ProxyState.on("toDos", _drawToDos)
    this.getToDOs()
  }

  getToDOs(){
    console.log('todos cont is up, gettodos is running');
  }
}