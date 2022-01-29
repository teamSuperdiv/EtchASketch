// rows and columns
let rows = 16;
let columns = 16;

// main sketch container
let sketch_container = document.querySelector(".sketch-container");

// change row/column count
let divCount = window.getComputedStyle(document.documentElement).getPropertyValue('--div-repeat');
function changeCount() {
    
}

// create the grid elements
function createGrid(rows, columns) {
    for (let j = 0; j < columns*rows; j++) {
        // creating the divs
        let block = document.createElement("div");
        block.classList.add("block");
        sketch_container.append(block);
        sketch_container.addEventListener("mouseover", (e) => {
            e.target.classList.add("hovered");
        })
    }
}

// clear everything
function clearAll() {
    document.querySelectorAll('.block').forEach((block) => {
        block.classList.remove('hovered');
    })
}

// change number of rows, columns
function changeSize() {
    let size = document.querySelector('#user-size').value;
    rows = size;
    columns = size;
    document.documentElement.style.setProperty('--div-repeat', size);
    clearAll();
    createGrid(rows,columns);
}

// change color of blocks
function changeColor() {
    let newColor = document.querySelector('#color-picker').value;
    document.documentElement.style.setProperty('--block-color', newColor);
}

createGrid(rows,columns);














