//Use RegEx to validate form

let submitContact = document.getElementById('submitContact');
submitContact.addEventListener('click', validateForm);

let subject = document.getElementById('subject');
let message = document.getElementById('message');
let email = document.getElementById('email');

console.log(email);

function validateForm(){
    event.preventDefault();

    if (validator.text(subject) === false) {
        subject.style.backgroundColor= "rgba(253, 114, 114, 0.6)"
    }
    else {
        subject.style.backgroundColor= "#fff"
    }
    
    if (validator.text(message) === false) {
        message.style.backgroundColor= "rgba(253, 114, 114, 0.6)"
    }
    else {
        message.style.backgroundColor= "#fff";
    }

    if (validator.eMail(email) === false) {
        email.style.backgroundColor= "rgba(253, 114, 114, 0.6)"
    }
    else {
        email.style.backgroundColor= "#fff"
    }
}
let validator = {
    textpattern  : /.*\S.*/ ,
    emailpattern : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z-]{2,64}$/,
    text : function (text) {
      return text = this.textpattern.test(text.value);
    },
    eMail : function (email) {
      return emailResult = this.emailpattern.test(email.value);
    }
  }