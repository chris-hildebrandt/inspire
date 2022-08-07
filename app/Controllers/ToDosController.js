import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";

function _drawToDos() {
  let template = ''
  ProxyState.toDos.forEach(t => template += t.ToDoTemplate)
  // @ts-ignore
  document.getElementById('to-do').innerHTML = template
  // @ts-ignore
  document.getElementById('tasks-total').innerText = ProxyState.toDos.length
  // @ts-ignore
  document.getElementById('tasks-completed').innerText = ProxyState.toDos.filter(t => t.completed).length
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
    // @ts-ignore
    window.event.preventDefault()
    try {
      // @ts-ignore
      let form = window.event.target
      let formData = {
        // @ts-ignore
        description: form.goal.value
      }
        await toDosService.newToDo(formData)
    } catch (error) {
      console.error('[newToDo]', error)
      Pop.error(error)
    }
  }

  async toggleToDo(toDoId) {
    try {
      await toDosService.toggleToDo(toDoId)
    } catch (error) {
      console.error('[toggleToDo]', error)
      Pop.error(error)
    }
  }

  async deleteToDo(toDoId) {
    try {
      const yes = await Pop.confirm('Delete this goal?')
      if (!yes) {
        return
      }
      await toDosService.deleteToDo(toDoId)
    } catch (error) {
      console.error('[deleteToDo]', error)
      Pop.error(error)
    }
  }
}