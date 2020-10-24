const game = new PenaltyShootOut();


// Click events to trigger the game, step by step.
document.addEventListener('load', () => {
  game.whereToShoot()
} )

document.addEventListener('click', () => {
    game.clickCount++;
    console.log(`clickcount is ${game.clickCount}`);
    console.log(`score is: ${game.score}`);

    // if (game.verticalAxes) {
    //   game.horizontalAxes=false;
    // }
    
    game.whereToShoot()

    // if (game.clickCount) {
    //   // game.whereToShoot();
    //   // game.shootBall();
    //   // game.moveGoalKeeper()
    //   // game.gameOver()
    //   // game.checkIfScored()
           
    // } 

    // if (game.clickCount ===3){
    //   game.checkIfScored()
    // }

    // if (game.clickCount === 0) {
    //   game.verticalLoop()
    // }

  //   if (game.clickCount === 1) {
  //      game.horizontalLoop()
  //      game.verticalAxes = true;
  //   }

  //   if (game.clickCount === 2) {
  //     // game.horizontalLoop()
  //     game.horizontalAxes = true;
  //  }
    console.log(game.goalKeeper)
    console.log(game.ball);
    
    
});


updateCanvas(game) 