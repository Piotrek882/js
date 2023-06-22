const speed = 5;
const canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const square = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 50,
  color: '#1e88e5'
};

let mouseX = 0;
let mouseY = 0;

function drawSquare() {
  ctx.fillStyle = square.color;
  ctx.fillRect(square.x - square.size / 2, square.y - square.size / 2, square.size, square.size);
}

function drawAim() {
  ctx.beginPath();
  ctx.moveTo(square.x, square.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.moveTo(square.x, square.y);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 3;
  ctx.stroke();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
              
  if (keys['a'] && square.x >= 25) {
    square.x -= speed;
  } else if (keys['d'] && square.x + 25 <= canvas.width) {
    square.x += speed;
  }

  if (keys['w'] && square.y >= 25) {
    square.y -= speed;
  } else if (keys['s'] && square.y + 25 <= canvas.height) {
    square.y += speed;
  }

  drawSquare();
  drawAim();
  drawEnemy();

    requestAnimationFrame(update);
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

// function enemyMovement(){

// }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const enemy = {
    x: getRandomInt(50),
    y: getRandomInt(50),
    size: 30,
    color: 'red'
};

function drawEnemy(){
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
}

canvas.addEventListener('mousemove', onMouseMove);
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

update();

function limitEnemyMovement() {
    if (enemy.x <= 0) {
      enemy.x = 0;
    }
    if (enemy.x + enemy.size >= canvasCurrentWidth) {
      enemy.x = canvasCurrentWidth - enemy.size;
    }
    if (enemy.y <= 0) {
      enemy.y = 0;
    }
    if (enemy.y + enemy.size >= canvasCurrentHeight) {
      enemy.y = canvasCurrentHeight - enemy.size;
    }
}
setInterval(limitEnemyMovement, 10);