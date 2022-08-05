import { Pop } from "../Utils/Pop.js"
import { displayService } from "../Services/DisplayService.js"
import { ProxyState } from "../AppState.js"

function _drawBgImg(){
  document.body.style.backgroundImage = `url(${ProxyState.backgroundImg})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function _drawTime(){
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";
  if(h == 0){
      h = 12;
  }
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  // @ts-ignore
  h = (h < 10) ? "0" + h : h;
  // @ts-ignore
  m = (m < 10) ? "0" + m : m;
  // @ts-ignore
  s = (s < 10) ? "0" + s : s;
  let time = h + ":" + m + " " + session;
  // @ts-ignore
  document.getElementById("clock").innerText = time;
  // @ts-ignore
  document.getElementById("clock").textContent = time;
}

export class DisplayController{


  constructor(){
    _drawTime();
    this.getBackgroundImg();
    setInterval(this.getBackgroundImg, 120000);
    ProxyState.on('backgroundImg', _drawBgImg);
    setInterval(_drawTime, 1000);
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