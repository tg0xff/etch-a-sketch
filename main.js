const canvas = document.querySelector("#canvas");

canvas.addEventListener("mouseover", (e) => {
  if (e.target.parentNode.getAttribute("id") === "canvas") {
    e.target.style["background-color"] = "black";
  }
})

function makeCanvasGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
  }
}

makeCanvasGrid(16);
