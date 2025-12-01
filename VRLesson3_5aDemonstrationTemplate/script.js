let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, target, ball;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  target = document.querySelector("#target");
  ball = document.querySelector("#ball");
  ball.x = -1;
  ball.dx = -0.002;
  
  setTimeout(loop,100);
})

function loop(){
  
  ball.x += ball.dx;
  ball.setAttribute("position",{x:ball.x, y:1, z: 0 })


  window.requestAnimationFrame(loop);
}

