const gridContainer = document.querySelector(".container");

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

resetButton.addEventListener("click", () => {
  const elements = document.querySelectorAll(".gridSquare");
  elements.forEach((element) => {
    element.style.background = "#F2F2F2";
  });
});

const sizeButton = document.querySelector(".sizeButton");
