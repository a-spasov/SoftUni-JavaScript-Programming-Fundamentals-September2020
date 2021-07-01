function solve(input) {
    let bombs = input.pop();
    bombs = bombs.split(" ");
    let bunnies = input;
    let hangar = [];
    let hangarRow = [];
    let damage = 0;
    let bunnyWithBomb = 0;
    let indexOfRow = 0;
    let indexOfBunny = 0;
    let killedBunnies = 0;
    for (let row of bunnies) {
        row = row.split(" ");
        row = row.map(Number)
        hangar.push(row);
    }
    for (let bomb of bombs) {
        bomb = bomb.split(",");
        bomb = bomb.map(Number);
        indexOfRow = bomb[0];
        indexOfBunny = bomb[1];
        hangarRow = hangar[indexOfRow];
        bunnyWithBomb = hangarRow[indexOfBunny];
        damage += bunnyWithBomb;
        hangarRow[indexOfBunny] = 0;
        killedBunnies++;
        if (indexOfBunny == 0) {
            hangarRow[indexOfBunny+1] -= bunnyWithBomb;
            if (hangarRow[indexOfBunny+1] < 0) {
                hangarRow[indexOfBunny+1] = 0;
            }
        }
        if (indexOfBunny == hangarRow.length - 1) {
            hangarRow[indexOfBunny-1] -= bunnyWithBomb;
            if (hangarRow[indexOfBunny-1] < 0) {
                hangarRow[indexOfBunny-1] = 0;
            }
        }
        if (indexOfBunny > 0 && indexOfBunny < hangarRow.length - 1) {
            hangarRow[indexOfBunny-1] -= bunnyWithBomb;
            if (hangarRow[indexOfBunny-1] < 0) {
                hangarRow[indexOfBunny-1] = 0;
            }       
            hangarRow[indexOfBunny+1] -= bunnyWithBomb;
            if (hangarRow[indexOfBunny+1] < 0) {
                hangarRow[indexOfBunny+1] = 0;
            }
        }
        if (indexOfRow == 0) {
            hangarRow = hangar[indexOfRow+1];
            if (indexOfBunny == 0) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny+1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny+1] < 0) {
                    hangarRow[indexOfBunny+1] = 0;
                }
            }
            if (indexOfBunny == hangarRow.length - 1) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny-1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny-1] < 0) {
                    hangarRow[indexOfBunny-1] = 0;
                }
            }
            if (indexOfBunny > 0 && indexOfBunny < hangarRow.length - 1) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny-1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny-1] < 0) {
                    hangarRow[indexOfBunny-1] = 0;
                }       
                hangarRow[indexOfBunny+1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny+1] < 0) {
                    hangarRow[indexOfBunny+1] = 0;
                }
            }
        }
        if (indexOfRow == hangar.length-1) {
            hangarRow = hangar[indexOfRow-1];
            if (indexOfBunny == 0) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny+1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny+1] < 0) {
                    hangarRow[indexOfBunny+1] = 0;
                }
            }
            if (indexOfBunny == hangarRow.length - 1) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny-1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny-1] < 0) {
                    hangarRow[indexOfBunny-1] = 0;
                }
            }
            if (indexOfBunny > 0 && indexOfBunny < hangarRow.length - 1) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                } 
                hangarRow[indexOfBunny-1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny-1] < 0) {
                    hangarRow[indexOfBunny-1] = 0;
                }       
                hangarRow[indexOfBunny+1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny+1] < 0) {
                    hangarRow[indexOfBunny+1] = 0;
                }
            }
        }
        if (indexOfRow > 0 && indexOfRow < hangar.length-1){
            hangarRow = hangar[indexOfRow+1];
            if (indexOfBunny == 0) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny+1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny+1] < 0) {
                    hangarRow[indexOfBunny+1] = 0;
                }
            }
            if (indexOfBunny == hangarRow.length - 1) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny-1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny-1] < 0) {
                    hangarRow[indexOfBunny-1] = 0;
                }
            }
            if (indexOfBunny > 0 && indexOfBunny < hangarRow.length - 1) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny-1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny-1] < 0) {
                    hangarRow[indexOfBunny-1] = 0;
                }       
                hangarRow[indexOfBunny+1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny+1] < 0) {
                    hangarRow[indexOfBunny+1] = 0;
                }
            }
            hangarRow = hangar[indexOfRow-1];
            if (indexOfBunny == 0) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny+1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny+1] < 0) {
                    hangarRow[indexOfBunny+1] = 0;
                }
            }
            if (indexOfBunny == hangarRow.length - 1) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                }
                hangarRow[indexOfBunny-1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny-1] < 0) {
                    hangarRow[indexOfBunny-1] = 0;
                }
            }
            if (indexOfBunny > 0 && indexOfBunny < hangarRow.length - 1) {
                hangarRow[indexOfBunny] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny] < 0) {
                    hangarRow[indexOfBunny] = 0;
                } 
                hangarRow[indexOfBunny-1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny-1] < 0) {
                    hangarRow[indexOfBunny-1] = 0;
                }       
                hangarRow[indexOfBunny+1] -= bunnyWithBomb;
                if (hangarRow[indexOfBunny+1] < 0) {
                    hangarRow[indexOfBunny+1] = 0;
                }
            }
        }
    }
    for (let i = 0; i < hangar.length; i++) {
        hangarRow = hangar[i];
        for (let j = 0; j < hangarRow.length; j++) {
            if (hangarRow[j] > 0) {
                killedBunnies++;
                damage += hangarRow[j];
            }
        }
    }
    console.log(damage);
    console.log(killedBunnies);
}
solve(['5 10 15 20',
'10 10 10 10',
'10 15 10 10',
'10 10 10 10',
'2,2 0,1']
)