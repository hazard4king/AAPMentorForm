async function asubmit(){

  const name = $('#nameID').val();
  const email = $('#emailID').val();
  const leaderID = $('#leaderID').val();
  const leaderphID = $('#leaderphID').val();
  const otherMentorID = $('#otherMentorID').val(); 
  const subjects = $('#subjectID').find(":selected").text();
  const gradesID = $('#gradesID').val();
  const ratioID = $('#ratioID').val();

  const data = {
      name,
      email,
      leaderID,
      leaderphID,
      otherMentorID,
      subjects,
      gradesID,
      ratioID
  }

  console.log(data)

  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  }

  const api = await fetch('/api',options)
  const res = await api.json();
  console.log("done",res)
  alert("data recorded")
}
