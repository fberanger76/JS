let formDuplicate = document.getElementById("formDuplicate");
let btnValidate = document.getElementById("validate");

btnValidate.addEventListener("click", () => {
  let clone = formDuplicate.cloneNode(true);
  document.getElementById("cloneDestination").appendChild(clone);
});