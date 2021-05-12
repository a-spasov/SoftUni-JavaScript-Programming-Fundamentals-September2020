function daysOfWeek(day) {
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (week[day - 1] == undefined) {
        console.log("Invalid day!");
    } else {
        console.log(week[day - 1]);
    }
}
daysOfWeek("a");