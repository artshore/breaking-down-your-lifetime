function main() {
  var yearsOld = prompt("How old are you?");
  var [days, weeks, months] = yearsSpent(yearsOld);
  var [daysLeft, weeksLeft, monthsLeft] = yearsLeft(yearsOld);

  console.log(
    stringGenerator(days, weeks, months, daysLeft, weeksLeft, monthsLeft),
  );
}

function yearsSpent(yearsOld) {
  var days = yearsToDays(yearsOld);
  var weeks = yearsToWeeks(yearsOld);
  var months = yearsToMonths(yearsOld);
  return [days, weeks, months];
}

function yearsLeft(yearsOld) {
  var daysLeft = yearsToDays(90) - yearsToDays(yearsOld);
  var weeksLeft = yearsToWeeks(90) - yearsToWeeks(yearsOld);
  var monthsLeft = yearsToMonths(90) - yearsToMonths(yearsOld);
  return [daysLeft, weeksLeft, monthsLeft];
}

function stringGenerator(days, weeks, months, daysLeft, weeksLeft, monthsLeft) {
  return (
    "You have seen " +
    days +
    " days , " +
    weeks +
    " weeks and " +
    months +
    " months in your life. You have " +
    daysLeft +
    " days, " +
    weeksLeft +
    " weeks and " +
    monthsLeft +
    " months left to live!"
  );
}

function yearsToDays(yearsOld) {
  return yearsOld * 365;
}

function yearsToWeeks(yearsOld) {
  return yearsOld * 52;
}

function yearsToMonths(yearsOld) {
  return yearsOld * 12;
}
main();
