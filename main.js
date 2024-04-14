const canvas = document.querySelector("#canvas");
const button = document.querySelector("button");

function makeCanvasGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
  }
}

function getNewCanvasSize() {
  let newGridSize;
  let keepGoing = true;
  while (keepGoing) {
    newGridSize = prompt("Enter new grid size:");
    newGridSize = +newGridSize;
    if (typeof newGridSize === "number" && newGridSize > 0) {
      keepGoing = false;
    }
  }
  return newGridSize;
}

function resetCanvas() {
  let child = canvas.querySelector("div");
  while (child) {
    canvas.removeChild(child);
    child = canvas.querySelector("div");
  }
}

canvas.addEventListener("mouseover", (e) => {
  if (e.target.parentNode.getAttribute("id") === "canvas") {
    e.target.classList.toggle("drawn");
  }
});

button.addEventListener("click", (e) => {
  let newGridSize = getNewCanvasSize();
  resetCanvas();
  makeCanvasGrid(newGridSize);
})

makeCanvasGrid(16);
