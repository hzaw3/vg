let state = "title";
let bg;
let cnv;
let points = 0;
let button1;
let nekobg;
let cg;
let ng1;
let ng15;
let ng25;
let ng35;
let ng4;
let kg1;
let kg2;
let kg3;
let es = [];


function setup() {
  cnv = createCanvas(500, 500);
  bg = loadImage("bg1.png");
  nekobg = loadImage("neko1.png");
  for (let i = 0; i <= 15; i++) {
    es[i] = new E();
  }
}

function draw() {
  switch (state) {
    case "title":
      title();
      cnv.mouseClicked(nkclick);
      break;

    case "neko1":
      neko1();
      cnv.mouseClicked(neko1click);
      break;

    case "neko15":
      neko15();
      cnv.mouseClicked(neko15click);
      break;

    case "neko2":
      neko2();
      cnv.mouseClicked(neko2click);
      break;

      case "neko25":
      neko25();
      cnv.mouseClicked(neko25click);
      break;
      
    case "neko3":
      neko3();
      cnv.mouseClicked(neko3click);
      break;

       case "neko35":
      neko35();
      cnv.mouseClicked(neko35click);
      break;
      
    case "neko4":
      neko4();
      cnv.mouseClicked(neko4click);
      break;

    case "keno1":
      keno1();
      cnv.mouseClicked(keno1click);
      break;

      case "keno15":
      keno15();
      cnv.mouseClicked(keno15click);
      break;
    
      
    case "keno2":
      keno2();
      cnv.mouseClicked(keno2click);
      break;
      
      case "keno25":
      keno25();
      cnv.mouseClicked(keno25click);
      break;

    case "keno3":
      keno3();
      cnv.mouseClicked(keno3click);
      break;
      
      case "keno35":
      keno35();
      cnv.mouseClicked(keno35click);
      break;

    case "keno4":
      keno4();
      cnv.mouseClicked(keno4click);
      break;
    
  }
 
  for (i = 0; i < es.length; i++) {
    es[i].move();
    es[i].display();
}
}

function title() {
  background(bg);
  textSize(50);
  stroke(238, 130, 238);
  strokeWeight(2);
  fill(255, 255, 255, 200);
  text("Neko & Keno", width * 0.2, height * 0.2);
  fill(0, 0, 0, 0);

  textSize(35);
  stroke(255, 255, 255);
  strokeWeight(1);
  text("Choose one to start", width * 0.2, height * 0.8);

  noStroke();
  fill(238, 130, 238);
  textSize(20);
  text("Choose Neko", width * 0.1, height * 0.65);
  fill(144, 238, 144);
  text("Choose Keno", width * 0.7, height * 0.65);
  cg = createImg("aa.gif",alt="cg");
  cg.position(width*0.6, height*0.4);  
  cg.size(150,130);
}

function nkclick() {
  if (state == "title") {
    if (mouseX < width / 2) {
      state = "neko1";
    }
  }
  if (state == "title") {
    if (mouseX > width / 2) {
      state = "keno1";
    }
  }
}

function neko1click() {
  if (state == "neko1") {
    if (mouseX < width / 2) {
      state = "neko2";
    }
  }
   if (state == "neko1") {
    if (mouseX > width / 2) {
      state = "neko15";
    }
  }
}
function neko15click(){
  if (state == "neko15") {
    if (mouseX = width ) {
      state = "neko1";
    }
  }
}
function neko2click() {
  if (state == "neko2") {
    if (mouseX > width / 2) {
      state = "neko3";
    }
  }
  if (state == "neko2") {
    if (mouseX < width / 2) {
      state = "neko25";
    }
  }
}
function neko25click(){
  if (state == "neko25") {
    if (mouseX = width ) {
      state = "neko2";
    }
  }
}
function neko3click() {
  if (state == "neko3") {
    if (mouseX > width / 2) {
      state = "neko4";
    }
  }
  if (state == "neko3") {
    if (mouseX < width / 2) {
      state = "neko35";
    }
  }
}
function neko35click(){
  if (state == "neko35") {
    if (mouseX = width ) {
      state = "neko3";
    }
  }
}
function neko4click(){
  if (state == "neko4") {
    if (mouseX =width ) {
      state = "title";
    }
  }
}

function keno1click() {
  if (state == "keno1") {
    if (mouseX < width / 2) {
      state = "keno2";
    }
  }
  if (state == "keno1") {
    if (mouseX > width / 2) {
      state = "keno15";
    }
  }
}
function keno15click(){
  if (state == "keno15") {
    if (mouseX = width ) {
      state = "keno1";
    }
  }
}
function keno2click() {
  if (state == "keno2") {
    if (mouseX < width / 2) {
      state = "keno3";
    }
  }
  if (state == "keno2") {
    if (mouseX > width / 2) {
      state = "keno25";
    }
  }
}
function keno25click(){
  if (state == "keno25") {
    if (mouseX = width ) {
      state = "keno2";
    }
  }
}
function keno3click() {
  if (state == "keno3") {
    if (mouseX < width / 2) {
      state = "keno4";
    }
  }
    if (state == "keno3") {
    if (mouseX > width / 2) {
      state = "keno35";
    }
  }
}
function keno35click(){
  if (state == "keno35") {
    if (mouseX = width ) {
      state = "keno3";
    }
  }
}
function keno4click(){
  if (state == "keno4") {
    if (mouseX =width ) {
      state = "title";
    }
  }
}


function neko1() {
  background(nekobg);
  fill(255, 255, 255);
  textSize(40);
  text("Neko", width * 0.4, height * 0.2);
  textSize(20);
  text("Do you want Neko as your pet?", width * 0.2, height * 0.3);
  textSize(30);
  fill(238, 130, 238);
  text("Yes", width * 0.15, height * 0.65);
  fill(152,251,152);
  text("No", width * 0.75, height * 0.65);

  ng1 = createImg("neko.gif",alt="1");
  ng1.position(width*0.6, height*0.4);  
  ng1.size(150,130);
}
function neko15(){
 background(nekobg);
  fill(255,160,122);
  textSize(40);
  text("Huh!!!!", width * 0.25, height * 0.2);
  textSize(30);
  text("I DON'T WANT YOU TOO!!", width * 0.1, height * 0.3);  
  ng15 = createImg("nekoangry.gif",alt="2");
  ng15.position(width*0.6, height*0.4);  
  ng15.size(150,130);
}
function neko2() {
  background(nekobg);
  fill(255, 255, 255);
  textSize(40);
  text("Neko", width * 0.4, height * 0.2);
  textSize(20);
  text("Neko want to say hi to you.", width * 0.2, height * 0.3);
  fill(152,251,152);
  text("You reply ", width * 0.15, height * 0.65);
  text("back", width * 0.15, height * 0.75);
  fill(238, 130, 238);
  text("Ignore it", width * 0.75, height * 0.65);
  ng1 = createImg("neko.gif",alt="1");
  ng1.position(width*0.6, height*0.4);  
  ng1.size(150,130);
}
function neko25(){
 background(nekobg);
  fill(255,160,122);
  textSize(40);
  text("Aa!!!!", width * 0.25, height * 0.2);
  textSize(30);
  text("Neko think you are some weirdo", width * 0.1, height * 0.3); 
  text("and left", width * 0.1, height * 0.4);  
  ng25 = createImg("neko2-1.gif",alt="neko2");
  ng25.position(width*0.6, height*0.4);  
  ng25.size(150,130);
}
function neko3() {
  background(nekobg);
  fill(255, 255, 255);
  textSize(40);
  text("Neko", width * 0.4, height * 0.2);
  textSize(20);
  text("Neko want to eat some food. ", width * 0.2, height * 0.3);
  fill(152,251,152);
  text("You feed her.", width * 0.15, height * 0.75);
  fill(238, 130, 238);
  text("You don’t feed.", width * 0.65, height * 0.75);
  ng1 = createImg("neko.gif",alt="1");
  ng1.position(width*0.6, height*0.4);  
  ng1.size(150,130);
}
function neko35(){
 background(nekobg);
  fill(255,160,122);
  textSize(40);
  text("Aa!!!!", width * 0.25, height * 0.2);
  textSize(30);
  text("She eat and left.", width * 0.1, height * 0.3); 
  ng35 = createImg("neko1.gif",alt="neko3");
  ng35.position(width*0.6, height*0.4);  
  ng35.size(150,130);
}
function neko4() {
  background(nekobg);
  fill(238, 130, 238);
  textSize(40);
  text("Neko", width * 0.4, height * 0.2);
  textSize(20);
  text(
    "You successfully got the attention of Neko.",
    width * 0.2,
    height * 0.3
  );
  textSize(40);
  text("Congratulation!!!!!!!!!!", width * 0.1, height * 0.8);
  ng45 = createImg("neko4.gif",alt="neko3");
  ng45.position(width*0.6, height*0.4);  
  ng45.size(150,130);
}

function keno1() {
  background(nekobg);
  fill(255, 255, 255);
  textSize(40);
  text("Keno", width * 0.4, height * 0.2);
  textSize(20);
  text("Do you want Keno as your pet?", width * 0.2, height * 0.3);
  fill(152,251,152);
  text("Yes", width * 0.15, height * 0.65);
  fill(238, 130, 238);
  text("No", width * 0.75, height * 0.65);
  kg1 = createImg("keno1.gif",alt="neko");
  kg1.position(width*0.6, height*0.4);  
  kg1.size(150,130);
}
function keno15(){
 background(nekobg);
  fill(255,160,122);
  textSize(40);
  text("Huh!!!!", width * 0.25, height * 0.2);
  textSize(30);
  text("Everyone like that Neko huh. ", width * 0.1, height * 0.3);  
  text("And Keno left", width * 0.2, height * 0.8); 
  kg2 = createImg("keno3.gif",alt="keno3");
  kg2.position(width*0.6, height*0.4);  
  kg2.size(150,130);
}
function keno2() {
  background(nekobg);
  fill(255, 255, 255);
  textSize(40);
  text("Keno", width * 0.4, height * 0.2);
  textSize(20);
  text("Keno want to say HI to you", width * 0.2, height * 0.3);
  fill(152,251,152);
  text("You reply", width * 0.15, height * 0.65);
  text("back", width * 0.15, height * 0.75);
  fill(238, 130, 238);
  text("Ignore",width * 0.75, height * 0.65);
  kg1 = createImg("keno1.gif",alt="neko");
  kg1.position(width*0.6, height*0.4);  
  kg1.size(150,130);
}
function keno25(){
 background(nekobg);
  fill(255,160,122);
  textSize(40);
  text(" Keno", width * 0.25, height * 0.2);
  textSize(30);
  text(" As expected you like neko", width * 0.1, height * 0.3);  
  text("more huh and keno left", width * 0.2, height * 0.8); 
  kg2 = createImg("keno6.gif",alt="keno25");
  kg2.position(width*0.6, height*0.4);  
  kg2.size(150,130);
}
function keno3() {
  background(nekobg);
  fill(255, 255, 255);
  textSize(40);
  text("Keno", width * 0.4, height * 0.2);
  textSize(20);
  text("Keno is hungry. Do you want to feed him?", width * 0.2, height * 0.3);
  fill(152,251,152);
  text("You feed ", width * 0.15, height * 0.65);
  text("him", width * 0.15, height * 0.75);
  fill(238, 130, 238);
  text("You ignore",width * 0.75, height * 0.65);
  kg1 = createImg("keno1.gif",alt="neko");
  kg1.position(width*0.6, height*0.4);  
  kg1.size(150,130);
}
function keno35(){
 background(nekobg);
  fill(255,160,122);
  textSize(40);
  text(" Keno", width * 0.25, height * 0.2);
  textSize(30);
  text("I knew it, you like the neko more ", width * 0.1, height * 0.3);  
  text("and pretending that you like me", width * 0.1, height * 0.8); 
  kg3 = createImg("keno.gif",alt="keno35");
  kg3.position(width*0.6, height*0.4);  
  kg3.size(150,130);
}
function keno4() {
  background(nekobg);
  fill(152,251,152);
  textSize(40);
  text("Keno", width * 0.4, height * 0.2);
  textSize(20);
  text(
    "Keno swallow  you and write down  ",
    width * 0.2,
    height * 0.3
  );
  text(
    "the taste on the book and go to sleep",
    width * 0.2,
    height * 0.4
  );
  textSize(40);
  text("Congratulation???????", width * 0.1, height * 0.8);
  kg4 = createImg("keno2.gif",alt="neko");
  kg4.position(width*0.6, height*0.4);  
  kg4.size(150,130);
}


function move1() {

  let ap = 0;
  ap = frameCount * 2;
  if (ap > 600) {
    ap = 0;
    frameCount = 0;

  }
  fill(' #ffe8bf');

  ellipse(ap, height * 0.3, 25);

  ellipse(ap, height * 0.75, 45);
}
