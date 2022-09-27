window.onload= function(){
    var canvas = document.getElementById("canvas");
    canvas.width=800;
    canvas.height=600;
    var context = canvas.getContext("2d");

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
     cxt.save();
     cxt.translate(x,y);
     cxt.scale(r,r);
     cxt.rotate(rot*Math.PI/180);
     moonPath(cxt,d);
     cxt.fillStyle ="yellow";
     cxt.fill();
     cxt.restore();
 }
function moonPath(cxt,d){
     cxt.beginPath();
     cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
     cxt.moveTo(0,-1);
     cxt.arcTo(d,0,0,1,Math.sqrt(1+d*d)/d);
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

//draw a house
ctx.fillStyle = "Grey";
ctx.strokeStyle ="black";
ctx.fillRect(665, 330,10, 45);
ctx.strokeRect(665, 330,10, 45);

//draw a chimney of the house
ctx.fillStyle = "CornflowerBlue";
ctx.strokeStyle ="black";
ctx.fillRect(600, 400,100, 100);
ctx.strokeRect(600, 400,100, 100);
ctx.beginPath();
ctx.fillStyle="Crimson"
ctx.moveTo(600, 400);
ctx.lineTo(650, 350);
ctx.lineTo(700, 400);
ctx.fill();
ctx.stroke();
cxt.closePath();
}
