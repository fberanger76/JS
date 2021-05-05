let divNumber = document.getElementById("number");

for (let num = 0; num <= 100; num++) {
  
    if (num % 15 ==0) {
  
        divNumber.innerHTML += `<p>...</p>`;
    } else {
       
        divNumber.innerHTML += `<p>${num}</p>`;
    }
}