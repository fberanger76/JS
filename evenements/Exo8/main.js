let formDuplicate = document.getElementById("formDuplicate");
let btnValidate = document.getElementById("validate");
let clone = formDuplicate.cloneNode(true);

btnValidate.addEventListener("click", () => {
  document.body.appendChild(clone);
});