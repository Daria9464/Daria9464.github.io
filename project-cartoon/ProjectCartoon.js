window.onload= function(){
    var canvas = document.getElementById("canvas");
    canvas.width=800;
    canvas.height=800;
    var context = canvas.getContext("2d");

    //stars
    for(var i=0 ;i<200;i++){
        var R = Math.random()*10+10;
        var x = Math.random()*canvas.width;
        var y = Math.random()*canvas.height;
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

    
    cxt.fillStyle="#fd5";
    cxt.strokeStyle="#fd5";
    cxt.lineWidth=3;
    cxt.lineJoin="round";
    cxt.fill();
    cxt.stroke();
}