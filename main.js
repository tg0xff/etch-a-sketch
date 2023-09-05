const body = document.querySelector("body");

function makeDivs() {
  const div = document.createElement("div");
  div.setAttribute("id", "grid-container");

  for (let i = 0; i < 256; i++) {
    let column = document.createElement("div");
    div.appendChild(column);
  }

  body.appendChild(div);
}
makeDivs();

const divs = document.querySelectorAll("#grid-container div");
divs.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    e.target.classList.add("hovered");
  })
});
