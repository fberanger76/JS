function multiplication(){
    let num1, num2, multiplication;
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    multiplication = num1 * num2;
    document.getElementById("multiplication").value = multiplication;
}