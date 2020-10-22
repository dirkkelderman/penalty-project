
const goalKeeper = [];
const ball = []; 

class PenaltyShootOut {
    constructor(){
        this.verticalAxes = false;
        this.horizontalAxes = false;
        this.powerShot = false;
        this.clickCount = 0;
        this.score = 0;        
    }
    whereToShoot() {
        if (this.clickCount === 1){
            this.verticalAxes = true;
            console.log('vert is now true')
         } else if (this.clickCount === 2) {
            this.horizontalAxes = true;
            console.log('horiz is now true')
         } else if (this.clickCount === 3) {
            this.powerShot = true;
            console.log('power is now true')
         } else if (this.clickCount > 3) {
            this.clickCount = 0;
            this.verticalAxes = false;
            this.horizontalAxes = false;
            this.powerShot = false;
         }
    }
    shootBall() {
        if (this.clickCount === 3) {
            let x = 500; // this should be player input (vert/horiz/power)
            let y = 250; // this should be player input (vert/horiz/power)
            let height = 25; // this should be a ball
            let width = 25; // this should be a ball
            console.log('shootBall')
            ball.push(new Component(width, height, 'black', x, y))    
        }
    }
    createGoalKeeper() {
        if (this.clickCount === 3) {
            let x = Math.floor((Math.random() * 1000) + 1);
            let y = Math.floor((Math.random() * 750) + 1);
            let height = 150;
            let width = 50;
            console.log('createdGoalKeeper')
            goalKeeper.push(new Component(width, height, 'blue', x, y));
          
        }
    }
    updateScore() {
        // if no collision, update score++
    }
    gameOver() {
        if (this.score === 5) {
          console.log('the game is over.')
        }
    }
    checkIfScored(r1, r2) {

      if (r1.x>r2.x+r2.w || r1.x+r1.w<r2.x || r1.y>r2.y+r2.h || r1.y+r1.h<r2.y) {
        console.log('collision detected!')
      } else {
        console.log('no collision')
      }

      // if (ball.x < goalKeeper.x + ball.width &&
      //   ball.x + ball.width > goalKeeper.x &&
      //   ball.y < goalKeeper.y + ball.height &&
      //   ball.y + ball.height > goalKeeper.y) {
      //    // collision detected!
      //    console.log('collision detected!');
    //   else if (this.clickCount === 3) {
    //    this.score++
    //   console.log('no collision');
    //  }
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


  const game = new PenaltyShootOut();


// Click events to trigger the game, step by step.

document.addEventListener('click', () => {
    game.clickCount++;
    console.log(game.clickCount);
    console.log(`score is: ${game.score}`);

    if (game.clickCount) {
      game.whereToShoot();
      game.shootBall();
      game.createGoalKeeper()
      game.checkIfScored(goalKeeper, ball)
    }
    console.log(goalKeeper)
    console.log(ball);
});


