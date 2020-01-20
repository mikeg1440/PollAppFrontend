
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


  renderPollLinks(){
    this.sideList.innerHTML = this.all.map( poll => poll.renderPollLink()).join('')
  }

  setListeners(){
    this.sideList.addEventListener('click', (e) => this.showPoll(e))
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
