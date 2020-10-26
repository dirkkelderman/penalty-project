const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ballSpeed = 650; // 650 is starting position



// const tribuneImg = document.getElementById('tribune');
// ctx.drawImage(tribuneImg, 0, 0, 500, 700);


document.addEventListener('load', event => {
  // drawBall(game.ball)
  // drawKeeper(game.goalKeeper)
  drawGoal();
  
});

function clearCanvas() {
  ctx.clearRect(0, 0, 1000, 700);
}

let ballImg = new Image(); // Create new <img> element
ballImg.src = './img/football.png'; // Set source path

function drawBall(ball) {
 
  ctx.fillStyle = 'black';
  ctx.drawImage(ballImg, ball.x, ball.y, ball.width, ball.height);
}

function drawPointerVertical(pointer) {
  ctx.fillStyle = 'red';
  ctx.fillRect(pointer.x, 450, pointer.width, pointer.height)
}

function drawMeter() {
  ctx.beginPath();
  ctx.moveTo(250, 400);
  ctx.lineTo(250, 460);

  ctx.moveTo(250, 460);
  ctx.lineTo(310, 460);
  ctx.stroke();
}

function drawPointerHorizontal(pointer) {
  ctx.fillStyle = 'red';
  ctx.fillRect(250, pointer.y, pointer.width, pointer.height)
}

function drawGoal() {
  ctx.beginPath();
  ctx.moveTo(300, 350);
  ctx.lineTo(300, 150);
  ctx.lineTo(700, 150);
  ctx.lineTo(700, 350);
  ctx.stroke();
}

let keeperImg = new Image(); // Create new <img> element
keeperImg.src = './img/keeper.jpg'; // Set source path

function drawKeeper(goalKeeper) {
  ctx.fillStyle = 'blue'
  ctx.drawImage(keeperImg, goalKeeper.x, goalKeeper.y, goalKeeper.width, goalKeeper.height)
}

function writeScore(score) {
  ctx.font = '40px Georgia'
  ctx.fillText('Score', 100, 50)
  ctx.fillText(score = game.score, 140, 100)
}

function writeAttempts(attempts) {
  ctx.font = '40px Georgia'
  ctx.fillText('Attempts', 100, 150)
  ctx.fillText(attempts = game.attempts, 150, 200)
}



function updateCanvas(game) {
  clearCanvas();
  drawGoal();
  
  if (game.goalKeeper) {
    drawKeeper(game.goalKeeper);
  }

  if (game.ball) {
     drawBall(game.ball)
  }
  
  writeScore(game.score)
  writeAttempts(game.attempts)
  
  drawPointerVertical(game.pointer);
  drawMeter()
  drawPointerHorizontal(game.pointer);

  requestAnimationFrame(() => {
    updateCanvas(game)
  });

}


