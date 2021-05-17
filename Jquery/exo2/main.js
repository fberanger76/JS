let premiereNote = parseInt($("#premiereNote").val());
let deuxiemeNote = parseInt($("#deuxiemeNote").val());
let troisiemeNote = parseInt($("#troisiemeNote").val());
let quatriemeNote = parseInt($("#quatriemeNote").val());
let derniereNote = parseInt($("#derniereNote").val());
let buttonValidate = $("#validate");
let moyenneNotes = (premiereNote + deuxiemeNote + troisiemeNote + quatriemeNote + derniereNote) / 5;

$("#validate").click(() => {
    if (moyenneNotes >= 0 && moyenneNotes < 10) {
        $("#moyenne").text(moyenneNotes + " En dessous de la moyenne");
    } else if (moyenneNotes >= 10 && moyenneNotes < 13) {
        $("#moyenne").text(moyenneNotes + " Moyen");
    } else if (moyenneNotes >= 13 && moyenneNotes < 16) {
        $("#moyenne").text(moyenneNotes + " Bien");
    } else if (moyenneNotes >= 16 && moyenneNotes < 20) {
        $("#moyenne").text(moyenneNotes + " Très bien");
    } else if(moyenneNotes == 20) {
        $("#moyenne").text(moyenneNotes + " Excellent");
    }
})