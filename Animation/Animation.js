"use strict";

// images
let img = new Image();
img.src = './spritesheet_girl.png';

let dialogBoxImage = new Image();
dialogBoxImage.src = './dialogBox.png';

let weatherImage = new Image();
weatherImage.src = './spritesheet_sunToWindy.png';

img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 0.5;
const width = 565;
const height = 1024;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                217.5, 300, scaledWidth, scaledHeight);
}

const weatherImgScale = 0.3;
const weatherImgWidth = 1025;
const weatherImgHeight = 850;
const weatherScaledWidth = weatherImgScale * weatherImgWidth;
const weatherScaledHeight = weatherImgScale* weatherImgHeight;

function drawFrame_weatherImg(frameX, frameY){
  ctx.drawImage(weatherImage,
                frameX * weatherImgWidth, frameY * weatherImgHeight, weatherImgWidth, weatherImgHeight,
                650, 50, weatherScaledWidth, weatherScaledHeight);
}

function drawDialogBox() {
	 ctx.drawImage(dialogBoxImage, 500, 250, 250, 239);
  }
function drawText(){
    ctx.font = "12px Century Gothic";
      ctx.fillStyle= "black";
      ctx.textAlign = "center";
    ctx.fillText("Remenber to add clothes as the weather gets colder", 600, 400);
  }

function init() {
  drawFrame(0, 0);
  drawFrame(1, 0);
  drawFrame(2, 0);
  drawFrame(3, 0);
}

const cycleLoop = [0, 1, 2, 3];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 90) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDialogBox();
  drawText();
  drawFrame_weatherImg(cycleLoop[currentLoopIndex], 0);
  drawFrame(cycleLoop[currentLoopIndex], 0);  
  currentLoopIndex++;
  
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

function init() {
  window.requestAnimationFrame(step);
}
