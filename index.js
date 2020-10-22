const game = new PenaltyShootOut();


// Click events to trigger the game, step by step.

document.addEventListener('click', () => {
    game.clickCount++;
    console.log(game.clickCount);
    console.log(`score is: ${game.score}`);

    if (game.clickCount) {
      game.whereToShoot();
      game.shootBall();
      game.moveGoalKeeper()
      game.checkIfScored()
    }
    console.log(game.goalKeeper)
    console.log(game.ball);
    
    
});


updateCanvas(game) 