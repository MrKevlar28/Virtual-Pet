//Create variables here
var dog;
var dogImg1, dogImg2;
function preload()
{
	//load images here
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg1);

  // foodStock = database.ref("Food");
  // foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87);

  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(dogImg2);

  }
  function readStock(database){
    foodStock = data.val();
  
  }
  function writeStock(x){
  
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
    database.ref("/").update({
      Food:x
    })
  }
  
}



