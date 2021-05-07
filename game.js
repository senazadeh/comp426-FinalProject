
var correctPattern = [];
var playerPattern = [];
var score = 0;
var loss = false;
var flashing = false;

function newGame() {
  correctPattern = [];
  playerPattern = [];
  score = 0;
  loss = false;
  flashing = false;
  document.getElementById("counter").innerHTML = "Score: " + score;
  newColor();
  flash();
}
 
function flash() {
  flashing = true;
  var time = 500;
  for (var i=0; i<correctPattern.length; i++) {
    if (correctPattern[i] == "g") {
      setTimeout(() => { green.style.backgroundColor = "lightgreen" }, time);
      setTimeout(() => { green.style.backgroundColor = "darkgreen" }, time+250);
    }
    if (correctPattern[i] == "r") {
      setTimeout(() => { red.style.backgroundColor = "tomato" }, time);
      setTimeout(() => { red.style.backgroundColor = "darkred" }, time+250);
    }
    if (correctPattern[i] == "y") {
      setTimeout(() => { yellow.style.backgroundColor = "yellow" }, time);
      setTimeout(() => { yellow.style.backgroundColor = "darkgoldenrod" }, time+250);
    }
    if (correctPattern[i] == "b") {
      setTimeout(() => { blue.style.backgroundColor = "lightblue" }, time);
      setTimeout(() => { blue.style.backgroundColor = "darkblue" }, time+250);
    }
    time+=500;
    console.log(time)
  }
  setTimeout(() => { flashing = false }, time+250);
}

function newColor() {
  var color = Math.floor(Math.random()*4);
  if (color == 0) this.correctPattern.push("g");
  if (color == 1) this.correctPattern.push("r");
  if (color == 2) this.correctPattern.push("y");
  if (color == 3) this.correctPattern.push("b");
}

green.addEventListener('click', (event) => { 
  if (flashing == false) {
    playerPattern.push("g"); 
    setTimeout(() => { green.style.backgroundColor = "white" }, 5);
    setTimeout(() => { green.style.backgroundColor = "darkgreen" }, 150);
    check();
  }
})
red.addEventListener('click', (event) => { 
  if (flashing == false) {
    playerPattern.push("r"); 
    setTimeout(() => { red.style.backgroundColor = "white" }, 5);
    setTimeout(() => { red.style.backgroundColor = "darkred" }, 150);
    check();
  }
})
yellow.addEventListener('click', (event) => { 
  if (flashing == false) {
    playerPattern.push("y"); 
    setTimeout(() => { yellow.style.backgroundColor = "white" }, 5);
    setTimeout(() => { yellow.style.backgroundColor = "darkgoldenrod" }, 150);
    check();
  }
})
blue.addEventListener('click', (event) => { 
  if (flashing == false) {
    playerPattern.push("b"); 
    setTimeout(() => { blue.style.backgroundColor = "white" }, 5);
    setTimeout(() => { blue.style.backgroundColor = "darkblue" }, 100);
    check();
  }
})


function check() {
  if (correctPattern.length == playerPattern.length) {
    if (JSON.stringify(correctPattern) == JSON.stringify(playerPattern)) {
      score++;
      document.getElementById("counter").innerHTML = "Score: " + score;
      playerPattern = [];
      newColor();
      flash();
    } else {
      loss = true;
      alert("Game Over!");
    }
  }
}
