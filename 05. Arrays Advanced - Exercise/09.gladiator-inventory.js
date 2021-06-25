function solve(input) {
    let inventory = input.shift();
    let itemIndex = 0;
    let itemUpgrade = [];
    inventory = inventory.split(" ");
    for (let command of input) {
        command = command.split(" ");
        if (command.includes("Buy")) {
            if (inventory.includes(command[1])) {
                continue;
            } else {
                inventory.push(command[1]);
            }
        }
        if (command.includes("Trash")) {
            if (inventory.includes(command[1])) {
                itemIndex = inventory.indexOf(command[1]);
                inventory.splice(itemIndex, 1);
            } else {
                continue;
            }
        }
        if (command.includes("Repair")) {
            if (inventory.includes(command[1])) {
                itemIndex = inventory.indexOf(command[1]);
                inventory.splice(itemIndex, 1);
                inventory.push(command[1]);
            } else {
                continue;
            }
        }
        if (command.includes("Upgrade")) {
            itemUpgrade = command[1].split("-");
            if (inventory.includes(itemUpgrade[0])) {
                itemIndex = inventory.indexOf(itemUpgrade[0]);
                inventory.splice(itemIndex + 1, 0, itemUpgrade.join(":"));
            } else {
                continue;
            }
        }
    }
    console.log(inventory.join(" "));
}
solve (['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)