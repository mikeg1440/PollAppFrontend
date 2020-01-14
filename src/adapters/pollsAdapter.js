class PollsAdapter{
  constructor(){
    this.baseUrl = 'http://localhost:3000/api/v1/polls'
  }

  getPolls(){
    return fetch(this.baseUrl).then(resp => resp.json())
  }
}
