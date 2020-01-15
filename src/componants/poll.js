
class Poll{
  constructor(id, title, author){
    this.id = id
    this.title = title
    this.author = author
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

  renderAnswer(content){
    return `<input type='radio' name='answer' value='${content}'>${content}<br>`
  }

  renderPoll(){
    app.mainContent.innerHTML = his.renderPollHeader()
    let answerContainer = document.querySelector('#answerContainer')

    for (const answer in this.answers){
      answerContainer.innerHTML += this.renderAnswer(answer.content)
    }
  }

}
