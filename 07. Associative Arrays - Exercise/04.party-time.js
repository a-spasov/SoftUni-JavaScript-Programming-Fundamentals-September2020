function partyTime(input) {
    let partyStarted = false;
    let guests = {};
    guests["vip"] = [];
    guests["regular"] = [];
    for (let guest of input) {
        if (guest == "PARTY") {
            partyStarted = true;
            continue;
        }
        if (partyStarted) {
            if (guests.vip.includes(guest)) {
                let guestIndex = guests.vip.indexOf(guest);
                guests.vip.splice(guestIndex, 1);
            }
            if (guests.regular.includes(guest)) {
                let guestIndex = guests.regular.indexOf(guest);
                guests.regular.splice(guestIndex, 1);
            }
            continue;
        }
        let firstChar = guest[0];
        firstChar = Number(firstChar);
        if (firstChar >=0 && firstChar <=9) {
            guests.vip.push(guest)
        } else {
            guests.regular.push(guest);
        }
    }
    console.log(guests.vip.length + guests.regular.length);
    guests.vip.forEach(x => console.log(x));
    guests.regular.forEach(x => console.log(x));
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);