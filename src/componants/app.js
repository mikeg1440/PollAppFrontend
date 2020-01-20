class App{
  constructor(){
    this.listeners = []
    this.setBindings()
    this.setListeners()
  }

  setBindings(){
    this.mainContent = document.querySelector('#content')
    this.leftColumn = document.querySelector('#leftcolumn')
    this.pollsHandler = new PollsHandler()
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
      this.setCompressListListener()
    })

  }

  // Compresses the left menu list of polls to transition back to original width and remove compress list listener
  compressPollList(e){
    if (e.target.className == 'pollLink'){
      let poll = app.pollsHandler.all.find(poll => poll.id == e.target.dataset.pollid)
      poll.renderPoll()
    }
    app.leftColumn.parentNode.classList.remove('expand')
    document.removeEventListener('mousedown', app.listeners.pollListShrink, true)
  }

  setCompressListListener(){
    app.listeners.pollListShrink = document.addEventListener('mousedown', this.compressPollList, true)
  }

  renderNewPollForm(){
    this.newForm = new PollForm()
  }

}
