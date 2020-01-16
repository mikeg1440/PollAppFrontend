
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
    <button id='viewResults' data-pollid='${this.id}' class='btn btn-info'>View Poll Results</button>
    <form id='pollResponse' class='form-group'>
      <h2>${this.title}</h2>
      <h4>By ${this.author} </h4>

      <h3>${this.question}</h3>
      <div id='answerContainer'>

      </div>
      <div class='col text-center'>
        <button type='submit' class='btn btn-success' id='submitResponse'>Submit</button>
      </div>
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

    let resultsBtn = document.querySelector('#viewResults')

    resultsBtn.addEventListener('click', (e) => {
      this.renderResults()
    })

    // container.addEventListener('submit', (e) => {
    //   console.log(`Submitting Response`)
    //
    // })
  }

  renderResults(){
    this.submissions = []
    app.polls.adapter.getSubmissions(this.id).then( submissions => {
      console.log(submissions)
      // this.submissions.push( new Submission(submission))
    })
  }

}
