function area(sideA, sideB, sideC) {
    let semiPerimeter = (sideA + sideB + sideC)/2;
    let triangleArea = Math.sqrt(semiPerimeter*(semiPerimeter - sideA)*(semiPerimeter - sideB)*(semiPerimeter - sideC));
    console.log(triangleArea);
}
area();