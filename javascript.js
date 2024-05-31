const gridContainer = document.querySelector(".container");
const gridCells = document.querySelectorAll(".gridSquare");

function createGrid(num) {
  for (i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (j = 0; j < num; j++) {
      const cell = document.createElement("div");
      cell.className = "gridSquare";
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
}

createGrid(8);

gridContainer.addEventListener("mouseover", (event) => {
  if (event.target.className === "gridSquare") {
    event.target.style.background = "black";
  }
});

const resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("onclick", () => {
  let trace = document.querySelectorAll(".gridSquare");
  trace.forEach((cell) => {
    console.log(cell);
  })
});

const sizeButton = document.querySelector(".sizeButton");
