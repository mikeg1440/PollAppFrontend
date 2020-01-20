class PollsAdapter{
  constructor(){
    this.baseUrl = 'http://localhost:3000/api/v1/polls'
  }

  getPolls(){
    return fetch(this.baseUrl).then(resp => resp.json())
  }

  getSubmissions(pollId){
    return fetch(`${this.baseUrl}/${pollId}/submissions`).then(resp => resp.json())
  }

  submitPoll(data){
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
  }

  submitResponse(data){
    return fetch(`${this.baseUrl}/${data.poll_id}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then( resp => resp.json())
  }
}
