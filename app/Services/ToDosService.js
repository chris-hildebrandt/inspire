import { sandboxApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";

class ToDosService {
  deleteToDo(toDoId) {
    throw new Error("Method not implemented.");
  }

  async getToDos() {
    let res = await sandboxApi.get('/chris/todos')
    ProxyState.toDos = res.data.map(t => new ToDo(t))
  }

  newToDo() {
    throw new Error("Method not implemented.");
  }
  toggleToDo(toDoId) {
  }

}

export const toDosService = new ToDosService()