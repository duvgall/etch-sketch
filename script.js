const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

const gridContainer = document.createElement('div');
container.appendChild(gridContainer);
gridContainer.classList.add('grid-container');

/*
const sliderContainer = document.createElement('div');
container.appendChild(sliderContainer);
sliderContainer.classList.add('slide-container');

const slider = document.createElement('input');
slider.type = 'range';
slider.min = 4;
slider.max = 100;
slider.classList.add('slider');
sliderContainer.appendChild(slider);
*/

gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
for(let i = 0; i < 16; i++) {
  let gridSquare = document.createElement('div');
  gridSquare.classList.add('grid-square');
  gridSquare.id = ('square ' + i);
  gridContainer.appendChild(gridSquare);
}


function removeGrid() {
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  createGrid();
}

function createGrid() {
  let input = prompt('Please enter a number between 4 and 100');
gridContainer.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  for(let i = 0; i < input * input; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.id = ('square ' + i);
    gridContainer.appendChild(gridSquare);
  }
}

function makeBlack(e) {
  e.target.style.backgroundColor = "rgb(0,0,0)";
}

gridContainer.addEventListener('mouseenter', makeBlack, {capture: true});