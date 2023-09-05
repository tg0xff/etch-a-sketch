const body = document.querySelector("body");

function makeDivs() {
  const div = document.createElement("div");
  div.classList.add("grid-container");

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    div.appendChild(square);
  }

  body.appendChild(div);
}
makeDivs();

const divs = document.querySelectorAll(".grid-container div");
divs.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    e.target.classList.add("hovered");
  })
});
