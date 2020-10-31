const game = new PenaltyShootOut();


// Load intro song
window.addEventListener('load', () => {
  let introAudio = new Audio('./sound/penaltyintro.wav');
  introAudio.play();
})

// Click events to load the game and change layout HTML.

document.getElementById('start-game').onclick = function () {
  myGameArea.start();
  startGame()

  let video = document.getElementById('video')
  video.remove();
  
  let background = document.getElementById('body')
  background.classList.remove('background-load')

  let startbutton = document.getElementById('start-game')
  startbutton.remove();

  let gamecontrol = document.getElementById("gamecontrol");
  if (gamecontrol.style.display === "none") {
    gamecontrol.style.display = "block";
  } else {
    gamecontrol.style.display = "none";
  }

};

// Keyboard movements to aim the ball. 

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


