function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 0, 0, 700, 500);
    fill(165, 133, 212);
    rect(260, 300, 80, 80, 20);
    fill(255, 176, 210);
    rect(180, 300, 80, 80, 20);
    fill(255, 138, 138);
    rect(20, 300, 80, 80, 20);
    fill(237, 178, 234);
    rect(100, 300, 80, 80, 20);
    fill(178, 186, 237);
    rect(340, 300, 80, 80, 20);
    fill(158, 213, 247);
    rect(420, 300, 80, 80, 20);
    fill(121, 133, 224);
    rect(500, 300, 80, 80, 20);
}