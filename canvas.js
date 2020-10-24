const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ballSpeed = 650; // 650 is starting position



// const tribuneImg = document.getElementById('tribune');
// ctx.drawImage(tribuneImg, 0, 0, 500, 700);


window.addEventListener('load', event => {
  drawBall(game.ball)
  drawKeeper(game.goalKeeper)
  drawGoal();
  
});

function clearCanvas() {
  ctx.clearRect(0, 0, 1000, 700);
}

function drawBall(ball) {
  ctx.fillStyle = 'black';
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
}

function drawPointer(ball) {
  ctx.fillStyle = 'red';
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height)
}

function drawGoal() {
  ctx.beginPath();
  ctx.moveTo(300, 350);
  ctx.lineTo(300, 150);
  ctx.lineTo(700, 150);
  ctx.lineTo(700, 350);
  ctx.stroke();
}

function drawKeeper(goalKeeper) {
  ctx.fillStyle = 'blue'
  ctx.fillRect(goalKeeper.x, goalKeeper.y, goalKeeper.width, goalKeeper.height)
}



function updateCanvas(game) {
  clearCanvas();

  drawGoal();
  if (game.goalKeeper) {
    drawKeeper(game.goalKeeper);
  }
  // if (game.clickCount === 3) {
  //   drawBall(game.ball)
  // }
  drawBall(game.ball)
  drawPointer(game.pointer);
  // if (game.ball) {
  //   drawBall(game.ball);
  // }

  requestAnimationFrame(() => {
    updateCanvas(game)
  });

}


