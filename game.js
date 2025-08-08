let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let x = 100;
let y = 100;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 50, 50);

    x += 1; // kotak bergerak ke kanan
    requestAnimationFrame(update);
}

update();