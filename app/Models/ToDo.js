import { generateId } from "../Utils/generateId.js"

export class ToDo {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.completed = data.completed || false
  }

  get ToDoTemplate() {
    return `
      <div class="form-check no-select d-flex">
        <input class="me-2 d-inline" id="${this.id}" type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.toDosController.toggleToDo('${this.id}')" >
        <div class="align-self-center d-inline ${this.completed ? 'text-decoration-line-through' : ''}">${this.description}</div>
        <div class="trash d-inline btn selectable no-select text-light text-shadow mdi mdi-delete-forever" onclick="app.toDosController.deleteToDo('${this.id}')"></div>
      </div>
    `
  }
}