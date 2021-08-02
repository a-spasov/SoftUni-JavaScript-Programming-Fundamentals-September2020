function piccolo(input) {
    let parkingLot = new Map();
    for (let car of input) {
        car = car.split(", ");
        if (car[0] == "IN") {
            parkingLot.set(car[1], 1);
        } else {
            parkingLot.delete(car[1]);
        }
    }
    if (parkingLot.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        let keys = Array.from(parkingLot.keys());
        keys.sort((a, b) => a.localeCompare(b));
        for (let key of keys) {
            console.log(key);
        }
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);