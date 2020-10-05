// Main function
function main()
{
    // Get the grid
    const grid = document.querySelector("table");
    console.log(grid);
    // Get the grid cells
    const cells = grid.querySelectorAll("td");
    console.log(cells);
    // Get the button
    const btn = document.querySelector("#restart");

    // Variable to track moves
    let moves = 0;

    // Event listener for click
    grid.addEventListener("mousedown", play);
    grid.addEventListener("mouseup", evaluate);
    btn.addEventListener("click", ()=>{
        window.refresh();
    })


    function play(e) {
        // Check if the cell already contains mark
        if (e.target.innerText !== "")
        {
            alert("Cannot Play Here")
        }

        else {
            // Even plays
            if (moves % 2 === 0){
                console.log(e.target);
                e.target.classList.add("X");
                e.target.innerText="X";
                moves++;
            }
            // Odd plays
            else {
                console.log(e.target);
                e.target.classList.add("O");
                e.target.innerText="O";
                moves++;
            }
        }

    }

    function evaluate(e){
        // Check state of the game
        if(rows(0, cells) && rows(3, cells) && rows(6, cells) &&
        columns(0, cells) && columns(1, cells) && columns(2, cells)&&
        diagonalright(0, cells) && diagonalleft(2, cells))
        {
            draw(cells);
        }

    }

    // functions to check the state of the game
    function rows(cell, cells) {
        // Check if any cell in the row is empty
        if (cells[cell].innerText === "" || cells[cell+1].innerText === "" || cells[cell+2].innerText === ""){
            console.log("Still Playing");
            return 0;
        }

        const row = cells[cell].innerText + cells[cell+1].innerText + cells[cell+2].innerText;
        // Check if X won
        if (row === "XXX"){
            console.log("X WON");
            alert("X WON");
            location.reload();
        }

        else if (row === "OOO"){
            console.log("O WON");
            alert("O WON");
            location.reload();
        }
        else {
            return 1;
        }
    }

    // function to check the columns
    function columns(cell, cells) {
        // Check if any cell in the row is empty
        if (cells[cell].innerText === "" || cells[cell+3].innerText === "" || cells[cell+6].innerText === ""){
            console.log("Still Playing")
            return 0;
        }
        const row = cells[cell].innerText + cells[cell+3].innerText + cells[cell+6].innerText;
        // Check if X won
        if (row === "XXX"){
            console.log("X WON");
            alert("X WON");
            location.reload();
        }

        else if (row === "OOO"){
            console.log("O WON");
            alert("O WON");
            location.reload();
        }
        else {
            return 1;
        }
    }

    // functions to check the diagonals
    function diagonalright(cell, cells) {
        // Check if any cell in the row is empty
        if (cells[cell].innerText === "" || cells[cell+4].innerText === "" || cells[cell+8].innerText === ""){
            console.log("Still Playing");
            return 0;
        }
        const row = cells[cell].innerText + cells[cell+4].innerText + cells[cell+8].innerText;
        // Check if X won
        if (row === "XXX"){
            console.log("X WON");
            alert("X WON");
            location.reload();
        }

        else if (row === "OOO"){
            console.log("O WON");
            alert("O WON");
            location.reload()
        }
        else {
            return 1;
        }
    }

    function diagonalleft(cell, cells) {
        // Check if any cell in the row is empty
        if (cells[cell].innerText === "" || cells[cell+2].innerText === "" || cells[cell+4].innerText === ""){
            console.log("Still Playing")
            return 0;
        }
        const row = cells[cell].innerText + cells[cell+2].innerText + cells[cell+4].innerText;
        // Check if X won
        if (row === "XXX"){
            console.log("X WON");
            alert("X WON");
            location.reload();
        }

        else if (row === "OOO"){
            console.log("O WON");
            alert("O WON");
            location.reload();
        }
        else {
            return 1;
        }
    }

    // Checks for draw
    function draw(cells){
        for (let cell of cells){
            if(cell.innerText === "")
            {
                console.log("Still Playing")
                return 0;
            }
        }
        console.log("Its a Draw");
        alert("Its a DRAW");
        location.reload();
        return 2;
    }
}


// Run the main function when the document has finished loading
document.addEventListener("DOMContentLoaded", () => {
    console.log("Document has finished loading and parsing. Running Main function");
    main();
})
