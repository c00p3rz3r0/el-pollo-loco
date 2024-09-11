let canvas;
let world;
let keyboard = new Keyboard();
/**
 * load the game and print the canvas
 */
function startgame() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = [];
    world = new World(canvas, keyboard);
    canvas.classList.remove('display-none');
    document.getElementById('startGame').classList.add('display-none');
    document.getElementById('bgImg').classList.add('display-none');
}
/**
 * restert the game
 */
function restartGame(){
    canvas = document.getElementById('canvas');
    level1 = [];
    level = [];
    world = [];
    character = [];
    initLevel();
    world = new World(canvas, keyboard);
    debugger;
    canvas.classList.remove('display-none');
}

/**
 * eventlistener for key down
 */
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
/**
 * eventlistener for key up
 */
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
/**
 * eventlistener for key by touch
 */
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
/**
 * eventlistener for key by touch
 */
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
/**
 * eventlistener for key by touch
 */
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
/**
 * eventlistener for key by touch
 */
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
    showEndSequen();
}

function showEndSequen(){
    world.level.bottles = [];
    world.level.enemies = [];
    world.level.coins = [];
}
/**
 * stop all intervalls of the game
 */
function clearAllIntervals() {
    for (let i = 0; i < 9999; i++) {
        window.clearInterval(i);
    }
}
/**
 * open fullscreen
 */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}
/**
 * end fullscreen
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}