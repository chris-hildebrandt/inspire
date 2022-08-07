import { generateId } from "../Utils/generateId.js"



export class ToDo {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.completed = data.completed || false
  }

  get ToDoTemplate() {
    return `
      <div class="col-12 m-3 form-check no-select">
        <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.toDosController.toggleToDo('${this.id}')" >
        <div class="${this.completed ? 'text-decoration-line-through' : ''}">${this.description}</div>
        <div class="btn selectable no-select text-light text-shadow mdi mdi-delete-forever" onclick="app.toDosController.deleteToDO('${this.id}')"></div>
      </div>
    `
  }
}