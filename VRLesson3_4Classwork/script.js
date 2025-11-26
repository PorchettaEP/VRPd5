let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let time_text, ball,  t = 60;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  time_text = document.getElementById("time");

  ball = new Ball(0,2,-10);

  countdown();
  loop();
 
})

function countdown(){
  time_text.setAttribute("value",`Count Down: ${t}`);
  t--;
  setTimeout(countdown,1000)
}

function loop(){
  
  ball.move();

  window.requestAnimationFrame(loop);
}

