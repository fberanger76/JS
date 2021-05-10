    let password = document.getElementById("pass") ;
    let passwordConfirm = document.getElementById("pass1") ; 
    let buttonValidate = document.getElementById("validate");

    buttonValidate.addEventListener("click", () => {

    if(password.value == passwordConfirm.value) {
        document.getElementById("pass").style.borderColor = "green";
        document.getElementById("pass1").style.borderColor = "green";
    }
    else {
        document.getElementById("pass").style.borderColor = "red";
        document.getElementById("pass1").style.borderColor = "red";
    }
})