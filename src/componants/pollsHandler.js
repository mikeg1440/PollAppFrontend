
class PollsHandler{
  constructor(){
    this.setBindings()
    this.fetchAndLoadPolls()
    this.setListeners()
  }

  setBindings(){
    this.all = []
    this.adapter = new PollsAdapter()
    this.sideList = document.querySelector('#pollListSideBar')
    this.mainContainer = document.querySelector('#content')
  }

  fetchAndLoadPolls(){
    this.adapter.getPolls().then(polls => {
      polls.forEach(poll => this.all.push(new Poll(poll.id, poll.title, poll.author, poll.question, poll.answers)))
      this.renderPollLinks()
    })
  }

  setListeners(){
    this.sideList.addEventListener('click', (e) => {
      if (e.target.className == 'pollLink'){
        this.showPoll(e)
      }
    })
  }


  renderPollLinks(){
    this.sideList.innerHTML = this.all.map( poll => poll.renderPollLink()).join('')
  }


  showPoll(event){
    let poll = this.all.find(poll => poll.id == event.target.dataset.pollid)
    poll.renderPoll()
  }

  renderPollFromSubmission(submission){
    let poll = this.all.find(poll => poll.id == submission.poll_id)
    poll.getAndRenderResults()
  }

}
