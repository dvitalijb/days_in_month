function daysInMonth(month, year) {
    try {
        if (!Number.isInteger(year)
            || !Number.isInteger(month)
            || month > 12
        ) {
            throw new SyntaxError("not a positive integer");
        }

        return new Date(year, month, 0).getDate();
    } catch(e) {
        console.log(e);
    }
}
