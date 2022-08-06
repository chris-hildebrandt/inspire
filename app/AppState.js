import { ToDo } from "./Models/ToDo.js"
import { Quote } from "./Models/Quote.js"
import { Weather } from "./Models/Weather.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { EventEmitter } from "./Utils/EventEmitter.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/ToDo').ToDo[]} */
  toDos = []

  /** @type {import('./Models/Weather').Weather} */
  // @ts-ignore
  weather = null

  /** @type {import('./Models/Quote').Quote} */
  // @ts-ignore
  quote = null

  backgroundImg = ''

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
