function setup() {
    canvas = createCanvas(1280, 960);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 555, 130, 200, 170);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(260, 50, 50);
    circle(1060, 50, 50);
    rect(250, 40, 20, 340);
    rect(1050, 40, 20, 340);
    rect(260, 40, 800, 20);
    rect(260, 360, 800, 20);
    circle(260, 370, 50);
    circle(1060, 370, 50);
}

function take_snapshot() {
    save('Project113.png');
}