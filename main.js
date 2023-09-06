const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  let new_size;
  let keepGoing = true;

  while (keepGoing) {
    new_size = +prompt("Enter a number (max. 100): ");
    if (new_size > 100) continue;
    keepGoing = false;
  }

  const grid = document.querySelector(".grid-container");
  body.removeChild(grid);

  makeDivs(new_size);
  listenGridDivs();
})

function makeDivs(grid_size) {
  const div = document.createElement("div");
  div.classList.add("grid-container");

  for (let i = 0; i < (grid_size ** 2); i++) {
    let square = document.createElement("div");
    div.appendChild(square);
  }

  body.appendChild(div);
}
makeDivs(16);

function listenGridDivs() {
  const divs = document.querySelectorAll(".grid-container div");
  divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      e.target.classList.add("hovered");
    })
  });
}
listenGridDivs()
