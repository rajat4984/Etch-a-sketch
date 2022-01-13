let defaultNUmber = 16;
const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener('click',handleReset)


const createGrid = (number) => {
  let area = number * number;
  for (let i = 1; i <= area; i++) {
    let divSquare = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${number},1fr)`;
    container.style.gridTemplateRows = `repeat(${number},1fr)`;
    divSquare.style.backgroundColor = "white";
    divSquare.style.border = "1px black solid";
    container.insertAdjacentElement("beforeend", divSquare);
  }
  let pixels = container.querySelectorAll("div");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", handleHover);
  });
};




function handleHover(e){
  e.target.style.backgroundColor = "red";
};

function handleReset(){
  let pixels = container.querySelectorAll("div");
  let userNumber = prompt("Number of squares you want")
  pixels.forEach((pixel) =>{
    pixel.remove();
  })
  createGrid(userNumber)
};

createGrid(defaultNUmber);
