function dungeonestDark(input) {
    let rooms = input[0].split("|");
    let currentRoom = "";
    let currentRoomContents = [];
    let item = "";
    let points = 0;
    let health = 100;
    let coins = 0;
    let isWinner = true;
    for (let i = 0; i < rooms.length; i++) {
        currentRoom = rooms[i];
        currentRoomContents = currentRoom.split(" ");
        item = currentRoomContents[0];
        points = Number(currentRoomContents[1]);
        if (item == "potion") {
            if (health == 100) {
                console.log("You healed for 0 hp.");
                console.log("Current health: 100 hp.");
                continue;
            } else {
                if ((health + points) > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    console.log("Current health: 100 hp.");
                    health = 100;
                } else {
                    health += points;
                    console.log(`You healed for ${points} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
            }
        } else if (item == "chest") {
            coins += points;
            console.log(`You found ${points} coins.`);
        } else {
            health -= points;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                isWinner = false;
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }
    if (isWinner) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");