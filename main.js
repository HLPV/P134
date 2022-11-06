img="";
status="";
objects=[]

function preload(){
    img=loadImage("IMG.jpg")
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380)
    video.center();
    //video.hide();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status:detectando objetos"
}

function modelLoaded(){
    console.log("Modelo cargado");
    status=true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error,results){
    if(error){
     console.log(error)
}
console.log(results);
objects=results;
}
function draw(){
    image(img,0,0,640,420);
    if(status !=""){
        for (let index = 0; index < objects.length; index++)
     
    document.getElementById("estatus").innerHTML="objetos detectados";

    
    fill("red")
    text("object",object[0].x,object[0].y)
    noFill();
    stroke("red");
    rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height);
    }
}

