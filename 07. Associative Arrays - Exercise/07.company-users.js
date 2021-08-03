function solve(input) {
    let companies = {};
    for (let line of input) {
        line = line.split(" -> ");
        let company = line[0];
        let employee = line[1];
        if (companies.hasOwnProperty(company)) {
            companies[company].add(employee);
        } else {
            companies[company] = new Set();
            companies[company].add(employee);
        }
    }
    let sortedCompanies = Object.entries(companies);
    sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, employees] of sortedCompanies) {
        console.log(company);
        for (let employee of employees) {
            console.log(`-- ${employee}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )