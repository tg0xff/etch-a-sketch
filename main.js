const canvas = document.querySelector("#canvas");
const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const select = document.querySelector("select");

let colorMode = "black";
let greyscaleFactor = 100;

function makeCanvasGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
  }
  setFlexBasis(gridSize);
}

function setFlexBasis(gridSize) {
  let flexBasis = 100 / Math.sqrt(gridSize);
  flexBasis = flexBasis.toString();
  let canvasDivs = canvas.querySelectorAll("div");
  canvasDivs.forEach((elem) => {
    elem.style["flex-basis"] = flexBasis + "%";
  });
}

function getNewCanvasSize() {
  let newGridSize;
  let keepGoing = true;
  while (keepGoing) {
    newGridSize = prompt("Enter new grid size (max. 1024):");
    newGridSize = +newGridSize;
    if (typeof newGridSize === "number" && newGridSize > 0 && newGridSize < 1025) {
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

function colorModeBlack(e) {
  e.target.style["background-color"] = "black";
}

function colorModeGreyscale(e) {
  // The division is necessary because subtracting greyscaleFactor by 0.1 causes
  // some floating point weirdness that leads to unexpected behaviour.
  const rgbVal = 255 * (greyscaleFactor / 100);
  if (greyscaleFactor > 0) {
    greyscaleFactor = greyscaleFactor - 10;
  } else {
    greyscaleFactor = 100;
  }
  e.target.style["background-color"] = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
}

function colorModeRainbow(e) {
  let r = 255 * Math.random();
  r = Math.round(r);
  let g = 255 * Math.random();
  g = Math.round(g);
  let b = 255 * Math.random();
  b = Math.round(b);
  e.target.style["background-color"] = `rgb(${r}, ${g}, ${b})`;
}

canvas.addEventListener("mouseover", (e) => {
  if (e.target.parentNode.getAttribute("id") === "canvas") {
    switch (colorMode) {
    case "black":
      colorModeBlack(e);
      break;
    case "greyscale":
      colorModeGreyscale(e);
      break;
    case "rainbow":
      colorModeRainbow(e);
      break;
    }
  }
});

grid.addEventListener("click", (e) => {
  let newGridSize = getNewCanvasSize();
  resetCanvas();
  makeCanvasGrid(newGridSize);
});

reset.addEventListener("click", (e) => {
  const gridSize = canvas.childElementCount;
  resetCanvas();
  makeCanvasGrid(gridSize);
})

select.addEventListener("change", (e) => {
  colorMode = e.target.value;
  const click = new Event("click");
  reset.dispatchEvent(click);
})

makeCanvasGrid(16);
