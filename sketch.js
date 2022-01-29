// rows and columns
let rows = 16;
let columns = 16;

// main sketch container
let sketch_container = document.querySelector(".sketch-container");

// change row/column count
let divCount = window.getComputedStyle(document.documentElement).getPropertyValue('--div-repeat');
function changeCount() {
    
}

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

function clearAll() {
    document.querySelectorAll('.block').forEach((block) => {
        block.classList.remove('hovered');
    })
}
createGrid(rows,columns);














