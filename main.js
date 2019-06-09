function daysInMonth(month, year) {
        if (!Number.isInteger(year)
            || !Number.isInteger(month)
            || month > 12
        ) {
            throw new SyntaxError("not a positive integer");
        }

        return new Date(year, month, 0).getDate();
}


console.log(daysInMonth(5, 2019)); // 31
console.log(daysInMonth(5, '2019')); // exception
console.log(daysInMonth(2, 2020)); // 29
console.log(daysInMonth(2.2, 2020)); // exception
console.log(daysInMonth(2, 2100)); // 28
console.log(daysInMonth(13, 2100)); // exception