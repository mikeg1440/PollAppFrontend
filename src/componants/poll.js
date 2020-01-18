
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
      this.getAndRenderResults()
    })

  }

  renderGraphContainer(){
    return `
    <h2>${this.title} Results</h2>
    <div id='resultGraph' class='container'>

    </div>`
  }

  renderBar(answer, percentage, answerNum){
    return `
    <p><div class='color-box answer${answerNum}'></div>${answer.content}</p>
    <div class="barContainer">
      <div class='resultBar answer${answerNum}' style='width: ${percentage}%'>${percentage}%</div>
    </div>
    `
  }

  renderResults(){
    app.mainContent.innerHTML = this.renderGraphContainer()

    for (const i in this.answers){
        let percent = this.submissions.filter(submission => submission.answerId == this.answers[i].id).length / (this.submissions.length)
        percent = (percent * 100).toFixed(2)
        app.mainContent.innerHTML += this.renderBar(this.answers[i], percent, parseInt(i)+1)
    }

  }

  getAndRenderResults(){
    this.submissions = []
    app.polls.adapter.getSubmissions(this.id).then( submissions => {
      console.log(submissions)
      this.submissions = submissions.map( submission => new Submission(submission))
      this.renderResults()
    })

  }

}
