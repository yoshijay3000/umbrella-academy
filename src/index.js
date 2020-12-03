const signupForm = document.querySelector('#signup-form');
const signupEmail = document.querySelector('#signupEmail')
const signupPassword = document.querySelector('#signupPassword');
const signupFname = document.querySelector('#signupFname');
const signupLname = document.querySelector('#signupLname');
const signupGender = document.querySelector('input[name="signupGender"]');
const signupBday = document.querySelector('#signupBday');
const signupSchoolName = document.querySelector('#signupSchoolName');
const signupSchoolType = document.querySelector('#signupSchoolType');


signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    fetch('http://localhost:3333/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            signupEmail: signupEmail.value,
            signupPassword: signupPassword.value,
            signupFname: signupFname.value,
            signupLname: signupLname.value,
            signupGender: signupGender.value,
            signupBday: signupBday.value,
            signupSchoolName: signupSchoolName.value,
            signupSchoolType: signupSchoolType.value
        })
    }).then(response => {
        console.log(response);
    })
        .catch(err => console.log(err));
});