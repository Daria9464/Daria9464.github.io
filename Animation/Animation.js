"use strict";

// images
//var girlImage = new Image();
//girlImage.src = './spritesheet_girl.png';
var girlImage = new Array();
for(var i=0; i<4; i++){
    girlImage[i]=new Image();
    var str="./spritesheet_girl"+(i+1)+".png";
    girlImage[i].src=str;
}

var dialogBoxImage = new Image();
dialogBoxImage.src = './dialogBox.png';

var weatherImage = new Image();
weatherImage.src = './spritesheet_sunToWindy.png';

window.onload = function(){
    var cvs = document.getElementById('canvas');
    var cxt = cvs.getContext('2d');
}
var i=0;
var timer=setInterval(function()){
    cxt.drawImage(girlImage[i],0,0);
    if(i<3)
    i++;
    else
    i=0;
},100);
