class PenaltyShootOut {
  constructor() {
    this.verticalAxes = true;
    this.horizontalAxes = true;
    this.clickCount = 0;
    this.score = 0;
    this.goalKeeper = new Component(125, 175, 'blue', 437.5, 200);
    this.ballStartX = 480;
    this.ballStartY = 490;
    this.ball = new Component(25, 25, 'black', this.ballStartX, this.ballStartY);
    this.attempts = 0;
    this.pointer = new Component(10, 10, 'red',this.ballStartX, this.ballStartY - 40);
  }
  // Shoot the ball 
  updateBallPosition() {
    let incrementX = Math.round((game.pointer.x - this.ballStartX) / 10);
    let incrementY = Math.round((game.pointer.y - this.ballStartY) / 10);

    this.ball.x += incrementX;
    this.ball.y += incrementY;

    let endPositionX = game.pointer.x;
    let endPositionY = game.pointer.y;

    var myVar;

    if ( this.ball.x !== game.pointer.x || this.ball.y !== game.pointer.y ) {
      myVar = setTimeout( () => {
        this.updateBallPosition();
      },50);
    
    if (this.ball.x < 300 || this.ball.x > 675 || this.ball.y < 180) {
      clearTimeout(myVar);
      setTimeout( () => {
        this.ball.x = this.ballStartX;
        this.ball.y = this.ballStartY;
      }, 1000);
      
    }
   }
  }
   // Move the keeper to a random position somewhere in the goal area.
  moveGoalKeeper() {
    let x = Math.floor((Math.random() * 400) + 300);
    let y = Math.floor((Math.random() * 100) + 150);

    this.goalKeeper.x = x
    this.goalKeeper.y = y
  }
  // Alert message in case of goal, or miss. 
  gameOver() {
    if (this.attempts > 5) {
      alert("YOU LOST, CLICK REFRESH TO TRY AGAIN!")
    } else if (this.score > 5) {
      alert("YOU WIN, CONGRATULATIONS!")
    }
  }
  // After every shot, check if in goal or collision with keeper.
  checkIfScored() {
    if (this.pointer.x < this.goalKeeper.x + this.ball.width &&
    this.pointer.x + this.ball.width > this.goalKeeper.x &&
    this.pointer.y < this.goalKeeper.y + this.ball.height &&
    this.pointer.y + this.ball.height > this.goalKeeper.y) {
      this.attempts++;
      let missedAudio = new Audio('./sound/football-crowd-near-miss-from-freekick.wav');
      missedAudio.play();
    } else if (this.ball.x < 300 || this.ball.x > 675 || this.ball.y < 150) {
      this.attempts++;
      let missedAudio = new Audio('./sound/football-crowd-near-miss-from-freekick.wav');
      missedAudio.play();
      
      // setTimeout(() => {
      //   modal.style.display = "block";
      // }, 2000)
      
      // span.onclick = function() {
      //   modal.style.display = "none";
      // }
      
      // window.onclick = function(event) {
      //   if (event.target == modal) {
      //     modal.style.display = "none";
      //   }
      // }

    } else {
      this.attempts++;
      this.score++;
      let scoredAudio = new Audio('./sound/196461__paulw2k__football-crowd-goal.wav');
      scoredAudio.play();
      setTimeout(() => {
        modal.style.display = "block";
        this.goalKeeper.x = 437.5;
        this.goalKeeper.y = 200;
      }, 2000)

      span.onclick = function() {
        modal.style.display = "none";
      }
      
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    }
  }

}

// Component for ball, keeper and pointer.
class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }
  update() {

  }
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}


