var spritesheet_girl= {
	"frames": {
		"spritesheet_girl.png": {
			"frame": {
				"x": 1,
				"y": 1,
				"w": 2810,
				"h": 1024
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 2810,
				"h": 1024
			},
			"sourceSize": {
				"w": 2810,
				"h": 1024
			}
		}
	},
	"meta": {
		"app": "http://www.codeandweb.com/texturepacker",
		"version": "1.0",
		"image": "spritesheet.png",
		"format": "RGBA8888",
		"size": {
			"w": 2812,
			"h": 1026
		},
		"scale": "1"
	}
}

var girlImage = new Image();
girlImage.src = './spritesheet_girl.png';

var dialogBoxImage = new Image();
dialogBoxImage.src = './dialogBox.png';

var weatherImage = new Image();
weatherImage.src = './spritesheet_sunToWindy.png';

var canvas_count = document.getElementById('canvas');
var ctx = canvas_count.getContext('2d');

let button = document.querySelector("button");

button.onclick = function(){
     drawImg();
     button.style.visibility = "hidden";
 }

 function drawNum(i){
  ctx.drawImage(girlImage,spritesheet_girl.png.frames[i].frame.x,spritesheet_girl.png.frames[i].frame.y, spritesheet_girl.png.frames[i].frame.w, spritesheet_girl.png.frames[i].frame.h, 300, 200, spritesheet_girl.png[i].sourceSize.w, spritesheet_girl.png.frames[i].sourceSize.h);
}

function drawDialogBox(){
  ctx.drawImage(dialogBoxImage, 890, 100, 239, 239);
}

function drawText(){
  ctx.font = "20px Century Gothic";
    ctx.fillStyle= "black";
    ctx.textAlign = "center";
  ctx.fillText("Keep warm as the weather gets colder", 1010, 200);
}
var currentLoop = 0;

function drawImg(){
    drawDialogBox();
    drawText();
     ctx.clearRect(300,200, 567, 567);
     drawNum(currentLoop);
     currentLoop++;
     if (currentLoop == 2){
       currentLoop = 0;
    }
    setTimeout(drawImg, 500);

}
