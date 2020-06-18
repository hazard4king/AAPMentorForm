async function asubmit(){

// const validationFunctions = require('./validationFunctions');

const name = $('#nameID').val();
const email = $('#emailID').val();
const leaderID = $('#leaderID').val();
const leaderphID = $('#leaderphID').val();
const otherMentorID = $('#otherMentorID').val(); 
const subjects = $('#subjectID').find(":selected").text();
const gradesID = $('#gradesID').val();
const ratioID = $('#ratioID').val();

const obj = {
    name,
    email,
    leaderID,
    leaderphID,
    otherMentorID,
    subjects,
    gradesID,
    ratioID
}

// let errorObject={};

// if(!validationFunctions.nameCheck(obj.name))
// {
//   errorObject.name = errors.NAME;
// }

// if(!validationFunctions.emailCheck(obj.email))
// {
//   errorObject.email = errors.EMAIL;
// }

// if(!validationFunctions.mentoridCheck(obj.leaderID))
// {
//   errorObject.id = errors.ID;
// }

// if(!validationFunctions.phoneCheck(obj.leaderphID))
// {
//   errorObject.phone = errors.PHONE;
// }

// if(!validationFunctions.mentoridCheck(obj.otherMentorID))
// {
//   errorObject.id = errors.ID;
// }
  
// if (!validationFunctions.isEmpty(errorObject)) {
//   console.log(errorObject);
// } 
// else 
{
console.log(obj);
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
}

const api = await fetch('/api',options)
const res = await api.json();
console.log("done",res)
alert("data recorded")
}
