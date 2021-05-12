const form = document.getElementById("form");

form.addEventListener("focusin", (e) => {
  e.target.style.borderColor = "red";
  e.target.style.outline = "none";
});

form.addEventListener("focusout", (e) => {
  e.target.style.borderColor = "";
});