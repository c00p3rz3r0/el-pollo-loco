let canvas;
let world;
let keyboard = new Keyboard();

function startgame() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = [];
    world = new World(canvas, keyboard);
    canvas.classList.remove('display-none');
    document.getElementById('startGame').classList.add('display-none');
    document.getElementById('bgImg').classList.add('display-none');
}

function restartGame(){
    location.reload();
}


window.addEventListener('keydown', (event) => {
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 68) {
        keyboard.D = true;
    }
})
window.addEventListener('keyup', (event) => {
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 68) {
        keyboard.D = false;
    }
})
document.addEventListener('DOMContentLoaded', (event)=>{
    let imgLeft = document.getElementById('left');
    imgLeft.addEventListener('touchstart', (e) =>{
        e.preventDefault();
        keyboard.LEFT = true;
    });
    imgLeft.addEventListener('touchend', (e) =>{
        e.preventDefault();
        keyboard.LEFT = false;
    });
});
document.addEventListener('DOMContentLoaded', (event)=>{
    let imgLeft = document.getElementById('right');
    imgLeft.addEventListener('touchstart', (e) =>{
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    imgLeft.addEventListener('touchend', (e) =>{
        e.preventDefault();
        keyboard.RIGHT = false;
    });
});
document.addEventListener('DOMContentLoaded', (event)=>{
    let imgLeft = document.getElementById('jump');
    imgLeft.addEventListener('touchstart', (e) =>{
        e.preventDefault();
        keyboard.SPACE = true;
    });
    imgLeft.addEventListener('touchend', (e) =>{
        e.preventDefault();
        keyboard.SPACE = false;
    });
});
document.addEventListener('DOMContentLoaded', (event)=>{
    let imgLeft = document.getElementById('bottle');
    imgLeft.addEventListener('touchstart', (e) =>{
        e.preventDefault();
        keyboard.D = true;
    });
    imgLeft.addEventListener('touchend', (e) =>{
        e.preventDefault();
        keyboard.D = false;
    });
});



function stopGame() {
   // clearAllIntervals();
    showEndSequen();
}

function showEndSequen(){
    world.level.bottles = [];
    world.level.enemies = [];
    world.level.coins = [];
}


function clearAllIntervals() {
    for (let i = 0; i < 9999; i++) {
        window.clearInterval(i);

    }
}
//OPen Fullscreen
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}