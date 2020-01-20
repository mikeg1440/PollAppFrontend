
class PollForm{
  constructor(){
    this.container = document.querySelector('#content')
    this.renderForm()
    this.addListeners()
  }

  renderForm(){
    this.container.innerHTML = `
    <h2>Create a New Poll</h2>
    <form id='newPollForm' class='form-group'>
      <label>Poll Title</label><br>
      <input type='text' name='title' class='txtBoxMed' placeholder='Title'/><br>

      <label>Poll Author</label><br>
      <input type='text' name='author' class='txtBoxMed' placeholder='Author'/><br>

      <label>Question</label><br>
      <input type='text' name='question' class='txtBoxMed' placeholder='Question'/><br>

      <label>Possible Answers</label><br>
      <div id='answerContainer'>
        <input type='text' name='answer' class='txtBoxSmall' placeholder='Answer'/><span id='deleteAnswer' class="glyphicon glyphicon-minus"></span> <br>

      </div>

      <div class='float-right'>
        <button type='submit' class='btn btn-success'>Create Poll</button>
      </div>
    </form>

    <button type="button" class="btn btn-info btn-sm" id='addAnswer'>
      <span class="glyphicon glyphicon-plus"></span> Add Answer
    </button>
    `}


  renderNewAnswer(){
    let newAnswer = document.createElement('input')
    newAnswer.type = 'text'
    newAnswer.classList.add('txtBoxSmall')
    newAnswer.name = 'answer'
    newAnswer.placeholder = 'Answer'

    let answerDiv = document.querySelector('#answerContainer')
    answerDiv.appendChild(newAnswer)

    let deleteBtn = document.createElement('span')
    deleteBtn.className = 'glyphicon glyphicon-minus'
    deleteBtn.id = 'deleteAnswer'

    answerDiv.appendChild(deleteBtn)

    let newBreak = document.createElement('br')
    answerDiv.appendChild(newBreak)
  }

  addListeners(){
    this.addAnswerListeners()

    this.addSubmitListener()
  }

  addSubmitListener(){
    this.container.addEventListener('submit', (e) => {
      e.preventDefault()
      // WE MAY NOT NEED THIS IF THEN -- CHECK HERE!!
      if (e.target.id == 'pollResponse'){
        debugger
      }else if (e.target.id == 'newPollForm'){
        let data = this.extractPollData()
        app.pollsHandler.adapter.submitPoll(data).then(data => {
          let poll = new Poll(data.id, data.title, data.author, data.question, data.answers)
          app.pollsHandler.all.push(poll)
          app.pollsHandler.renderPollLinks()
          poll.renderPoll()
        }
        )
      }
    })
  }

  addAnswerListeners(){
    this.container.addEventListener('click', (e) => {
      if (e.target.id == 'addAnswer'){
        this.renderNewAnswer()
      }else if (e.target.id == 'deleteAnswer'){
        e.target.parentNode.removeChild(e.target.previousElementSibling)
        if (e.target.previousElementSibling){
          e.target.parentNode.removeChild(e.target.previousElementSibling)
        }
        e.target.parentNode.removeChild(e.target)
      }
    })
  }

  extractPollData(){
    let form = document.querySelector('form')
    let formEl = form.elements
    let data = {}

    data['title'] = form.title.value
    data['author'] = form.author.value
    data['question'] = form.question.value
    data['answers_attributes'] = []

    let answerBoxes = form.getElementsByClassName('txtBoxSmall')

    for (const elem of answerBoxes){ data['answers_attributes'].push({content: elem.value})}
    return data
  }

}
