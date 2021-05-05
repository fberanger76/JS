// document sert à cible le doc HTML et getElementById à récupérer un élément HTML par son ID (ici une div)
let divYear = document.getElementById("year");

// On utilise une boucle for étant donné que nous savons d'avance le nombre de tours qu'elle effectuera.
for (let year = 2020; year <= 2030; year++) {
    // Cette condition permet d'identifier les années bisextiles
    if (year % 100 != 0 && year % 4 == 0) {
        // innerHTML sert à écrire du HTML à l'intérieur d'une balise.
        // += signifie qu'on ajoute du contenu au contenu existant
        // divYear.innerHTML += '<p class="color:red">' + year + '</p>';
        divYear.innerHTML += `<p class="colorRed">${year}</p>`;
    } else {
        // divYear.innerHTML += "<p>" + year + "</p>";
        divYear.innerHTML += `<p>${year}</p>`;
    }
}