nose_y=0;
nose_x=0;
lef_wrist=0;
right_wrist=0;
difference=0;


function setup() {
    canvas = createCanvas(700, 700)
    canvas.position(750, 125)
    video = createCapture(VIDEO)
    video.size(550, 500)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)

}

function draw() {
    background("blue")
    circle(nose_x, nose_y, difference)



}

function modelLoaded() {

    console.log("This model has been loaded")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
         nose_x=results[0].pose.nose.x;
         nose_y=results[0].pose.nose.y;

         left_wrist=results[0].pose.leftWrist.x;
         right_wrist=results[0].pose.rightWrist.x;
         difference=left_wrist-right_wrist;
         



    }

    
    

}