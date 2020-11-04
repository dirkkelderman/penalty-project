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
    this.ctx.font = '40px Punkboy';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Score: ${game.score}`, 140, 100);
  },
  attempts: function () {
    this.ctx.font = '40px Punkboy';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Attempts: ${game.attempts}`, 700, 100);
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
  drawBall: function () {
    let ballImg = new Image();
    ballImg.src = './img/football.png';
    this.ctx.drawImage(ballImg, game.ball.x, game.ball.y, game.ball.width, game.ball.height)
  },
  ballStart: function () {
    let ballImg = new Image();
    ballImg.src = './img/football.png';
    let ballX = (this.canvas.width - game.ball.width)/2; 
    let ballY = 450
    this.ctx.drawImage(ballImg, ballX, ballY, game.ball.width, game.ball.height);
  },
  // ballShoot: function () {
  //   let ballImg = new Image();
  //   ballImg.src = './img/football.png';
  //   this.ctx.drawImage(ballImg, game.ball.x, game.ball.y, game.ball.width, game.ball.height)
  
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
  myGameArea.drawBall();
  myGameArea.drawPointer();
  game.pointer.newPos();
  game.pointer.update();
}

 

function startGame() {
  setInterval(updateGameArea, 20);
  
}


// let startX = (myGameArea.canvas.width - game.ball.width)/2; 
// let startY = 450;

// let newX = game.pointer.x;
// let newY = game.pointer.y;
