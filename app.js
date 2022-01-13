let container = document.querySelector(".container");
let i = 0;

const createGrid = () =>{
    let i = 0
    let divContainer = document.createElement("div")
    while (i < 16) {
        let squareDivs = document.createElement("div");
        squareDivs.style.width = "20px";
        squareDivs.style.height = "20px";
        squareDivs.style.backgroundColor = "red";
        squareDivs.style.border = "1px solid black"
        divContainer.appendChild(squareDivs)
        container.appendChild(divContainer);
        i++;
      }
}

while(i<16){
    createGrid()
    i++;
}

