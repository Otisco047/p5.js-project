function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("red");
    stroke("red");
    rect(10, 10, 610, 30);
    rect(10, 10, 30, 610);
    rect(600, 10, 30, 610);
    rect(10, 450, 610, 30);
    fill("blue");
    stroke("white");
    circle(30, 30, 60)
    circle(610, 30, 60)
    circle(610, 450, 60)
    circle(30, 450, 60)
}

function take_pic() {
    save("student_name.png");
}