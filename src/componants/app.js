class App{
  constructor(){
    this.setBindings()
    this.setListeners()
  }

  setBindings(){
    this.mainContent = document.querySelector('#content')
    this.leftColumn = document.querySelector('#leftcolumn')
    this.polls = new Polls()
  }

  setListeners(){
    let newPollBtn = document.querySelector('#createPollBtn')
    let takePollBtn = document.querySelector('#takePollBtn')
    let viewResultsBtn = document.querySelector('#viewResultsBtn')

    newPollBtn.addEventListener('click', (e) => {
      this.renderNewPollForm()
    })

    takePollBtn.addEventListener('mouseup', (e) => {
      this.mainContent.innerHTML = `
      <h2>Select a Poll from the list on the side!</h2>
      <img src='img/left-arrow.png' alt='Arrow pointing left'/>
      `
    })

  }

  renderNewPollForm(){
    this.newForm = new PollForm()
  }

}
