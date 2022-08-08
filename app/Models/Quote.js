
export class Quote{
  constructor(data){
    this.content = data.content
    this.author = data.author
  }

  get QuoteTemplate(){
    return `
      <h5>${this.content}</h5>
      <h5 id="author" class="text-light text-center text-shadow">- ${this.author}</h5>
    `
  }
}