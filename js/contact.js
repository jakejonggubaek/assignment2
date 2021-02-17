const formElement = document.querySelector('form');

formElement.addEventListener('submit', function(e){
    e.preventDefault();

    const nameElement = document.querySelector('#user-name');
    const emailElement = document.querySelector('#email-addr');
    const msgElement = document.querySelector('#message');

    if (nameElement.value === "") {
        alert('Please type your name');
        nameElement.focus();
    }else if(emailElement.value === "" ) {
        alert('Please type your email');
        emailElement.focus();
    }else if(msgElement.value === "") {
        alert('Please type your message');
        msgElement.focus();
    }else {
        alert("your message is sent");
        nameElement.value = "";
        emailElement.value = "";
        msgElement.value = "";
        location.reload();
    }
});