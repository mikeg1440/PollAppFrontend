
class Polls{
  constructor(){
    this.polls = []
    this.adapter = new PollsAdapter()
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
    let pollColumn = document.querySelector('#leftcolumn')
    pollColumn.addEventListener('click', function(e){
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
    let pollColumn = document.querySelector('#leftcolumn')
    this.polls.forEach(poll => {
      pollColumn.innerHTML += this.pollLink(poll)
    })

  }
}
