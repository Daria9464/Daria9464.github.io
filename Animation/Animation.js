"use strict";

// images
let girlImage = new Image();
girlImage.src = './spritesheet_girl.png';

let dialogBoxImage = new Image();
dialogBoxImage.src = './dialogBox.png';
let weatherImage = new Image();
weatherImage.src = './spritesheet_sunToWindy.png';

let cvs = document.getElementById('canvas');
let cxt = cvs.getContext('2d');

girlImage.onload = function () {
	init();
};
const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function init() {
  ctx.drawImage(girlImage, 0, 0, width, height, 0, 0, scaledWidth, scaledHeight);
  ctx.drawImage(girlImage, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
  ctx.drawImage(girlImage, width * 2, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
}

