image.addEventListener('click', function () {

    if (image.style.width == "50%") {

        image.style.width = "100%";

    } else if (image.style.width == "100%") {

        image.style.width = "200%";

    } else

        image.style.width = "50%";

});