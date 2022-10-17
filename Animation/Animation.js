"use strict";

// images
var girlImage = new Image();
girlImage.src = './spritesheet_girl.png';

var dialogBoxImage = new Image();
dialogBoxImage.src = './dialogBox.png';

var weatherImage = new Image();
weatherImage.src = './spritesheet_sunToWindy.png';

var cvs = document.getElementById('canvas');
var cxt = cvs.getContext('2d');

img.onload = function () {
	init();
};
const cycleLoop = [0, 1, 2, 3];
var row = 0; 
let currentLoopIndex = 0;
let frameCount = 0;

const scale = 0.7;
const width = 498;
const height = 334;
const scaledWidth = scale * width;
const scaledHeight = scale * height;
var timer = -2;

function drawFrame(frameX, frameY) {
	ctx.drawImage(img,
		frameX * width, frameY * height, width, height,
		canvas.width * 1.2, canvas.height * 0.3, scaledWidth, scaledHeight);
}
function step() {
	frameCount++;
	if (frameCount < 4) {
		window.requestAnimationFrame(step);
		return;
	}
    reportWeathing_girl();
    window.requestAnimationFrame(step);
    callDialogBox();
}

function callDialogBox() {
	ctx.font = "22px Arial";
    if (timer < 15) {
        ctx.drawImage(dialogBoxImage, dialogBoxImage.width * 0.13, dialogBoxImage.height * 0.1);
		ctx.fillText("Keep warm as the weather gets colder ");
    }
    timer++;
}

function reportWeathing_girl() {
	frameCount = 0;
	drawFrame(cycleLoop[currentLoopIndex], row);
	currentLoopIndex++;
	if (currentLoopIndex >= cycleLoop.length) {
		currentLoopIndex = 0;
		if (row == 1) {
			row = 0;
		}
		else {
			row = 1;
		}
	}

}

function init() {
	window.requestAnimationFrame(step);
}
