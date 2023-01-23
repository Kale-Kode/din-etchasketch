const container = document.querySelector(".container");

function makeGrid(x){
    for (let i = 0; i < x**2; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    checkHover();
}

function checkHover(){
    const cells = Array.from(document.querySelectorAll(".cell"));
    cells.forEach(cell => cell.addEventListener("mouseover", changeColor));
}

function changeColor(event){
    let random = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = `#${random}`;
}

function changeGrid(){
    let squares = window.prompt("New dimensions for grid:")
    while (squares > 100 || squares < 3){
        squares = window.prompt("Please enter a value between 3 and 100:")
    }
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    makeGrid(squares);
}

function checkButton(){
    const button = document.querySelector("#btn");
    button.addEventListener("click", changeGrid)
}

function clear(){
    const cells = Array.from(document.querySelectorAll(".cell"));
    cells.forEach(cell => cell.style.backgroundColor = "grey");
}

function run(){
    makeGrid(16);
    checkButton();

    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", clear)
}

run();
