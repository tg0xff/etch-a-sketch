const canvas = document.querySelector("#canvas");
canvas.addEventListener("mouseover", (e) => {
  if (e.target.parentNode.getAttribute("id") === "canvas") {
    e.target.classList.toggle("drawn");
  }
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  let newGridSize;
  let keepGoing = true;
  while (keepGoing) {
    newGridSize = prompt("Enter new grid size:");
    newGridSize = +newGridSize;
    if (typeof newGridSize === "number" && newGridSize > 0) {
      keepGoing = false;
    }
  }
  makeCanvasGrid(newGridSize);
})

function makeCanvasGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
  }
}

makeCanvasGrid(16);
