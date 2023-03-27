function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("white");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    

    // https://p5js.org/reference/#/p5/rect
    fill('brown')
    rect(72, 300, 55, 550);

   // https://p5js.org/reference/#/p5/circle
   fill("green")
   circle(100, 300, 200);

   // https://p5js.org/reference/#/p5/rect
   fill('grey')
   rect(300, 400, 500, 400);


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}