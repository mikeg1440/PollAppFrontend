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
      <h1>Select a Poll from the list on the side!</h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylMe2yXoy3YMook1-r2pxW0HFUjwyCSxnkgRAgGwhJIOuVrjP&s' alt='Arrow pointing left'/>
      `
    })

  }

  renderNewPollForm(){
    this.newForm = new PollForm()
  }

}
