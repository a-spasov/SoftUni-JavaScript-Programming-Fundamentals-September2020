function solve(input) {
    let addressBook = {};
    let sortedAddressBook = [];
    for (let line of input) {
        let [name, address] = line.split(":");
        addressBook[name] = address;
    }
    sortedAddressBook = Object.entries(addressBook);
    sortedAddressBook.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [name, address] of sortedAddressBook) {
        console.log(`${name} -> ${address}`);
    }
}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);