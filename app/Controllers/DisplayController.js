import { Pop } from "../Utils/Pop.js"
import { displayService } from "../Services/DisplayService.js"
import { ProxyState } from "../AppState.js"

function _drawBgImg(){
  document.body.style.backgroundImage = `url(${ProxyState.backgroundImg})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

export class DisplayController{


  constructor(){
    setInterval(this.getBackgroundImg, 10000)
    ProxyState.on('backgroundImg', _drawBgImg)
  }

  async getBackgroundImg(){
    try {
      await displayService.getBackgroundImg()
    } catch (error) {
      console.error('[getting bg-img]', error)
      Pop.error(error)
    }
  }
}