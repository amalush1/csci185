function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let y = 0;
    let width = 5;
    let x1 = 500;
    let x2 = 700;
    let x3 = 900;
    while(y<=680){
        circle(x1, y ,width);
        circle(x2, y ,width);
        circle(x3, y ,width);
        
        y+= 10;
        width+= 10;

        x1 -= 5;
        x2 -= 0;
        x3 += 5;
    }


   
    
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    // drawGrid(canvasWidth, canvasHeight);
}
