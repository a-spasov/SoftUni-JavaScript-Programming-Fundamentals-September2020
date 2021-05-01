function multiplicationTable(numbA) {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        result = numbA*i;
        console.log(`${numbA} X ${i} = ${result}`);
    }
}
multiplicationTable(10);