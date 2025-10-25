let ballSize = 50;
function setup(){
    createCanvas(600, 400);
    fill('limegreen');
    posX = width/ 2;
    xSpeed = 5;
}
function draw(){
    background("lightblue")
    // posX = constrain(posX, 25, width - 25)
    circle(posX, 200, ballSize)
    posX = posX - xSpeed
    if (posX - ballSize/2 <= 0 || posX + ballSize/2 >= width) {
        xSpeed = xSpeed * -1
    }
}