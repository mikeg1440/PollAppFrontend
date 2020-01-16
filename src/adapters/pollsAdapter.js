class PollsAdapter{
  constructor(){
    this.baseUrl = 'http://localhost:3000/api/v1/polls'
  }

  getPolls(){
    return fetch(this.baseUrl).then(resp => resp.json())
  }

  submitPoll(data){
    console.log(data)
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
  }

  submitResponse(data){
    console.log(data)
    return fetch(`${this.bashUrl}/${data.poll_id}/submission`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then( resp => resp.json())
    .then( data => {
      console.log('Submission Recieved!')
    })
  }
}
