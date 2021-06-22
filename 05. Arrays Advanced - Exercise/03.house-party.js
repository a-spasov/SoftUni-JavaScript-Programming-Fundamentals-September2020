function houseParty(guestList) {
    let name = "";
    let indexOfName = 0;
    let commandLine = "";
    let commandArray = [];
    let guests = [];
    for (let i = 0; i < guestList.length; i++) {
        commandLine = guestList[i];
        commandArray = commandLine.split(" ");
        name = commandArray[0];
        if (commandLine.includes("not")) {
            if (guests.includes(name)) {
                indexOfName = guests.indexOf(name);
                indexOfName = Number(indexOfName);
                guests.splice(indexOfName, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        }
    }
    for (let guest of guests) {
        console.log(guest);
    }
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);