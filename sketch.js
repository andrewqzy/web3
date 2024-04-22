let img1;
let img2;
let s; 

function setup(){
  createCanvas(1000,1000); //Canvas
  colorMode(RGB);
  img1 = loadImage("resources/media/imag1.jpg");
  img2= loadImage("resources/media/imag2.jpg");
  s = "Five hexing wizard bots jump quickly.";
}

function draw(){
  
background(255);  
strokeWeight(1);
image(img1,width/10,height/10);
image(img2,mouseX,mouseY,200,200);

textSize(40);
fill(#D82AA7);
text(s, 300,300);
noCursor();

 
stroke(5);
fill(251,255,31);
rect(200,200,100,100);

strokeWeight(5);
stroke(31,36,255,100);

rectMode(CORNER);
rect(150,150,100,100);
fill(255,125,18);

stroke(5);
stroke(71,31,255,100);
ellipse(200,200,100,100);
ellipseMode(CORNER);

//noFill();
fill(83,245,15);
ellipse(200,200,100,100);

fill(255,125,18);
ellipseMode(CORNER);
ellipse(150,150,100,100);


}