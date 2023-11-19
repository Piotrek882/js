const speed = 5;
const canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 600;
canvas.primeWidth = window.innerWidth - 50;
canvas.primeHeight = window.innerHeight - 50;

let rightCanvaswidth;
let rightCanvasheight;

function appendCanvas(){
    rightCanvaswidth = window.innerWidth - 50;
    rightCanvasheight = window.innerHeight - 50;
    canvas.width = rightCanvaswidth;
    canvas.height = rightCanvasheight;
    document.body.appendChild(canvas);
}

const ctx = canvas.getContext('2d');

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

let square = {
    x: 600,
    y: 300,
    size: 50,
};

const playerTank = new Image();
playerTank.src = 'images/tank.png';

let enemyTank = new Image();
enemyTank.src = 'images/enemyTank.png';

let pointsEarn = true;
let end = false;
let mouseX = 0;
let mouseY = 0;
let points = 0;
let enemyIsAlive = true;
let enemyHit = false;
function enemyDamageEffect(){
    if(enemyHit == true){
        enemyTank.src = 'images/enemyTankRed.png';
        setTimeout(function(){
            enemyTank.src = 'images/enemyTank.png';
            enemyHit = false;
        },250);
    }
}

function drawSquare() {
    ctx.drawImage(playerTank, square.x, square.y, square.size, square.size);
}

let bullet = {
    x: square.x + 25,
    y: square.y + 25,
    speed: 10,
    isFlying: false,
    xfactor: null,
    yfactor: null
};

let squareCenterShotPosition = {
    x: 0,
    y: 0
};

canvas.addEventListener('mousedown', function(event){
    if (event.button === 0 && bullet.isFlying == false){
        squareCenterShotPosition.x = square.x + 25;
        squareCenterShotPosition.y = square.y + 25;
        bullet.x = square.x + 25;
        bullet.y = square.y + 25;
        bullet.isFlying = true;
        let dx = mouseX - (square.x + 25);
        let dy = mouseY - (square.y + 25);
        let distance = Math.sqrt(dx**2 + dy**2);
        let unitX = dx / distance;
        let unitY = dy / distance;
        bullet.xfactor = unitX * bullet.speed;
        bullet.yfactor = unitY * bullet.speed;
    }
});

let dx;
let dy;
let distance;

function distanceCheck (){
    dx = bullet.x - squareCenterShotPosition.x;
    dy = bullet.y - squareCenterShotPosition.y;
    distance = Math.sqrt(dx * dx + dy * dy);
}
setInterval(distanceCheck, 1);

function drawBullet() {
    if (bullet.isFlying == true) {

      if(distance > 72.5){
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      bullet.x += bullet.xfactor;
      bullet.y += bullet.yfactor;

      if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
        bullet.isFlying = false;
      }
    }
}

function drawAim() {
    let aimLength = 70;
  
    let dx = mouseX - (square.x + 25);
    let dy = mouseY - (square.y + 25);
    let distance = Math.sqrt(dx * dx + dy * dy);
  
    let normalizedDx = dx / distance;
    let normalizedDy = dy / distance;
  
    let aimX = (square.x + 25) + normalizedDx * aimLength;
    let aimY = (square.y + 25) + normalizedDy * aimLength;

    ctx.beginPath();
    ctx.moveTo(square.x + 25, square.y + 25);
    ctx.lineTo(aimX, aimY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 14;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(square.x + 25, square.y + 25);
    ctx.lineTo(aimX, aimY);
    ctx.strokeStyle = '#008c1c';
    ctx.lineWidth = 10;
    ctx.stroke();
 
}   

let fullscreenNow = false;
let animationId;
let canvasExist = false;

function fullscreenCheck(){
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        fullscreenNow = true;
    } else {
        fullscreenNow = false;
    }

    if(!fullscreenNow){
        cancelAnimationFrame(animationId);
    }else{
        animationId = requestAnimationFrame(update);
    }
    if(!canvasExist && fullscreenNow){
        appendCanvas();
        canvasExist = true;
    }
} setInterval(fullscreenCheck, 20);

function update() {
    if(!end /* && fullscreenNow */){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    if (keys['a'] && square.x >= 0) {
        square.x -= speed;
    } else if (keys['d'] && square.x + 50 <= canvas.width) {
        square.x += speed;
    }
    
    if (keys['w'] && square.y >= 0) {
        square.y -= speed;
    } else if (keys['s'] && square.y + 50 <= canvas.height) {
        square.y += speed;
    }
    enemyMovement()
    limitEnemyMovement()
    enemyHitCheck()
    enemyMissCheck()
    enemyDamageEffect()
    drawSquare();
    drawEnemy();
    drawAim();
    drawBullet();
    hitCheck();
    ctx.fillStyle = '#f00';
    ctx.font = 'bold 20px Calibri';
    ctx.fillText(`POINTS: ${points}`, 5, 20);
}
}

function onMouseMove(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
}

function onKeyDown(e) {
    keys[e.key] = true;
}

function onKeyUp(e) {
    keys[e.key] = false;
}

const keys = {};

let step = 0;

const enemy = {
    x: getRandomInt(50),
    y: getRandomInt(50),
    xSize: 50,
    ySize: 50,
    color: 'red'
};

function enemyMovement() {
    if (step < 100) {
        enemy.x += 2;
        enemy.y++;
        step++
    } else if (step < 200) {
        enemy.y += 2;
        step++;
    } else if (step < 300) {
        enemy.x += getRandomInt(4);
        step++;
    } else if (step < 400) {
        enemy.y -= getRandomInt(2);
        enemy.x += getRandomInt(2);
        step++;
    } else if (step < 500) {
        enemy.x -= getRandomInt(2);
        step++;
    } else if (step < 600) {
        enemy.x += getRandomInt(3);
        enemy.y += getRandomInt(2);
        step++;
    } else if (step < 700) {
        enemy.x += getRandomInt(4);
        step++;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function drawEnemy() {
    if(enemyIsAlive == true){
        ctx.drawImage(enemyTank, enemy.x, enemy.y, enemy.xSize, enemy.ySize);
    }
}

canvas.addEventListener('mousemove', onMouseMove);
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function limitEnemyMovement() {
    if (enemy.x <= 0) {
        enemy.x = 0;
    }
    if (enemy.x + enemy.size >= canvas.width) {
        enemy.x = canvas.width - enemy.size;
    }
    if (enemy.y <= 0) {
        enemy.y = 0;
    }
    if (enemy.y + enemy.size >= canvas.height) {
        enemy.y = canvas.height - enemy.size;
    }
}

function hitCheck() {
    if (enemy.x + enemy.xSize >= square.x && enemy.x <= square.x + square.size && enemy.y + enemy.ySize >= square.y && enemy.y <= square.y + square.size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f00';
        ctx.font = '50px Calibri';
        ctx.fillText('GAME OVER', canvas.width/2 - canvas.width/12, canvas.height/2);
        end = true;
        canvas.style.cursor = 'default';
    }
}

const popup = document.getElementById("section");

function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
  popup.style.display = 'none';
  canvas.setAttribute('height', rightCanvasheight);
  canvas.setAttribute('width', rightCanvaswidth);
}

let section = document.getElementById('section');

function fullscreenByButton(){
    enterFullscreen();
    section.style.display = 'none';
    canvas.setAttribute('width', window.innerWidth - 10);
    canvas.setAttribute('height', window.innerHeight + 130);
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
function handleFullscreenChange() {
  if (document.fullscreenElement === null) {
    section.style.display = 'flex';
    canvas.setAttribute('width', canvas.primeWidth);
    canvas.setAttribute('height', canvas.primeHeight);
  }
}

function enemyHitCheck(){
    if (bullet.x + 5 >= enemy.x && bullet.x <= enemy.x + enemy.xSize && bullet.y + 5 >= enemy.y && bullet.y <= enemy.y + enemy.ySize &&  pointsEarn == true) {
        //alert('point');
        points++;
        pointsEarn = false;
        bullet.isFlying = false;
        enemyHit = true;
    }
}

function enemyMissCheck(){
    if (
      bullet.x + 5 < enemy.x ||
      bullet.x > enemy.x + 50 ||
      bullet.y + 5 < enemy.y ||
      bullet.y > enemy.y + 50
    ) {
      pointsEarn = true;
    }
}

update();