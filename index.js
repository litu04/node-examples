// var rect = {
//     area: (x,y) => x*y,
//     perimeter: (x,y) => (2*(x+y))
// };

const rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectangle for l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log(`Rectangle dimensions should be greater than Zero: l=${l} and b=${b}`);
    } else {
        console.log("The area of the rectangle is " + rect.area(l, b));
        console.log("The Perimeter of the rectangle is " + rect.perimeter(l, b));
    }
}

solveRect(2, 5);
solveRect(4, 6);
solveRect(7, 0);
solveRect(-3, 3);