let container = document.querySelector(".container");
let i = 0;

function handleDivHover(e) {
    console.log(e.target)
    e.target.style.backgroundColor = "red";
}

const createGrid = () => {
  let i = 0;
  let divContainer = document.createElement("div");
  divContainer.classList.add("div-container");
  while (i < 16) {
    let squareDivs = document.createElement("div");
    squareDivs.classList.add("square-div");
    squareDivs.style.width = "20px";
    squareDivs.style.height = "20px";
    squareDivs.style.backgroundColor = "white";
    squareDivs.style.border = "1px solid black";
    squareDivs.addEventListener("mouseover", handleDivHover);
    divContainer.appendChild(squareDivs);
    container.appendChild(divContainer);
    i++;
  }
};

while (i < 16) {
  createGrid();
  i++;
}
