let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let weekDays = document.getElementById("weekDays");

days.forEach(element => {

    if (element == 'Samedi') {
        weekDays.innerHTML += `<p><b>${element}</b></p>`;
    }
    else if (element == 'Dimanche') {
        weekDays.innerHTML += `<p><b>${element}</b></p>`;
    }
    else {
        weekDays.innerHTML += `<p>${element}</p>`;
    }
});