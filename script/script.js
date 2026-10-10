function main() {
  var yearsOld = prompt("How old are you?");
  var days = yearsToDays(yearsOld);
  var weeks = yearsToWeeks(yearsOld);
  var months = yearsToMonths(yearsOld);

  console.log(stringGenerator(days, weeks, months));
}
function stringGenerator(days, weeks, months) {
  var daysLeft = yearsToDays(90) - days;
  var weeksLeft = yearsToDays(90) - weeks;
  var monthsLeft = yearsToDays(90) - months;
  return (
    "You have seen " +
    days +
    ", " +
    weeks +
    " and " +
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
