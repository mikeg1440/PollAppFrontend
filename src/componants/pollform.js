
class PollForm{
  constructor(){
    this.container = document.querySelector('#content')
    this.render()
    this.addListeners()
  }

  render(){
    this.container.innerHTML = `
    <form id='newPollForm' class='form-group'>
      <label>Poll Title</label><br>
      <input type='text' name='title' class='txtBoxMed' /><br>

      <label>Poll Author</label><br>
      <input type='text' name='author' class='txtBoxMed' /><br>

      <label>Question</label><br>
      <input type='text' name='question' class='txtBoxMed' /><br>

      <label>Possible Responses</label><br>
      <div id='answerContainer'>
        <input type='text' name='answer' class='txtBoxSmall' /><span id='deleteAnswer' class="glyphicon glyphicon-minus"></span> <br>

      </div>

      <button type='submit' class='btn btn-success'>Create Poll</button>

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
    this.container.addEventListener('click', (e) => {
      if (e.target.id == 'addAnswer'){
        this.renderNewAnswer()
      }else if (e.target.id == 'deleteAnswer'){
        e.target.parentNode.removeChild(e.target.previousElementSibling)
        e.target.parentNode.removeChild(e.target)
      }
    })

    app.mainContent.addEventListener('submit', (e) => {
      e.preventDefault()
      let data = this.extractData()
      app.polls.adapter.submitPoll(data)
    })
  }

  extractData(){
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
