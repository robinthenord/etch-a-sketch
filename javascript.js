let gridContainer = document.querySelector(".container");

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

createGrid(16);
