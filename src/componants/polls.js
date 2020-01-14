
class Polls{
  constructor(){
    this.polls = []
    this.adapter = new PollsAdapter()
    this.sideBar = document.querySelector('#leftcolumn')
    this.fetchAndLoadPolls()
    this.setListeners()
  }

  fetchAndLoadPolls(){
    this.adapter.getPolls().then(polls => {
      this.polls = polls
      this.renderLinks()
    })
  }

  setListeners(){
    this.sideBar.addEventListener('click', function(e){
      if (e.target.className == 'pollLink'){
        console.log(`Poll${e.target.dataset.pollid} clicked!`)
      }
    })
  }

  pollLink(poll){
    return `<b class='pollLink' id='poll-${poll.id}' data-pollId='${poll.id}'>${poll.title}</b><br>`
  }

  renderLinks(){
    console.log('rendering')
    this.polls.forEach(poll => {
      this.sideBar.innerHTML += this.pollLink(poll)
    })

  }
}
