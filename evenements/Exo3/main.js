let inputName = document.getElementById("inputName");
let inputMail = document.getElementById("inputMail");
let inputAge = document.getElementById("inputAge");
let regexName = /^[a-zÀ-ÿ \-]+$/gmi;
let regexMail = /^[a-z0-9\.\-\_]+@{1}[a-z0-9]+\.{1}[a-z]{2,4}$/gm;
let regexAge = /^[0-9]{1,3}$/;

inputName.addEventListener("keyup", function() {
    let messageName = document.getElementById("messageName");
    if(inputName.value.match(regexName) != null) {
        inputName.style.borderColor = "green";
        messageName.innerText = "Valeur correcte !";
        messageName.style.color = "green";
    } else {
        inputName.style.borderColor = "red";
        messageName.innerText = "Attention veuillez renseigner une valeur correcte !";
        messageName.style.color = "red";
    }
})

inputMail.addEventListener("keyup", function() {
    let messageMail = document.getElementById("messageMail");
    if(inputMail.value.match(regexMail) != null) {
        inputMail.style.borderColor = "green";
        messageMail.innerText = "Valeur correcte !";
        messageMail.style.color = "green";
    } else {
        inputMail.style.borderColor = "red";
        messageMail.innerText = "Attention veuillez renseigner une valeur correcte !";
        messageMail.style.color = "red";
    }
})

inputAge.addEventListener("keyup", function() {
    let messageAge = document.getElementById("messageAge");
    if(inputAge.value.match(regexAge) != null) {
        inputAge.style.borderColor = "green";
        messageAge.innerText = "Valeur correcte !";
        messageAge.style.color = "green";
    } else {
        inputAge.style.borderColor = "red";
        messageAge.innerText = "Attention veuillez renseigner une valeur correcte !";
        messageAge.style.color = "red";
    }
})