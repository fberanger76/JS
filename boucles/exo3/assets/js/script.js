let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
languages.forEach(myFunction);
function myFunction(item, index) {
    document.getElementById("table").innerHTML += index + ":" + item + "<br>"; 
  }

  ou 

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let valuesTable = document.getElementById("table");

languages.forEach(element => {
    valuesTable.innerHTML += `<p>${element}</p>`;
});
