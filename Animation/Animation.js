"use strict";

// images
let img = new Image();
img.src = './spritesheet_girl.png';

let dialogBoxImage = new Image();
dialogBoxImage.src = './dialogBox.png';
let weatherImage = new Image();
weatherImage.src = './spritesheet_sunToWindy.png';

let cvs = document.getElementById('canvas');
let cxt = cvs.getContext('2d');

img.onload = function () {
	init();
};
const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);
}

function init() {
  drawFrame(0, 0, 0, 0);
  drawFrame(1, 0, scaledWidth, 0);
  drawFrame(0, 0, scaledWidth * 2, 0);
  drawFrame(2, 0, scaledWidth * 3, 0);
}

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 15) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

function init() {
  window.requestAnimationFrame(step);
}

