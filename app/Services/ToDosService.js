import { sandboxApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { Pop } from "../Utils/Pop.js"

class ToDosService {
  deleteToDo(toDoId) {
    throw new Error("Method not implemented.");
  }

  async getToDos() {
    let res = await sandboxApi.get('/chris/todos')
    ProxyState.toDos = res.data.map(t => new ToDo(t))
  }

  async newToDo(formData) {
    let res = await sandboxApi.post('/chris/todos', formData)
    let newToDo = new ToDo(res.data)
    ProxyState.toDos = [...ProxyState.toDos, newToDo]
  }

  async toggleToDo(toDoId) {
    // @ts-ignore
    let toDo = ProxyState.toDos.find(t => t.id == toDoId)
    if(!toDo){
      throw new Error('bad toDo id')
    }
    // @ts-ignore
    toDo.completed = !toDo.completed
    let toDoIndex = ProxyState.toDos.indexOf(toDo)
    let res = await sandboxApi.put(`/chris/todos/${toDoId}`, toDo)
    let updatedToDo = new ToDo(res.data)
    ProxyState.toDos.splice(toDoIndex, 1, updatedToDo)
    ProxyState.toDos = ProxyState.toDos
    // @ts-ignore
    if(updatedToDo.completed == true) {
      Pop.toast('Congratulations!!')
    }
  }

}

export const toDosService = new ToDosService()