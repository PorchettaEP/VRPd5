let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");



});

window.addEventListener("click",function(){
 let x = camera.object3D.position.x;
 let z = camera.object3D.position.z;
 //new Box(x,1,z-2);
  
});

window.addEventListener("keydown",function(e){
  //console.log(e.key);

 let x = camera.object3D.position.x;
 let z = camera.object3D.position.z;
 if(e.key == 's'){
  new Sphere(x,1, z-2);
 }
 else if (e.key=='b'){
   new Box(x,1,z-2);

 }
 else if(e.key=='c'){
  new Cone(x,1,z-2);
 }
  
});
