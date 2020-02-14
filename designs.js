// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

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