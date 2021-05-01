function vacation(groupOfPeople, typeOfGroup, day) {
    let totalPrice = 0;
    switch (typeOfGroup) {
        case "Students":
            if ( day == "Friday" ) {
                totalPrice = 8.45*groupOfPeople;
            }
            if ( day == "Saturday" ) {
                totalPrice = 9.80*groupOfPeople;
            }
            if ( day == "Sunday") {
                totalPrice = 10.46*groupOfPeople;
            }
            if (groupOfPeople >= 30) {
                totalPrice = 0.85*totalPrice;
            }
            break;
        case "Business":
            if (groupOfPeople >= 100) {
                groupOfPeople -= 10;
            }
            if ( day == "Friday" ) {
                totalPrice = 10.90*groupOfPeople;
            }
            if ( day == "Saturday" ) {
                totalPrice = 15.60*groupOfPeople;
            }
            if ( day == "Sunday") {
                totalPrice = 16*groupOfPeople;
            }
            break;
        case "Regular":
            if ( day == "Friday" ) {
                totalPrice = 15*groupOfPeople;
            }
            if ( day == "Saturday" ) {
                totalPrice = 20*groupOfPeople;
            }
            if ( day == "Sunday") {
                totalPrice = 22.50*groupOfPeople;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice = 0.95*totalPrice;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation();