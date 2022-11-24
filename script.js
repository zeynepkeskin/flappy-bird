var y = 60;
let x = 40;
let pipesleft = 130;
let pipex = 100;
let bird = document.querySelector('#bird');
let score = 0;

function jump() {
    y = y + 25;
    document.querySelector('#bird').style.bottom = y + "vh";
}

/*
function gameover() {
    clearInterval(gameloop);
    document.querySelector('#bird').style.display = "none";
    document.querySelector('#pipe1').style.display = "none";
    document.querySelector('#pipe2').style.display = "none";
    document.querySelector('#gameover').style.color = "red";

}
*/
const gameloop = setInterval(
    function update() {
        if (pipesleft > -50) {
            pipesleft = pipesleft - 0.5;
            document.querySelector('#pipe1').style.left = pipesleft + "vw";
            document.querySelector('#pipe2').style.left = pipesleft + "vw";
        }
        else {
            document.querySelector('#pipe1').style.left = "130vw";
            document.querySelector('#pipe2').style.left = "130vw";
            pipesleft = pipesleft + 180;
        }
        if (y > 0) {
            y--;
            document.querySelector('#bird').style.bottom = y + "vh";
        }
        else {
            gameover()
        }
        if (pipesleft === x) {
            score = score + 1;
            document.getElementById("score").innerHTML = score;
        }
    }
    , 20);

