// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let colorPicker = document.querySelector("#colorPicker").value;
let gameTable   = document.getElementById("pixelCanvas"),
    pixels;

/**
* @description creates a grid dynamically based on user input for height and width
* @param {number} height - height of the grid in rows
* @param {number} width - width of the grid in columns
*
* @references: "Traversing an HTML table with JavaScript and DOM Interfaces",
* by Nasser Salem, Mozilla Web Docs. MDN JavaScript and DOM references. ".
*/
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let tableRow = document.createElement("tr");

        for (let j = 0; j < width; j++) {
            let tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }
        gameTable.appendChild(tableRow);
    }
}

function colorPixel(e){
    colorPicker = document.querySelector("#colorPicker").value;
    e.target.style.backgroundColor = colorPicker;
}

var start = document.getElementById('sizePicker');
start.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById("pixelCanvas").innerHTML = "";
    // Select size input provided by the user
    // When size is submitted by the user, call makeGrid()
    let gridHeight = document.getElementById("inputHeight").value;
    let gridWidth = document.getElementById("inputWidth").value;
    makeGrid(gridHeight, gridWidth);

    var pixels = document.querySelectorAll('td');

    // calls the ColorPixel function when any pixel area is clicked
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', colorPixel, false);
    }

});

function reset(){
    location.reload(true);
}

resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);
