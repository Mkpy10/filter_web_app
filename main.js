function preload(){

}

function setup(){
    Canvas = createCanvas(300 , 300);
    Canvas.center();
    Webcam = createCapture(VIDEO);
    Webcam.size(400,300);
    Webcam.hide()
}

function draw(){
    image(Webcam, 0, 0, 400, 300);
    PoseNet = ml5.poseNet(Webcam , modelLoaded);
    PoseNet.on('pose', Posing);

}

function SnapShot(){
    save('YouAreAClown.png')
}

function modelLoaded(){
    console.log("poseNet is initialised");
}

function Posing(results){
    if (results.length > 0) {
        console.log(results);
        console.log("Nose X =",+results[0].pose.nose.x);
        console.log("Nose Y =",+results[0].pose.nose.y);
    }
}
