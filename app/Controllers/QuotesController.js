import { quotesService } from "../Services/QuotesService.js";
import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuotes(){
  // @ts-ignore
  document.getElementById('quotes').innerHTML = ProxyState.quotes.QuoteTemplate
}
export class QuotesController{
  constructor(){
    ProxyState.on('quotes', _drawQuotes)
    this.getQuotes()
  }
  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error('[getQuotes]', error)
      Pop.error(error)
    }
  }
}