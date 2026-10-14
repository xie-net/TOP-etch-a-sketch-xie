const container = document.querySelector("#container");
const containerSize = 800;
const button = document.querySelector("#btn");

createGrid(16);

button.addEventListener("click", () => {
    let grid = Number(prompt('Enter the size of your grid: (ex. 16)'));
    
    if (grid > 100) {
        prompt('Grid is too big :(');
        return;
    }
    
    createGrid(grid);
});


function createGrid(grid) {
    let boxSize = containerSize / grid;
    let gridSize = grid * grid;

    container.replaceChildren();

    for (let i = 1; i <= gridSize; i++) {

        const boxes = document.createElement("div");
        container.appendChild(boxes);
        boxes.classList.add("grid-boxes");

        boxes.style.width = `${boxSize}px`;
        boxes.style.height = `${boxSize}px`;
    }
}

container.addEventListener("mouseover", (event) => {
    event.target.classList.add("changed");
});