document.getElementById("submitLink").addEventListener("click", function() {
    let title = document.getElementById("title").value;
    let linkExpo = document.getElementById("linkExpo").value;
    let retrievedDataFromLocalStorage = localStorage.getItem("expoJson");
    if(retrievedDataFromLocalStorage == null) {
        localStorage.setItem("expoJson", JSON.stringify([{"title": title, "linkExpo": linkExpo}]))
    } else {
        jsonData = JSON.parse(retrievedDataFromLocalStorage);
        jsonData.push({"title": title, "linkExpo": linkExpo});
        localStorage.setItem("expoJson", JSON.stringify(jsonData));
    }
})