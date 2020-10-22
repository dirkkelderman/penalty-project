const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const goalTop = 150;
const goalLeft = 300;
// const goalTopRight = 
// const goalMidLeft = 
// const goalMidRight = 
// const goalLowLeft = 300
// const goalLowRight =

let ballSpeed = 650; // 650 is starting position

window.addEventListener('load', event => {

  drawGoal();
  drawBall(500, ballSpeed, 25, 25, 'black')
  drawKeeper()
  // randomPositionKeeper();
});

function clearCanvas() {
  ctx.clearRect(0, 0, 1000, 700);
}

function drawBall(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);

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
  console.log(`is it working ${goalKeeper.x}`)
  ctx.fillStyle = 'blue'
  ctx.fillRect(goalKeeper.x, goalKeeper.y, goalKeeper.width, goalKeeper.height)
}


function updateCanvas(game) {
  ballSpeed -= 3;
  console.log(game.goalKeeper);
  clearCanvas();

  drawBall(500, ballSpeed, 25, 25, 'black');
  drawGoal();
  if (game.goalKeeper) {
    drawKeeper(game.goalKeeper);
  }
 
  requestAnimationFrame(() => {
    updateCanvas(game)
  });

}

console.log(game)



// document.addEventListener('click', () => {
//     updateCanvas()
// })

// // Goal area
// ctx.beginPath();
// ctx.moveTo(300, 350);
// ctx.lineTo(300, 150)
// ctx.lineTo(700, 150);
// ctx.lineTo(700, 350)
// ctx.stroke();


// // Ball
// ctx.beginPath();
// ctx.arc(500, 650, 25, 0, Math.PI * 2);
// ctx.fill()