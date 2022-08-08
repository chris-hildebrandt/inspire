import { sandboxApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { Pop } from "../Utils/Pop.js"

class ToDosService {
  async deleteToDo(toDoId) {
    let res = await sandboxApi.delete(`/chris/todos/${toDoId}`)
    ProxyState.toDos = ProxyState.toDos.filter(t => t.id != toDoId)
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
    if (!toDo) {
      throw new Error('bad toDo id')
    }
    toDo.completed = !toDo.completed
    let toDoIndex = ProxyState.toDos.indexOf(toDo)
    let res = await sandboxApi.put(`/chris/todos/${toDoId}`, toDo)
    let updatedToDo = new ToDo(res.data)
    ProxyState.toDos.splice(toDoIndex, 1, updatedToDo)
    ProxyState.toDos = ProxyState.toDos
    // @ts-ignore
    if (updatedToDo.completed == true) {
      Pop.toast('Congratulations!!')
    }
  }

  async cantHaveAndEatCake(toDoId){
    let haveCake = ProxyState.toDos.find(t => t.id = toDoId)
    if (!haveCake){
      return
    }
    let eatCakeGoals = []
    if (haveCake.description.includes('have') && haveCake.description.includes('cake')) {
      let eatCake = ProxyState.toDos.filter(t => t.description.includes('eat') && t.description.includes('cake'))
      eatCake.forEach(c => c.completed = !haveCake?.completed)
      eatCake.forEach(cake => {
        let cakeIndex = eatCake.indexOf(cake)
        let res = sandboxApi.put(`/chris/todos/${cakeIndex}`, cake)
        let updatedToDo = new ToDo(res.data)
        ProxyState.toDos.splice(cakeIndex, 1, updatedToDo)})
    }
    if (haveCake.description.includes('eat') && ('cake')) {
      let eatCake = ProxyState.toDos.filter(t => t.description.includes('have') && ('cake'))
      eatCake.forEach(c => c.completed = !haveCake?.completed)
    }
  }
}

export const toDosService = new ToDosService()