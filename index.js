const game = new PenaltyShootOut();


// Load intro song
window.addEventListener('load', () => {
  // let introAudio = new Audio('./sound/penaltyintro.wav');
  // introAudio.play();
})

// Click events to load the game and change layout HTML.

document.getElementById('start-game').onclick = function () {
  myGameArea.start();
  startGame()

  let introAudio = new Audio('./sound/penaltyintro.wav');
  introAudio.play();

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
      game.updateBallPosition();
      game.moveGoalKeeper();
      game.checkIfScored();
      game.gameOver();
      break;
    case 82: // r key
      myGameArea.ballStart()
      
      break;     
  }
});

document.addEventListener('keyup', (e) => {
    game.pointer.speedX = 0;
    game.pointer.speedY = 0;
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}