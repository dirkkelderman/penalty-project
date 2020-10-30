class PenaltyShootOut {
  constructor() {
    this.verticalAxes = true;
    this.horizontalAxes = true;
    // this.powerShot = false;
    this.clickCount = 0;
    this.score = 0;
    this.goalKeeper = new Component(125, 175, 'blue', 437.5, 200);
    this.ball = new Component(25, 25, 'black', 487.5, 490);
    this.attempts = 0;
    this.pointer = new Component(10, 10, 'red', 487.5, 450);
  }
  whereToShoot() {
    switch (this.clickCount) {
      case 0:
        verticalLoop()
        break;

      case 1:
        stopVerticalLoop()
        horizontalLoop()
        break;

      case 2:
        stopHorizontalLoop()
        break;

      case 3:
        this.shootBall();
        this.moveGoalKeeper();
        this.checkIfScored();
        break;

      case 4:
        verticalLoop()
        horizontalLoop()
        this.clickCount = 0;
        myGameArea.ball()
    }
  }
  shootBall() {
    let x = game.pointer.x
    let y = game.pointer.y

    // console.log('shootBall')
    this.ball.x = x;
    this.ball.y = y;
  }
  moveGoalKeeper() {
    let x = Math.floor((Math.random() * 400) + 300);
    let y = Math.floor((Math.random() * 100) + 150);

    this.goalKeeper.x = x
    this.goalKeeper.y = y
  }
  gameOver() {
    if (this.attempts > 5) {
      alert("YOU LOST, CLICK REFRESH TO TRY AGAIN!")
    } else if (this.score > 5) {
      alert("YOU WIN, CONGRATULATIONS!")
    }
  }
  checkIfScored() {
    if (this.pointer.x < this.goalKeeper.x + this.ball.width &&
    this.pointer.x + this.ball.width > this.goalKeeper.x &&
    this.pointer.y < this.goalKeeper.y + this.ball.height &&
    this.pointer.y + this.ball.height > this.goalKeeper.y) {
      console.log('collision detected!');
      this.attempts++;
      let missedAudio = new Audio('./sound/football-crowd-near-miss-from-freekick.wav');
      missedAudio.play();
    } else if (this.ball.x < 300 || this.ball.x > 675) {
      console.log('outside goal, missed!');
      this.attempts++;
      let missedAudio = new Audio('./sound/football-crowd-near-miss-from-freekick.wav');
      missedAudio.play();
    } else {
      console.log('no collision, so GOALLL!!!')
      this.attempts++;
      this.score++;
      let scoredAudio = new Audio('./sound/196461__paulw2k__football-crowd-goal.wav');
      scoredAudio.play();
    }
  }

}


class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    // this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }
  update() {

      // const ctx = myGameArea.context;
      // // myGameArea.ctx.fillStyle = this.color;
      // myGameArea.ctx.fillRect(this.x, this.y, this.width, this.height);
    // }
    // let ballImg = new Image();
    // ballImg.src = './img/football.png';
    // const ctx = myGameArea.context;
    // this.ctx.fillStyle = this.color;
    // this.ctx.drawImage(ballImg, this.x, this.y, this.width, this.height);
  }
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}


let vertical = setInterval(verticalLoop, 20);

let vertCounter = 400;
let vertCountup = true;

function verticalLoop() {
      if (vertCountup) {
      ++vertCounter;
      if (vertCounter >= 450)
      vertCountup = false;
    } else {
      --vertCounter;
      if (vertCounter <= 400)
      vertCountup = true;
    }
    // game.ball.y = (vertCounter - 350) ** 1.25;
    // game.pointer.y = vertCounter;
    
    
    // game.ball.y = vertCounter;
}

function stopVerticalLoop() {
  clearInterval(vertical);
}

let horizontal = setInterval(horizontalLoop, 20);

let horizCounter = 250;
let horizCountup = true;

function horizontalLoop() {
      if (horizCountup) {
      ++horizCounter;
      if (horizCounter >= 300)
      horizCountup = false;
    } else {
      --horizCounter;
      if (horizCounter <= 250)
      horizCountup = true;
    }

    // game.ball.x = (horizCounter - 210) ** 1.47;
    
    // game.pointer.x = horizCounter;
    // game.ball.x = horizCounter;
}

function stopHorizontalLoop() {
  clearInterval(horizontal);
}


