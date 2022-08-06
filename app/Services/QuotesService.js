import { sandboxApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"

class QuotesService{
  async getQuote(){
    let res = await sandboxApi.get('/quotes')
    ProxyState.quote = new Quote(res.data)
  }
}

export const quotesService = new QuotesService()