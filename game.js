

class PenaltyShootOut {
    constructor(){
        this.verticalAxes = false;
        this.horizontalAxes = false;
        this.powerShot = false;
        this.clickCount = 0;
        this.score = 0;
        this.goalKeeper = new Component(50, 150, 'blue', 450, 200);
        this.ball;      
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
            this.ball = new Component(width, height, 'black', x, y)    
        }
    }

    moveGoalKeeper() {
        if (this.clickCount === 3) {
            let x = Math.floor((Math.random() * 400) + 300);
            let y = Math.floor((Math.random() * 100) + 150);
           
            this.goalKeeper.x = x
            this.goalKeeper.y = y
          
        }
    }
    updateScore() {
        // if no collision, update score++s
    }
    gameOver() {
        if (this.score === 5) {
          console.log('the game is over.')
        }
    }
    checkIfScored() {
       if ( this.ball.x <  this.goalKeeper.x +  this.ball.width &&
         this.ball.x +  this.ball.width >  this.goalKeeper.x &&
         this.ball.y <  this.goalKeeper.y +  this.ball.height &&
         this.ball.y +  this.ball.height >  this.goalKeeper.y) {         
         console.log('collision detected!');
      } else {
        console.log('no collision, so GOALLL!!!')
      }   
      

      // If ball is outside goal area, also NO GOAL.

    //   } else if (this.clickCount === 3) {
    //    this.score++
    //   console.log('no collision');
    //  }

    // let  this.goalKeeperArr = goalKeeper.map( coo => {
    //   return {
    //     x: coo.x, //+ coo.width,
    //     y: coo.y //+ coo.height
    //   }
    // })
    
    // let ballArr = ball.map( coo => {
    //   return {
    //     x: coo.x, //+ coo.width,
    //     y: coo.y  //+ coo.height
    //   }
    // })  
    // console.log(goalKeeperArr[0].x === ballArr[0].x && goalKeeperArr[0].y === ballArr[0].y) 
    // if (goalKeeperArr[0].x === ballArr[0].x && goalKeeperArr[0].y === ballArr[0].y) {
    //   console.log('collision!!');
    // } else {
    //   console.log('goal!!')
    // }
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


 