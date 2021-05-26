let containerToFill = document.getElementById("mainContainer");
localStorageData = JSON.parse(localStorage.expoJson);
if (localStorageData != null) {
    localStorageData.forEach((element, key) => {
        if(element != null) {
            containerToFill.innerHTML += `<ul id="item_${key}"><li>Titre de l'exposé : ${element.title}</li><li>Lien vers l'exposé : <a href="${element.linkExpo}" title="${element.title}">Cliquer ici</a></li><button class="deleteButtons" value="${key}">Supprimer l'exposé</button></ul>`;
        };
    });
    let deleteButtonsArray = document.querySelectorAll(".deleteButtons");
    deleteButtonsArray.forEach(element => {
        element.addEventListener("click", function() {
            keyToDelete = this.value;
            localStorageData[keyToDelete] = null;
            localStorage.setItem("expoJson", JSON.stringify(localStorageData));
            document.getElementById("item_" + keyToDelete).remove();
        });
    });
};