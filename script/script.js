const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector(".gridSizeBtn");

let isMouseDown = false;

function createGrid (userGrid) {
  container.textContent = '';
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
      
        rowDiv.addEventListener("mousedown", () => {
          isMouseDown = true;
          rowDiv.style.backgroundColor = "red";
        });
  
        rowDiv.addEventListener("mouseover", () => {
          if (isMouseDown) {
            rowDiv.style.backgroundColor = "red";
          }
      });
    }
  }
}

window.addEventListener("mouseup", () => {
  isMouseDown = false;
});

gridSizeBtn.addEventListener ("click", () => {
  console.log('button pressed');
  let userInput = prompt('Input grid size (1-100): ');
  while((Number(userInput)%1 != 0) || userInput < 1 || userInput > 100
   || userInput == '') {
    userInput = prompt(`
      That is not a number(!) from 1-100, please input again: 
      `); 
    }
  createGrid(userInput);
});
