function pyramid(base, increment) {
    let stone = 0;
    let gold = 0;
    let lapisLazuli = 0;
    let marble = 0;
    let height = 0;
    for (let i = base; i >= 1; i = i - 2) {
        height++;
        if (i - 2 < 1) {
            gold += i**2;
        } else {
            stone += (i - 2)**2;
            if (height % 5 == 0) {
                lapisLazuli += (i**2) - (i - 2)**2;
            } else {
                marble += (i**2) - (i - 2)**2;
            }
        }  
    }
    height *= increment;
    console.log(`Stone required: ${Math.ceil(stone*increment)}`);
    console.log(`Marble required: ${Math.ceil(marble*increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli*increment)}`);
    console.log(`Gold required: ${Math.ceil(gold*increment)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
pyramid(11, 0.75);