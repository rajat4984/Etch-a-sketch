let defaultNUmber = 16;
var defaultColor = "black";
let defaultBackgroundColor = "#121212";
const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");
const colorSelector = document.querySelector(".color-selector");
const eraserButton = document.querySelector(".eraser-button");
const pixelRange = document.querySelector(".pixel-range");
const randomButton = document.querySelector(".random-color");

//EVENTS LISTERNER
resetButton.addEventListener("click", handleReset);
colorSelector.addEventListener("change", handleColor);
eraserButton.addEventListener("click", handleEraser);
pixelRange.addEventListener("change", handlPixelRange);
randomButton.addEventListener("click", handlRandomColor);

//FUNCTIONS
const createGrid = (number) => {
  let area = number * number;
  for (let i = 1; i <= area; i++) {
    let divSquare = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${number},1fr)`;
    container.style.gridTemplateRows = `repeat(${number},1fr)`;
    divSquare.style.backgroundColor = defaultBackgroundColor;
    divSquare.style.transition = ".3s";
    container.insertAdjacentElement("beforeend", divSquare);
  }
  pixelMaker(defaultColor);
};

function pixelMaker(color) {
  let pixels = container.querySelectorAll("div");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", handleHover(color));
  });
}

function removePixels() {
  let pixels = container.querySelectorAll("div");
  pixels.forEach((pixel) => {
    pixel.remove();
  });
}

//EVENT LISTENER FUNCTIONS
function handleReset() {
  removePixels();
  createGrid(pixelRange.value);
}

const handleHover = (color) => {
  return (e) => {
    e.target.style.backgroundColor = color;
  };
};

function handleColor(e) {
  defaultColor = e.target.value;
  pixelMaker(defaultColor);
}

function handleEraser() {
  let eraserColor = defaultBackgroundColor;
  pixelMaker(eraserColor);
}

function handlPixelRange(e) {
  pixelMaker(defaultColor);
  removePixels();
  createGrid(e.target.value);
}

function handlRandomColor(e) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = "#" + randomColor;
  pixelMaker(randomColor);
}

//DEFAULT LAYOUT
createGrid(defaultNUmber);
