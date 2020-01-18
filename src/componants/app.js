class App{
  constructor(){
    this.listeners = []
    this.setBindings()
    this.setListeners()
  }

  setBindings(){
    this.mainContent = document.querySelector('#content')
    this.leftColumn = document.querySelector('#leftcolumn')
    this.polls = new Polls()
  }

  // SET LISTENERS FOR CLICKS ON THE TWO  BUTTONS IN THE NAV
  setListeners(){
    let newPollBtn = document.querySelector('#createPollBtn')
    let takePollBtn = document.querySelector('#takePollBtn')
    let viewResultsBtn = document.querySelector('#viewResultsBtn')

    newPollBtn.addEventListener('click', (e) => {
      this.renderNewPollForm()
    })

    takePollBtn.addEventListener('mouseup', (e) => {
      app.leftColumn.parentNode.classList.add('expand')
      this.setTestListener()

    })

  }

  expandPollList(e){
    app.leftColumn.parentNode.classList.add('expand')
    this.setTestListener()
    document.removeEventListener('mouse')
  }
  compressPollList(e){
    app.leftColumn.parentNode.classList.remove('expand')
    document.removeEventListener('mousedown', app.listeners.pollListShrink, false)
  }

  setTestListener(){
    app.listeners.pollListShrink = document.addEventListener('mousedown', this.compressPollList, false)
  }

  removeListener(listenerVar){
    document.removeEventListener('mousedown', listenerVar)
  }

  renderNewPollForm(){
    this.newForm = new PollForm()
  }

}
