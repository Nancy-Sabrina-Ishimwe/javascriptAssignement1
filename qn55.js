//Write a function that checks if a given year is a leap year.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
   }
   
   console.log(isLeapYear(2000)); // Outputs: true
   console.log(isLeapYear(2001)); // Outputs: false
   