class PenaltyShootOut {
  constructor() {
    this.verticalAxes = true;
    this.horizontalAxes = true;
    // this.powerShot = false;
    this.clickCount = 0;
    this.score = 0;
    this.goalKeeper = new Component(125, 175, 'blue', 437.5, 200);
    this.ball = new Component(25, 25, 'black', 487.5, 550);
    this.attempts = 0;
    this.pointer = new Component(10, 10, 'red', 487.5, 550);
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
    let x = cx.value
    let y = cy.value

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
    if (this.attempts === 5) {
      console.log('the game is over.')
    }
  }
  checkIfScored() {
    if (this.ball.x < this.goalKeeper.x + this.ball.width &&
      this.ball.x + this.ball.width > this.goalKeeper.x &&
      this.ball.y < this.goalKeeper.y + this.ball.height &&
      this.ball.y + this.ball.height > this.goalKeeper.y) {
      console.log('collision detected!');
      this.attempts++;
    } else if (this.ball.x < 300 || this.ball.x > 675) {
      console.log('outside goal, missed!');
      this.attempts++;
    } else {
      console.log('no collision, so GOALLL!!!')
      this.attempts++;
      this.score++;
    }
  }

}


class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  update() {
    let ballImg = new Image();
    ballImg.src = './img/football.png';
    const ctx = myGameArea.context;
    this.ctx.fillStyle = this.color;
    this.ctx.drawImage(ballImg, this.x, this.y, this.width, this.height);
  }
  newPos() {
    this.x += 150;
    this.y += 150;
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
    game.pointer.y = vertCounter;
    
    
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
    
    game.pointer.x = horizCounter;
    // game.ball.x = horizCounter;
}

function stopHorizontalLoop() {
  clearInterval(horizontal);
}


