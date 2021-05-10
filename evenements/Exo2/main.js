    let password = document.getElementById("pass");
    let passwordConfirm = document.getElementById("pass1");
    let buttonValidate = document.getElementById("validate");

    buttonValidate.addEventListener("click", () => {

        if (password.value == passwordConfirm.value) {
            pass.classList.toggle("green");
            pass1.classList.toggle("green")
        } else {
            pass.classList.toggle("red");
            pass1.classList.toggle("red")
        }
    })