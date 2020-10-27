const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 1000;
    this.canvas.height = 700;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[3]);

    this.interval = setInterval(updateGameArea, 20);

  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  score: function () {
    this.context.font = '40px arial';
    this.context.fillStyle = 'white';
    this.context.fillText(`Score: ${game.score}`, 140, 100);
  },
  attempts: function () {
    this.context.font = '40px arial';
    this.context.fillStyle = 'white';
    this.context.fillText(`Attempts: ${game.attempts}`, 350, 100);
  },
  stadium: function () {
    let stadiumImg = new Image();
    stadiumImg.src = './img/arenabackground.jpg'; 
    this.context.drawImage(stadiumImg, 0, 0, 1000, 700)
  },
  keeper: function () {
    let keeperImg = new Image(); 
    keeperImg.src = './img/ajaxkeeper2.png';
    // (125, 175, 'blue', 437.5, 200)
    this.context.drawImage(keeperImg, game.goalKeeper.x, game.goalKeeper.y, game.goalKeeper.width, game.goalKeeper.height)
  },
  goal: function () {
    let goalImg = new Image();
    goalImg.src = './img/football_goal_PNG24.png'
    this.context.drawImage(goalImg, 300, 115, 400, 280)
  },
  ball: function () {
    let ballImg = new Image();
    ballImg.src = './img/football.png';
    let ballX = (this.canvas.width - game.ball.width)/2; 
    let ballY = 500
    this.context.drawImage(ballImg, game.ball.x, game.ball.y, game.ball.width, game.ball.height);
  },
  meters: function () {
    let powerMeterVertImg = new Image() ;
    powerMeterVertImg.src = './img/powermetervert.png';
    let powerMeterHorizImg = new Image() ;
    powerMeterHorizImg.src = './img/powermeterhoriz.png';
    this.context.drawImage(powerMeterVertImg, 100, 400, 25, 150);
    this.context.drawImage(powerMeterHorizImg, 125, 550, 150, 25);

  },
  pointer: function () {
    this.context.fillStyle = 'red';
    this.context.fillRect(game.pointer.x, 450, game.pointer.width, game.pointer.height)
    this.context.fillStyle = 'red';
    this.context.fillRect(250, game.pointer.y, game.pointer.width, game.pointer.height)
  }


};

function updateGameArea() {
  myGameArea.clear();
  
  myGameArea.stadium();
  myGameArea.goal();
  myGameArea.keeper();
  myGameArea.ball();
  myGameArea.meters();
  myGameArea.score();
  myGameArea.attempts();
  myGameArea.pointer()

  game.ball.newPos();
  game.ball.update();
   // player.update();
}

myGameArea.start();





// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let ballSpeed = 650; // 650 is starting position



// const tribuneImg = document.getElementById('tribune');
// ctx.drawImage(tribuneImg, 0, 0, 500, 700);


// document.addEventListener('load', event => {
//   // drawBall(game.ball)
//   // drawKeeper(game.goalKeeper)
//   drawGoal();
  
// });

// function clearCanvas() {
//   ctx.clearRect(0, 0, 1000, 700);
// }

// let ballImg = new Image(); // Create new <img> element
// ballImg.src = './img/football.png'; // Set source path

// function drawBall(ball) {
 
//   ctx.fillStyle = 'black';
//   ctx.drawImage(ballImg, ball.x, ball.y, ball.width, ball.height);
// }

function drawPointerVertical(pointer) {
  ctx.fillStyle = 'red';
  ctx.fillRect(pointer.x, 450, pointer.width, pointer.height)
}

// let powerMeterVertImg = new Image() 
// powerMeterVertImg.src = './img/powermetervert.png'

// let powerMeterHorizImg = new Image() 
// powerMeterHorizImg.src = './img/powermeterhoriz.png'

function drawMeter() {

  // ctx.drawImage(powerMeterVertImg, 100, 400, 25, 150);
  // ctx.drawImage(powerMeterHorizImg, 125, 550, 150, 25);

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

// function drawGoal() {
//   ctx.beginPath();
//   ctx.moveTo(300, 350);
//   ctx.lineTo(300, 150);
//   ctx.lineTo(700, 150);
//   ctx.lineTo(700, 350);
//   ctx.stroke();
// }

// let keeperImg = new Image(); // Create new <img> element
// keeperImg.src = './img/ajaxkeeper2.png'; // Set source path

// function drawKeeper(goalKeeper) {
//   ctx.fillStyle = 'blue'
//   ctx.drawImage(keeperImg, goalKeeper.x, goalKeeper.y, goalKeeper.width, goalKeeper.height)
// }

// let stadiumImg = new Image();
// stadiumImg.src = './img/arenabackground.jpg'; 

// function drawStadium() {
//   ctx.drawImage(stadiumImg, 0, 0, 1000, 700)

// }

// let goalImg = new Image();
// goalImg.src = './img/football_goal_PNG24.png'

// function drawNewGoal() {
//   ctx.drawImage(goalImg, 300, 115, 400, 280)

// }


// function writeScore(score) {
//   ctx.font = '40px Georgia'
//   ctx.fillText('Score', 100, 50)
//   ctx.fillText(score = game.score, 140, 100)
// }

// function writeAttempts(attempts) {
//   ctx.font = '40px Georgia'
//   ctx.fillText('Attempts', 100, 150)
//   ctx.fillText(attempts = game.attempts, 150, 200)
// }



// function updateCanvas(game) {
//   clearCanvas();
  
  

  


//   drawStadium()
//   drawGoal();
//   drawNewGoal() 

//     drawKeeper(game.goalKeeper);
//     writeScore(game.score)
//   writeAttempts(game.attempts)
  
//   drawPointerVertical(game.pointer);
//   drawMeter()
//   drawPointerHorizontal(game.pointer);

//   if (game.ball) {
//      drawBall(game.ball)
//   }
//   requestAnimationFrame(() => {
//     updateCanvas(game)
//   });

// }


