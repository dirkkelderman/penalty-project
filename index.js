const game = new PenaltyShootOut();


// Click events to trigger the game, step by step.
document.addEventListener('load', () => {
  // game.whereToShoot()
} )

document.addEventListener('click', () => {
    game.clickCount++;
    console.log(`clickcount is ${game.clickCount}`);
    console.log(`score is: ${game.score}`);

    // if (game.verticalAxes) {
    //   game.horizontalAxes=false;
    // }
    
    game.whereToShoot()

    console.log(game.goalKeeper)
    console.log(game.ball);
    
    
});


updateCanvas(game) 