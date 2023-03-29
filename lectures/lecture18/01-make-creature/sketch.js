function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    makeCreature(200,200, 'pink');
    makeCreature(600,200, 'white');
    makeCreature(600,600);
    makeCreature(200,600);
    makeCreature(400,400, 'yellow');

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}


function makeCreature (x,y, fillColor){
 
    // your creature:
    fill('fillColor')
    circle(x, y, 300)

    fill('black')
    ellipse(x - 50, y - 50, 30, 40)
    ellipse(x + 50, y - 50, 30, 40)
}

function mouseDragged(){
    makeCreature(mouseX,mouseY, 'pink');
}

