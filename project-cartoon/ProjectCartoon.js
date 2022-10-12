window.onload = function(){
     var cvs = document.getElementById('canvas');
     var cxt = cvs.getContext('2d');
     var R;
 
     //draw stars
     //invoke drawStar function
     for(var i=0;i<150;i++){
         R = 10*Math.random();
         drawStar(cxt,cvs.width*Math.random(),cvs.height*0.8*Math.random(),R,"yellow");
     }
 
     //draw moon
     //invoke drawMoon function
     drawMoon(cxt,600,100,40,3,30,"yellow")
 
     //draw grassGround
     cxt.save();
     cxt.beginPath();
     cxt.moveTo(0,400);
     cxt.bezierCurveTo(200,300,500,500,800,450);
     cxt.lineTo(800,600);
     cxt.lineTo(0,800);
     cxt.closePath();
     cxt.fillStyle = "DarkGreen";
     cxt.fill();
     cxt.restore(); 
     

<<<<<<< HEAD
    //draw stars 
    for(var i=0 ;i<200;i++){
        var R = Math.random()*10;
        var x = Math.random()*canvas.width;
        var y = Math.random()*400;
        var r = Math.random()*360;
        drawStar(context,R/2,R,x,y,r);
    }
}
function drawStar(cxt, r,R ,x,y,rota){
    cxt.beginPath();
    for(var i =0 ;i<5 ;i++){
        cxt.lineTo(Math.cos((18+i*72-rota)/180*Math.PI)*R+x
        ,-Math.sin((18+i*72-rota)/180*Math.PI)*R+y);
        
        cxt.lineTo(Math.cos((54+i*72-rota)/180*Math.PI)*r+x
        ,-Math.sin((54+i*72-rota)/180*Math.PI)*r+y);
    }
    cxt.closePath(); 
    
    cxt.fillStyle="yellow";
    cxt.strokeStyle="yellow";
    cxt.lineWidth=3;
    cxt.lineJoin="round";
    cxt.fill();
    cxt.stroke(); 
    cxt.restore();
//draw moon
drawMoon(cxt,600,100,40,3,30,'#FFF68F');
    
function drawMoon(cxt,x,y,r,d,rot,fillColor){
=======
     //draw a house
     cxt.save();
     cxt.beginPath();
     cxt.fillStyle="Grey";
     cxt.strokeStyle="Black";
     cxt.fillRect(100,400,100,100);
     cxt.strokeRect(100,400,100,100);
     //the chimney
     cxt.fillStyle="LightBlue";
     cxt.strokeStyle="Black";
     cxt.fillRect(165,330,10,45);
     cxt.strokeRect(165,330,10,45);
     //the roof     
     cxt.moveTo(100,400);
     cxt.lineTo(150,350);
     cxt.lineTo(200,400);
     cxt.closePath();
     cxt.fillStyle = "Brown";
     cxt.fill();
     cxt.stroke();
     cxt.restore();
     //the window     
     cxt.save();
     cxt.beginPath();
     cxt.fillStyle="LightYellow";
     cxt.strokeStyle="Black";
     cxt.fillRect(165,420,20,15);
     cxt.strokeRect(165,420,20,15);
 }

//some functions use in window.onload
 function drawMoon(cxt,x,y,r,d,rot,fillColor){
>>>>>>> ba06541f4972304caa058c359f2c4dede01d8e26
     cxt.save();
     cxt.translate(x,y);
     cxt.scale(r,r);
     cxt.rotate(rot*Math.PI/180);
     moonPath(cxt,d);
     cxt.fillStyle = "Yellow";
     cxt.fill();
     cxt.restore();
 }
 function moonPath(cxt,d){
     cxt.beginPath();
     cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
     cxt.moveTo(0,-1);
     cxt.arcTo(d,0,0,1,Math.sqrt(1+d*d)/d);
<<<<<<< HEAD
 }    
//draw ground
cxt.save();
cxt.beginPath();
cxt.moveTo(0,400);
cxt.bezierCurveTo(200,300,500,500,800,450);
cxt.lineTo(800,600);
cxt.lineTo(0,800);
cxt.closePath();
cxt.fillStyle ="green";
cxt.fill(); 
}
=======
 }
 
 function drawStar(cxt,x,y,R,fillColor){
     cxt.save();
     cxt.translate(x,y);
     cxt.rotate(360*Math.random()*Math.PI/180);
     cxt.scale(R,R);
     starPath(cxt);
     cxt.fillStyle = fillColor;
     cxt.fill();
     cxt.restore();
 }
 function starPath(cxt){
     cxt.beginPath();
     for(var i=0;i<5;i++){
         cxt.lineTo(Math.cos((18+72*i)*Math.PI/180),-Math.sin((18+72*i)*Math.PI/180));
         cxt.lineTo(Math.cos((54+72*i)*Math.PI/180)*0.5,-Math.sin((54+72*i)*Math.PI/180)*0.5);
     }
     cxt.closePath();
 }
>>>>>>> ba06541f4972304caa058c359f2c4dede01d8e26
