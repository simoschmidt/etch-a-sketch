const container = document.querySelector("#container");

gridSize = 16;
//let gridSize = prompt('What grid size would you like?');
//change this later to a slider?

for (let i = 0; i < gridSize; i++) {
  const column = document.createElement("div");
  //columnDiv.textContent = '-c' + (i + 1).toString();
  container.appendChild(column);
  
  for (let i = 0; i < gridSize; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.textContent = '-r' + (i + 1).toString();
  rowDiv.classList.add("rowDiv");
  column.appendChild(rowDiv);
  }
}