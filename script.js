function createGrid(x) {
  let edge = 600 / x;
  let gridDivId = 0;
  for (let rows = 0; rows < x; rows++) {
    for (let column = 0; column < x; column++) {
      var gridDiv = document.createElement("div");
      gridDivId++;

      gridDiv.id = gridDivId;
      gridDiv.className = "grid-div";
      gridDiv.style.width = edge + "px";
      gridDiv.style.height = edge + "px";

      document.getElementById("gridContainer").append(gridDiv);
    }
  }
  fillDiv();
}

function fillDiv() {
  const grid = document.getElementById("gridContainer");
  grid.addEventListener("mouseover", (e) => e.target.setAttribute("class", "grid-div-coloured"));
}

function cleanGrid() {
  document.querySelector("#gridContainer").replaceChildren();
}

function refreshGrid() {
  var x = prompt("How many boxes per side?", 16);

  if (x.trim() !== "" && !isNaN(x) && x > 0) {
    cleanGrid();
    createGrid(x);
  } else {
    alert("That's not a number! Please try again.");
    refreshGrid();
  }
}

addEventListener("DOMContentLoaded", (e) => createGrid(16));
