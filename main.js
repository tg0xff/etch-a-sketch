const canvas = document.querySelector("#canvas");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  canvas.appendChild(div);
}

canvas.addEventListener("mouseover", (e) => {
  if (e.target.parentNode.getAttribute("id") === "canvas") {
    e.target.style["background-color"] = "black";
  }
})
