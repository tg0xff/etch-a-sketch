const body = document.querySelector("body");
const button = document.querySelector("button");
let activation_count = 10;

function setNewGridSize() {
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
  activation_count = 10;
}

function makeDivs(grid_size) {
  const div = document.createElement("div");
  div.classList.add("grid-container");

  for (let i = 0; i < grid_size ** 2; i++) {
    let square = document.createElement("div");
    /* Adjust each square's dimensions to the size of the grid. */
    square.style["flex-basis"] = `${100 / grid_size}%`;
    div.appendChild(square);
  }

  body.appendChild(div);
}

function listenGridDivs() {
  const divs = document.querySelectorAll(".grid-container div");
  divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      e.target.style["background-color"] =
        "rgb(" +
        `${activation_count * 10}%, ` +
        `${activation_count * 10}%, ` +
        `${activation_count * 10}%)`;

      if (activation_count > 0) {
        activation_count--;
      }
    });
  });
}

makeDivs(16);
listenGridDivs();
button.addEventListener("click", setNewGridSize);
