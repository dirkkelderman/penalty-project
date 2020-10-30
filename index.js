const game = new PenaltyShootOut();


// Click events to trigger the game, step by step.
document.addEventListener('load', () => {
  // game.whereToShoot()
} )

document.getElementById('start-game').onclick = function () {
  myGameArea.start();
};



document.addEventListener('click', () => {
    // game.clickCount++;
    console.log(`clickcount is ${game.clickCount}`);
    console.log(`score is: ${game.score}`);

    // if (game.verticalAxes) {
    //   game.horizontalAxes=false;
    // }
    
    game.whereToShoot()

    console.log(game.goalKeeper)
    console.log(game.ball);
    
    
});




document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 38: // up arrow
      game.pointer.speedY -= 2;
      break;
    case 40: // down arrow
      game.pointer.speedY += 2;
      break;
    case 37: // left arrow
      game.pointer.speedX -= 2;
      break;
    case 39: // right arrow
      game.pointer.speedX += 2;
      break;
    case 32: // spacebar
      game.shootBall();
      game.moveGoalKeeper();
      game.checkIfScored();
      game.gameOver();
      break;  
  }
});

document.addEventListener('keyup', (e) => {
    game.pointer.speedX = 0;
    game.pointer.speedY = 0;
});
