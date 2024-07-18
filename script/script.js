const container = document.querySelector("#container");

//let gridSize = prompt('What grid size would you like?');
//change this later to a slider?
function createGrid (userGrid) {
  let gridSize = userGrid;
  for (let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    column.classList.add("columnDiv");
    //columnDiv.textContent = '-c' + (i + 1).toString();
    container.appendChild(column);
    
    for (let j = 0; j < gridSize; j++) {
    const rowDiv = document.createElement("div");
    rowDiv.textContent = '';
    rowDiv.classList.add("rowDiv");
    //rowDiv.textContent = '-r' + (j).toString();
    column.appendChild(rowDiv);
      
      rowDiv.addEventListener("mouseover", () => {
        rowDiv.style.backgroundColor = "red";
      });
    }
  }
}

createGrid (8);

/*
One thing to be careful of with this approach is when the mouse is released somewhere outside the target element. In this case you may want to include an additional mouseleave event to also remove the added listener or add mouseup to the window object so that it can detect when the mouse is released outside the target element.

gridContainer.addEventListener("mousedown", () => {
  gridContainer.addEventListener("mouseover", coloring);
});
window.addEventListener("mouseup", () => {
  gridContainer.removeEventListener("mouseover", coloring);
});
*/