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

function removeGrid() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((element) => {
    element.remove();
  });
}

//Starting grid
createGrid(16);
let gridSize = 16;

gridContainer.addEventListener("mouseover", (event) => {
  if (event.target.className === "gridSquare") {
    event.target.style.background = "black";
  }
});

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
  const traceLine = document.querySelectorAll(".gridSquare");
  traceLine.forEach((element) => {
    element.style.background = "#F2F2F2";
  });
});

const sizeButton = document.querySelector(".sizeButton");
sizeButton.addEventListener("click", () => {
  let inputNumber = parseInt(
    prompt("Enter a grid size between 10 and 100 (Current: " + gridSize + ")"),
    10
  );
  if (isNaN(inputNumber)) {
    alert("Please enter a number between 10 and 100");
  } else if (inputNumber < 10 || inputNumber > 100) {
    alert("Please enter a number between 10 and 100");
  } else {
    removeGrid();
    createGrid(inputNumber);
    gridSize = inputNumber;
  }
});
