function agrandir() {
    var image = document.getElementById("image");
    var width = image.clientWidth;
    if (width == 600) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } else {
        image.style.width = (width + 20) + "px";
    }
}