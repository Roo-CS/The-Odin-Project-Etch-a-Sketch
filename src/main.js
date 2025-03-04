function createGrid(){

  let container = document.querySelector(".container");
  removeGrid(container);

  let input = document.querySelector("input");
  let gridSize = input.value;
  let boxSize = getComputedBoxSize(container, gridSize);

  if(gridSize > 1 && grid <= 100){
    for(let i = 0; i < gridSize; i++){
      for(let j = 0; j < gridSize; j++){
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.height = boxSize;
        box.style.width = boxSize;
        box.addEventListener("mouseover", ()=>{
          box.style.backgroundColor = "blue";
        });
        container.appendChild(box);
      }
    }
  }
}

function removeGrid(container){
  let child = container.lastElementChild;
  while(child){
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

function getComputedBoxSize(container, gridSize){
  return String((parseInt(window.getComputedStyle(container).getPropertyValue("height")) / gridSize) + "px");
}