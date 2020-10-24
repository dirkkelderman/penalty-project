class PenaltyShootOut {
  constructor() {
    this.verticalAxes = true;
    this.horizontalAxes = true;
    // this.powerShot = false;
    this.clickCount = 0;
    this.score = 0;
    this.goalKeeper = new Component(50, 150, 'blue', 475, 200);
    this.ball = new Component(25, 25, 'black', 487.5, 550);
    this.attempts = 0;
    this.pointer = new Component(10, 10, 'red', 487.5, 550);
  }
  whereToShoot() {
    switch (this.clickCount) {
      case 0:
        console.log(`Click once for horizontal loop`)
        break;

      case 1:
        verticalLoop()
        break;

      case 2:
        stopVerticalLoop()
        // horizontalLoop()
        break;

      case 3:
        // stopHorizontalLoop()

        this.shootBall();
        this.checkIfScored();
        this.moveGoalKeeper();
        this.checkIfScored();
        this.clickCount = 0;
        break;
    }
  }

  shootBall() {
    let x = this.ball.x; // this should be player input (vert/horiz/power)
    let y = this.ball.y; // this should be player input (vert/horiz/power)
    let height = 25; // this should be a ball
    let width = 25; // this should be a ball
    console.log('shootBall')

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
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}


let vertical = setInterval(verticalLoop, 5);

let vertCounter = 100;
let vertCountup = true;

function verticalLoop() {
      if (vertCountup) {
      ++vertCounter;
      if (vertCounter >= 350)
      vertCountup = false;
    } else {
      --vertCounter;
      if (vertCounter <= 100)
      vertCountup = true;
    }
    game.ball.y = vertCounter;
}

function stopVerticalLoop() {
  clearInterval(vertical);
}

let horizontal = setInterval(horizontalLoop, 5);

let horizCounter = 250;
let horizCountup = true;

function horizontalLoop() {
      if (horizCountup) {
      ++horizCounter;
      if (horizCounter >= 750)
      horizCountup = false;
    } else {
      --horizCounter;
      if (horizCounter <= 250)
      horizCountup = true;
    }
    game.ball.x = horizCounter;
}

function stopHorizontalLoop() {
  clearInterval(horizontal);
}


