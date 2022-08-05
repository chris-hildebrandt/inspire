import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"


class DisplayService{

  async getBackgroundImg(){
    let res = await sandboxApi.get('/images')
    ProxyState.backgroundImg = res.data.largeImgUrl
  }
}

export const displayService = new DisplayService()