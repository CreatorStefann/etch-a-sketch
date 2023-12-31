let gridSize = 16;
const container = document.querySelector('#container');
const divs = [];

function createGrid() {
  const masura = 512 / gridSize;

  // Clear previous grid items if any
  divs.forEach((div) => div.remove());
  divs.length = 0;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${masura}px`;
    div.style.height = `${masura}px`;
    container.appendChild(div);
    divs.push(div);
  }
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

function hover() {
  let isMouseDown = false;

  container.addEventListener('mousedown', () => {
    isMouseDown = true;
  });

  container.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
      if (isMouseDown) {
        const randomColor = getRandomRGB();
        div.style.backgroundColor = randomColor;
      }
    });
  });
}

function size() {
  let button = document.querySelector('button');
  button.addEventListener('click', () => {
    let gridSizeString = prompt("How many squares do you want to see on a side?");
    const newGridSize = parseInt(gridSizeString);

    if (newGridSize) {
      gridSize = newGridSize;
      createGrid();
      hover();
    }
  });
}

size();
createGrid();
hover();
