const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 1000;
    this.canvas.height = 550;
    this.ctx = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[3]);
    
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  score: function () {
    this.ctx.font = '40px arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Score: ${game.score}`, 140, 100);
  },
  attempts: function () {
    this.ctx.font = '40px arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Attempts: ${game.attempts}`, 350, 100);
  },
  stadium: function () {
    let stadiumImg = new Image();
    stadiumImg.src = './img/arenabackground.jpg'; 
    this.ctx.drawImage(stadiumImg, 0, 0, 1000, 700)
  },
  keeper: function () {
    let keeperImg = new Image(); 
    keeperImg.src = './img/ajaxkeeper2.png';
    // (125, 175, 'blue', 437.5, 200)
    this.ctx.drawImage(keeperImg, game.goalKeeper.x, game.goalKeeper.y, game.goalKeeper.width, game.goalKeeper.height)
  },
  goal: function () {
    let goalImg = new Image();
    goalImg.src = './img/football_goal_PNG24.png'
    this.ctx.drawImage(goalImg, 300, 115, 400, 280)
  },
  ballStart: function () {
    let ballImg = new Image();
    ballImg.src = './img/football.png';
    let ballX = (this.canvas.width - game.ball.width)/2; 
    let ballY = 450
    this.ctx.drawImage(ballImg, ballX, ballY, game.ball.width, game.ball.height);
  },
  ballShoot: function () {
    let ballImg = new Image();
    ballImg.src = './img/football.png';
    this.ctx.drawImage(ballImg, game.ball.x, game.ball.y, game.ball.width, game.ball.height)
  },
  drawPointer: function (){
    let PointerImg = new Image();
    PointerImg.src = './img/crosshairgreen.png';
    myGameArea.ctx.drawImage(PointerImg, game.pointer.x, game.pointer.y, 50, 50);
  },
};

function updateGameArea() {
  myGameArea.clear();
  myGameArea.stadium();
  myGameArea.goal();
  myGameArea.keeper();
  myGameArea.score();
  myGameArea.attempts();
  myGameArea.ballShoot();
  myGameArea.drawPointer();
  game.pointer.newPos();
  game.pointer.update();
  // requestAnimationFrame(animate);
  // drawShootButton()
}

myGameArea.start();

function startGame() {
  setInterval(updateGameArea, 20);
  
}

startGame()


// function drawPointer () {
//   let PointerImg = new Image();
//   PointerImg.src = './img/crosshairgreen.png';
//   myGameArea.ctx.drawImage(PointerImg, game.pointer.x, game.pointer.y, 50, 50);
// };
  // function ballShoot () {
  //   let ballImg = new Image();
  //   ballImg.src = './img/football.png';
  //   myGameArea.ctx.drawImage(ballImg, game.ball.x, game.ball.y, game.ball.width, game.ball.height)
  // };


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// myGameArea.ctx.fillStyle = '#FF0000';
// // ctx.fillRect(100, 0, 50, 50);
// // ctx.fillRect(300, 0, 50, 50);
// // ctx.fillRect(500, 0, 50, 50);

// let speed1 = 490;


// // function clearCanvas() {
// //   myGameArea.ctx.clearRect(0, 0, 700, 450); // 700 and 450 are canvas width and height
// // }

// function ballShoot(x, y, w, h, color) {
  
//   myGameArea.ctx.fillStyle = color;
//   myGameArea.ctx.fillRect(x, y, w, h);
// }

// function updateCanvas() {
//   // in order to see animation, let's change speed1,2 and 3 on every call
//   speed1 -= 5;

//   // clear the canvas
//   startGame()

//   // redraw the canvas
//   ballShoot(487.5, speed1, 50, 50, 'red');

//   if (speed1 === 160) {
//     myGameArea.ctx.cancelAnimationFrame;
//   } else {
//     requestAnimationFrame(updateCanvas);

//   }
//   // requestAnimationFrame(updateCanvas);
// }

// updateCanvas()

