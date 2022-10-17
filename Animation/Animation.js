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
const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function init() {
  ctx.drawImage(img, 0, 0, width, height, 0, 0, scaledWidth, scaledHeight);
  ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
  ctx.drawImage(img, width * 2, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
}

