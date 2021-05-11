let text = document.getElementById("paragraphe");
let colorPink = document.getElementById("colorPink");
let colorBlue = document.getElementById("colorBlue");
let colorPurple = document.getElementById("colorPurple");
let fontBold = document.getElementById("fontBold");
let fontItalic = document.getElementById("fontItalic");

  colorPink.addEventListener("click", () => {
    text.style.color = 'pink';
  });

  colorBlue.addEventListener("click", () => {
    text.style.color = 'blue';
  });

  colorPurple.addEventListener("click", () => {
    text.style.color = 'purple';
  });

  fontBold.addEventListener("click", () => {
    text.style.fontWeight = 'bold';
  });

  fontItalic.addEventListener("click", () => {
    text.style.fontStyle = 'italic';
  });