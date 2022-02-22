rightWrist_x = '';
leftWrist_x = '';
difference = '';

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    canvas = createCanvas(500, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw() {
    background("lightpink");
    textSize(difference);
    fill("white");
    text("BARBIE", 170, 200);
    document.getElementById("font").innerHTML = "The current font size is - " + difference;

    
}

function modelLoaded() {
    console.log("Model is loaded!!");

}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        rightWrist_x = results[0].pose.rightWrist.x;
        leftWrist_x = results[0].pose.leftWrist.x;
        difference = floor(leftWrist_x - rightWrist_x);
        console.log(difference);
        console.log("right wrist x - " + rightWrist_x + " left wrist x - " + leftWrist_x);
    }
}