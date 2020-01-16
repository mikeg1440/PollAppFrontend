
class Poll{
  constructor(id, title, author, question, answers){
    this.id = id
    this.title = title
    this.author = author
    this.question = question
    this.answers = answers
  }

  renderPollLink(){
    return `<li class='pollLink' id='poll-${this.id}' data-pollId='${this.id}'>${this.title}</li><br>`
  }

  renderPollHeader(){
    return `
    <form id='pollResponse' class='form-control'>
      <h1>${this.title}</h1>
      <h4>By ${this.author} </h4>

      <h3>${this.question}</h3>
      <div id='answerContainer'>

      </div>
      <button type='submit' id='submitResponse'>Submit</button>
    </form>
    `
  }

  renderAnswer(answer){
    return `<input type='radio' name='answer' data-pollid='${this.id}' value='${answer.id}'>${answer.content}<br>`
  }

  renderPoll(){
    let container = document.querySelector('#content')
    container.innerHTML = this.renderPollHeader()
    let answerContainer = document.querySelector('#answerContainer')

    for (const answer of this.answers){
      answerContainer.innerHTML += this.renderAnswer(answer)
    }

    container.addEventListener('submit', (e) => {
      console.log(`Submitting Response`)
      
    })
  }

}
