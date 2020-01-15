class App{
  constructor(){
    this.mainContent = document.querySelector('#content')
    this.polls = new Polls()
    this.setListeners()
  }

  setListeners(){
    let newPollBtn = document.querySelector('#createPollBtn')
    let takePollBtn = document.querySelector('#takePollBtn')
    let viewResultsBtn = document.querySelector('#viewResultsBtn')

    newPollBtn.addEventListener('click', this.renderNewPollForm)

    takePollBtn.addEventListener('click', this.polls.renderMainList())

    viewResultsBtn.addEventListener('click', this.renderResultsList())
  }

  renderNewPollForm(){
    this.newForm = new PollForm()
  }


}
