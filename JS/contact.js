//Use RegEx to validate form

let submitContact = document.getElementById('submitContact');
submitContact.addEventListener('click', validateForm);
let form = document.getElementById('contact');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let e_mail = document.getElementById('e-mail');

const contactFormContent = form.innerHTML;

function validateForm(){
    event.preventDefault();
    let sub, em, mes;
    if (validator.text(subject) === false) {
        subject.style.backgroundColor= "rgba(253, 114, 114, 0.6)"
        sub = false;
    }
    else {
        subject.style.backgroundColor= "#fff"
        sub = true;
    }
    
    if (validator.text(message) === false) {
        message.style.backgroundColor= "rgba(253, 114, 114, 0.6)"
        mes = false;
    }
    else {
        message.style.backgroundColor= "#fff";
        mes = true;
    }

    if (validator.eMail(e_mail) === false) {
        e_mail.style.backgroundColor= "rgba(253, 114, 114, 0.6)"
        em = false;
    }
    else {
        e_mail.style.backgroundColor= "#fff"
        em = true;
    }

    if (sub === true && mes === true && em === true) {
      form.innerHTML = '<div id="sentMessage">' +
                       '<h2>Great, we got you message!</h2>' +
                       '<h3>We will get back to you as soon as we can.</h3>' +
                       '</div>';
    }
    let waiting = setInterval(()=> {
      form.innerHTML = contactFormContent;
      clearInterval(waiting);
    }, 6000);
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

let input = document.getElementById( 'file-upload' );
let infoArea = document.getElementById( 'file-upload-filename' );

input.addEventListener( 'change', showFileName );

function showFileName( event ) {
  let input = event.srcElement;
  let fileList = "Files:";
  for (let i = 0; i < input.files.length; i++) {
    fileList += `<p>${input.files[i].name}</p>`
  }
  infoArea.innerHTML = fileList;
}