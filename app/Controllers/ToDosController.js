import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";

function _drawToDos() {
  let template = ''
  ProxyState.toDos.forEach(t => template += t.ToDoTemplate)
  // @ts-ignore
  document.getElementById('to-do').innerHTML = template
}

export class ToDosController {
  constructor() {
    ProxyState.on("toDos", _drawToDos)
    this.getToDOs()
  }

  async getToDOs() {
    try {
      await toDosService.getToDos()
    } catch (error) {
      console.error('[getToDO]', error)
      Pop.error(error)
    }
  }

  async newToDo() {
    try {
      await toDosService.newToDo()
    } catch (error) {
      console.error('[newToDo]', error)
      Pop.error(error)
    }
  }

  async toggleToDo(toDoId) {
    try {
      let toDo = ProxyState.toDos.find(t => t.id == toDoId)
      // @ts-ignore
      if(toDo.completed == false) {
        Pop.toast('Congratulations!!')
      }
      await toDosService.toggleToDo(toDoId)
    } catch (error) {
      console.error('[toggleToDo]', error)
      Pop.error(error)
    }
  }

  async deleteToDo(toDoId){
    try {
      const yes = await Pop.confirm('Delete this goal?')
      if (!yes){
        return
      }
      await toDosService.deleteToDo(toDoId)
    } catch (error) {
      console.error('[deleteToDo]', error)
      Pop.error(error)
    }
  }
}