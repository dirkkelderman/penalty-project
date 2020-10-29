const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 1000;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[3]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  score: function () {
    this.ctx.font = '40px arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Score: ${game.score}`, 140, 100);
  },
  attempts: function () {
    this.ctx.font = '40px arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Attempts: ${game.attempts}`, 350, 100);
  },
  stadium: function () {
    let stadiumImg = new Image();
    stadiumImg.src = './img/arenabackground.jpg'; 
    this.ctx.drawImage(stadiumImg, 0, 0, 1000, 700)
  },
  keeper: function () {
    let keeperImg = new Image(); 
    keeperImg.src = './img/ajaxkeeper2.png';
    // (125, 175, 'blue', 437.5, 200)
    this.ctx.drawImage(keeperImg, game.goalKeeper.x, game.goalKeeper.y, game.goalKeeper.width, game.goalKeeper.height)
  },
  goal: function () {
    let goalImg = new Image();
    goalImg.src = './img/football_goal_PNG24.png'
    this.ctx.drawImage(goalImg, 300, 115, 400, 280)
  },
  ballStart: function () {
    let ballImg = new Image();
    ballImg.src = './img/football.png';
    let ballX = (this.canvas.width - game.ball.width)/2; 
    let ballY = 500
    this.ctx.drawImage(ballImg, ballX, ballY, game.ball.width, game.ball.height);
  },
  ballShoot: function () {
    let ballImg = new Image();
    ballImg.src = './img/football.png';
    // let ballX = (this.canvas.width - game.ball.width)/2; 
    // let ballY = 500
    this.ctx.drawImage(ballImg, game.ball.x, game.ball.y, game.ball.width, game.ball.height)
  },
  // meters: function () {
  //   let powerMeterVertImg = new Image() ;
  //   powerMeterVertImg.src = './img/powermetervert.png';
  //   let powerMeterHorizImg = new Image() ;
  //   powerMeterHorizImg.src = './img/powermeterhoriz.png';
  //   this.ctx.drawImage(powerMeterVertImg, 100, 400, 25, 150);
  //   this.ctx.drawImage(powerMeterHorizImg, 125, 550, 150, 25);

  // },
  // pointer: function () {
  //   this.ctx.fillStyle = 'red';
  //   this.ctx.fillRect(game.pointer.x, 450, game.pointer.width, game.pointer.height)
  //   this.ctx.fillStyle = 'red';
  //   this.ctx.fillRect(250, game.pointer.y, game.pointer.width, game.pointer.height)
  // }


};

function updateGameArea() {
  myGameArea.clear();
  myGameArea.stadium();
  myGameArea.goal();
  myGameArea.keeper();
  myGameArea.ballStart();
  // myGameArea.meters();
  myGameArea.score();
  myGameArea.attempts();
  // myGameArea.pointer()
  myGameArea.ballShoot();
  drawPointer();
}

// function drawGameArea() {
//   // drawRangeControl(range)
//   myGameArea.stadium();
// }

myGameArea.start();


// myGameArea.ctx.lineWidth=6;
// myGameArea.ctx.strokeStyle='green';

// let PI2=Math.PI*2; //place the circle on canvas
let cx = document.getElementById('xpos');
let cy = document.getElementById('ypos');

// drawBall();

function drawPointer(){
  let PointerImg = new Image();
  PointerImg.src = './img/crosshairgreen.png';
  myGameArea.ctx.drawImage(PointerImg, cx.value, cy.value, 50, 50);
};


let speed1 = 0;


// function clearCanvas() {
//   myGameArea.ctx.clearRect(0, 0, 700, 450); // 700 and 450 are canvas width and height
// }

function drawCanvas(x, y, w, h, color) {
  myGameArea.ctx.fillStyle = color;
  myGameArea.ctx.fillRect(x, y, w, h);
}

function shootBall() {
  // in order to see animation, let's change speed1,2 and 3 on every call
  speed1 += 1;

  clearCanvas();

  // redraw the canvas
  drawCanvas(50, speed1, 50, 50, 'red');

}


// var canvas=document.getElementById("canvas");
// var ctx=canvas.getContext("2d");

// let value = minValue+(maxValue-minValue)*range.pct;

// console.log(value)

// var cw=myGameArea.canvas.width;
// var ch=myGameArea.canvas.height;
// function reOffset(){
//     var BB=myGameArea.canvas.getBoundingClientRect();
//     offsetX=BB.left;
//     offsetY=BB.top;        
// }
// var offsetX,offsetY;
// reOffset();
// window.onscroll=function(e){ reOffset(); }
// window.onresize=function(e){ reOffset(); }

// var isDown=false;

// var range=makeRangeControl(50,40,200,25);
// drawRangeControl(range);

// myGameArea.canvas.onmousedown=(function(e){handleMouseDown(e);});
// myGameArea.canvas.onmousemove=(function(e){handleMouseMove(e);});
// myGameArea.canvas.onmouseup=(function(e){handleMouseUpOut(e);});
// myGameArea.canvas.onmouseout=(function(e){handleMouseUpOut(e);});



// function makeRangeControl(x,y,width,height){
//     var range={x:x,y:y,width:width,height:height};
//     range.x1=range.x+range.width;
//     range.y1=range.y;
//     //
//     range.pct=0.50;
//     return(range);
// }

// function drawRangeControl(range){
//     // clear the range control area
    
//     // bar
//     myGameArea.ctx.lineWidth=6;
//     myGameArea.ctx.lineCap='round';
//     myGameArea.ctx.beginPath();
//     myGameArea.ctx.moveTo(range.x,range.y);
//     myGameArea.ctx.lineTo(range.x1,range.y);
//     myGameArea.ctx.strokeStyle='white';
//     myGameArea.ctx.stroke();
//     // thumb
//     myGameArea.ctx.beginPath();
//     var thumbX=range.x+range.width*range.pct;
//     myGameArea.ctx.moveTo(thumbX,range.y-range.height/2);
//     myGameArea.ctx.lineTo(thumbX,range.y+range.height/2);
//     myGameArea.ctx.strokeStyle='rgba(255,0,0,0.25)';
//     myGameArea.ctx.stroke();
//     // legend
//     myGameArea.ctx.fillStyle='white';
//     myGameArea.ctx.textAlign='center';
//     myGameArea.ctx.textBaseline='top';
//     myGameArea.ctx.font='20px arial';
//     myGameArea.ctx.fillText(parseInt(range.pct*100)+'%',range.x+range.width/2,range.y-range.height/2-2);
// }

// function handleMouseDown(e){
//   // tell the browser we're handling this event
//   e.preventDefault();
//   e.stopPropagation();
//   // get mouse position
//   var mx=parseInt(e.clientX-offsetX);
//   var my=parseInt(e.clientY-offsetY);
//   // test for possible start of dragging
//   isDown=(mx>range.x && mx<range.x+range.width && my>range.y-range.height/2 && my<range.y+range.height/2);
// }

// function handleMouseUpOut(e){
//   // tell the browser we're handling this event
//   e.preventDefault();
//   e.stopPropagation();
//   // stop dragging
//   isDown=false;
// }

// function handleMouseMove(e){
//   if(!isDown){return;}
//   // tell the browser we're handling this event
//   e.preventDefault();
//   e.stopPropagation();
//   // get mouse position
//   mouseX=parseInt(e.clientX-offsetX);
//   mouseY=parseInt(e.clientY-offsetY);
//   // set new thumb & redraw
//   range.pct=Math.max(0,Math.min(1,(mouseX-range.x)/range.width));
//   myGameArea.ctx.clearRect(range.x-12.5,range.y-range.height/2-15,range.width+25,range.height+20);
//   drawRangeControl(range);
//   return range.x
// }

// console.log(range.x)
// console.log((range.x*250)/100*4)