
class Polls{
  constructor(){
    this.all = []
    this.adapter = new PollsAdapter()
    this.sideList = document.querySelector('#pollListSideBar')
    this.mainContainer = document.querySelector('#content')
    this.fetchAndLoadPolls()
    this.setListeners()
  }


  fetchAndLoadPolls(){
    this.adapter.getPolls().then(polls => {
      polls.forEach(poll => this.all.push(new Poll(poll.id, poll.title, poll.user_id)))
      this.renderLinks()
    })
  }


  renderLinks(){
    this.sideList.innerHTML = this.all.map( poll => poll.renderPollLink()).join('')
  }

  setListeners(){
    this.sideList.addEventListener('click', (e) => this.showPoll(e))
  }

  showPoll(event){
    this.mainContainer.innerHTML = `<h1>Showing poll with id: ${event.target.dataset.pollid}</h1>`
  }

}
