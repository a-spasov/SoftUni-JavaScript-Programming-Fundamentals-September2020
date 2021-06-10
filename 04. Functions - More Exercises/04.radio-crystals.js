function solve(input) {
    let finalThickness = input[0];
    let currentThickness = input[1];
    let maxDecrement = 0;
    let procedure = 0;
    let currentProcedure = 0;
    let counterPerOperation = 0;
    let procedureData = [];
    console.log(`Processing chunk ${currentThickness} microns`);
    procedureData = findProcedure();
    currentProcedure = procedureData[0];
    currentThickness = procedureData[1]; 
    procedure = currentProcedure;
    counterPerOperation++;
    while(currentThickness > finalThickness) {
        procedureData = findProcedure();
        currentProcedure = procedureData[0];
        currentThickness = procedureData[1];
        if (procedure == currentProcedure) {
            counterPerOperation++;
        } else {
            switch (procedure) {
                case 0:
                    console.log(`Cut x${counterPerOperation}`);
                    break;
                case 1:
                    console.log(`Lap x${counterPerOperation}`);
                    break;
                case 2:
                    console.log(`Grind x${counterPerOperation}`);
                    break;
                case 3:
                    console.log(`Etch x${counterPerOperation}`);
                    break;
            }
            counterPerOperation = 0;
        }
        procedureData = findProcedure();
        currentProcedure = procedureData[0];
        currentThickness = procedureData[1];
    }

    function findProcedure() {
        let proceduresResults = [];
        let indexOfProcedure = 0;
        let result = [];
        let currentDecrement = 0;
        proceduresResults.push(cut(currentThickness));
        proceduresResults.push(lap(currentThickness));
        proceduresResults.push(grind(currentThickness));
        proceduresResults.push(etch(currentThickness));
        maxDecrement = 0;
        for (let i = 0; i < proceduresResults.length; i++) {
            currentDecrement = currentThickness - proceduresResults[i];
            if (maxDecrement < currentDecrement) {
                maxDecrement = currentDecrement;
            }
        }
        while (currentThickness - maxDecrement < finalThickness) {
            indexOfProcedure = proceduresResults.indexOf(currentThickness - maxDecrement);
            proceduresResults.splice(indexOfProcedure, 1);
            maxDecrement = 0;
            for (let j = 0; j < proceduresResults.length; j++) {
                currentDecrement = currentThickness - proceduresResults[j];
                if (maxDecrement < currentDecrement) {
                    maxDecrement = currentDecrement;
                }  
            }
        }
        indexOfProcedure = proceduresResults.indexOf(currentThickness - maxDecrement);
        result.push(indexOfProcedure);
        result.push(currentThickness - maxDecrement);
        return result;      
    }
    function cut(thickness) {
        thickness = thickness/4;
        return thickness;
    }
    function lap(thickness) {
        thickness = 0.8*thickness;
        return thickness;
    }
    function grind(thickness) {
        thickness -= 20;
        return thickness;
    }
    function etch(thickness) {
        thickness -= 2;
        return thickness;
    }
    function xRay() {
        return true;
    }
    function transportAndWash(thickness) {
        thickness = Math.floor(thickness);
        console.log("Transporting and washing");
        return thickness;
    }
}
solve([1375, 50000]);