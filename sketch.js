var dog, happyDog;
var foodS, foodStock;
var database;

function preload()
{
  dog = loadImage("images/doglmg1.png");
  happyDog = loadImage("images/doglmg.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  
  foodStock = database.ref('Food');
   foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDog);
  }

  drawSprites();

  fill(10);
  stroke(black);
  textSize(20);
  text("",235,100,readStock);

  textSize(20);
  textSize(30);
  text("Note: Press UP_ARROW Key to feed the dog milk");

}

//reading values from the database
function readStock(data){
  foo = data.val();
}

//writing values in database(to display the usage of food)
function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



