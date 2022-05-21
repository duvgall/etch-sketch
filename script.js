
let gridSquare;

const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

const gridContainer = document.createElement('div');
container.appendChild(gridContainer);
gridContainer.classList.add('grid-container');

const sliderContainer = document.createElement('div');
container.appendChild(sliderContainer);
sliderContainer.classList.add('slide-container');

const slider = document.createElement('input');
slider.type = 'range';
slider.min = 4;
slider.max = 100;
slider.classList.add('slider');
sliderContainer.appendChild(slider);

let Add = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
let gridSquare = document.createElement('div');
gridSquare.classList.add('grid-square');
gridSquare.id = ('square ' + i);
gridContainer.appendChild(gridSquare);
};
/*
gridSquare.addEventListener("mouseenter", e => {
  e.style.backgroundColor = 'black';
}  )
*/
function removeGrid() {
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  createGrid();
}

function createGrid() {
  let input = prompt('Please enter a number between 4 and 100');

  for(let i = 0; i < input; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.id = ('square ' + i);
    gridContainer.appendChild(gridSquare);
  }
}