var bullet,wall;
var thickness, speed, weight;
var damage;
var state="pre";
var rating;
function setup() {
 createCanvas(1600,400);
  
  bullet=createSprite(50,200,60,20);
  wall=createSprite(1200,200,60,100);
  wall.shapeColor=color(80,80,80);
  
  bullet.shapeColor="white";

  speed=Math.round(random(223,321));
 weight=Math.round(random(25,30));
 thickness=Math.round(random(22,83));
  
 }

function draw() {
  background("black"); 
  wall.width=thickness;
  if(state==="pre") {
    textSize(20);
    fill("white");
    text("Press Space Bar",600,50);
    if(keyDown("space")){
      bullet.velocityX=5;
      state="running";
    }
  }    
if(state==="running"){
 
  damage=(0.5*weight*speed*speed/(thickness*thickness*thickness));
/*if(bullet.collide(wall)){
bullet.velocityX=0;

/*if(damage>10){
wall.shapeColor="red"
rating="Bad"
}
if(damage<10){
wall.shapeColor="green"
rating="Good"
}*/
}

if(bullet.collide(wall)){
  bullet.velocityX=0;
  state="end";
}
if(state==="end"){
  if(damage>10){
  wall.shapeColor="red"
    rating="Bad"
  }
  if(damage<10){
    wall.shapeColor="green"
    rating="Good"
  }
  textSize(20);
  text("speed:"+speed+"km/h",200,50);
  text(" weight:"+ weight+"kg",400,50);
  text("thickness:"+thickness,700,50);

  textSize(25);
  text("Rating:"+rating,1000,50);
  text("Damage:"+Math.round(damage),800,80);

  text("Press 'R' to reset",1200,50);
  if(keyDown("r")){
    reset();
  }
}
drawSprites();
}
function reset(){
  state="pre";
  bullet.x=50;
  wall.shapeColor=color(127,127,127);
  speed=Math.round(random(223,321));
 weight=Math.round(random(25,30));
 thickness=Math.round(random(22,83));

}
