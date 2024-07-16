let b = document.getElementById("caro");

let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array(0, 0, 0, 0, 0);
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + " ";
    }
}

data += "<br/><br/><input type='button' value='tim' onclick='tim()'>"
b.innerHTML = data;

function tim() {
    let x = prompt("X: ");
    let y = prompt("Y: ");
    if (x >= 0 && x < 5 && y >= 0 && y < 5) {
        board[x][y] = "x";
        data = "";
        for (let i = 0; i < 5; i++) {
            data += "<br/>";
            for (let j = 0; j < 5; j++) {
                data += board[i][j] + " ";
            }
        }
        data += "<br/><br/><input type='button' value='tim' onclick='tim()'>"
        b.innerHTML = "<hr/>" + data;
    } else {
        alert("Viết lại tọa đô!");
    }
}