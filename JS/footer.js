const email = document.getElementById('emailNewsLetter');
const newsletter_sub = document.getElementById('newsletter_sub');
const formContent = `<input type="email" placeholder="e-mail">` + `<input id="submitNewsLetter" type="button" value="JOIN" onclick="event.preventDefault()">`




function subscribe() {
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z-]{2,64}$/;

    if(emailpattern.test(email.value) === false) {
        email.style.backgroundColor = "rgba(253, 114, 114, 0.6)"
        email.value ="";
        email.placeholder = "Thats not an e-mail"
    } else {
        newsletter_sub.innerHTML = `<p style="font-size:1.5em;color:#0F3A97">Wonderful! You are have subscribed<p>`;
        let waiting = setInterval(()=> {
            newsletter_sub.innerHTML = formContent;
            clearInterval(waiting);
        }, 6000);
    }    
}

