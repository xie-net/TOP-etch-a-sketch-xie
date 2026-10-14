const container = document.querySelector("#container");
const containerSize = 800;

let grid = 16;
let boxSize = containerSize / grid;

for (let i = 1; i <= 16; i++) {

    const boxes = document.createElement("div");
    container.appendChild(boxes);
    boxes.classList.add("grid-boxes");

    boxes.style.width = `${boxSize}px`;
    boxes.style.height = `${boxSize}px`;
}

