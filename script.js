const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

const gridContainer = document.createElement('div');
container.appendChild(grid-container);
grid-container.classList.add('grid-container');

let Add = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid-square');
}