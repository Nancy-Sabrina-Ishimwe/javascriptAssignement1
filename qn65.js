/*Switch Case:
Calculator Switch:
Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.

Day of Week:
Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.

Grade System:
Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.

Traffic Light:
Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, 3 for green).

Month Name:
Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.

Simple Menu:
Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.

Currency Converter:
Build a currency converter that converts between different currencies using a switch case. Users should input the amount, source currency, and target currency.

Shape Area:
Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.

Season Detector:
Create a program that takes a month as input and outputs the corresponding season (spring, summer, fall, winter) using a switch case.
*/

function calculator(num1, operator, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 != 0) {
                return num1 / num2;
            } else {
                return 'Error: Division by zero is not allowed';
            }
        default:
            return 'Error: Invalid operator';
    }
 }
 console.log(calculator(5, '+', 3)); // Outputs: 8

 function dayOfWeek(dayNumber) {
    switch(dayNumber) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            return 'Invalid day number';
    }
 }
 console.log(dayOfWeek(1)); // Outputs: Monday

 
 function gradeSystem(score) {
    switch(true) {
        case (score >= 90):
            return 'A';
        case (score >= 80):
            return 'B';
        case (score >= 70):
            return 'C';
        case (score >= 60):
            return 'D';
        default:
            return 'F';
    }
 }
 console.log(gradeSystem(85)); // Outputs: B

 function trafficLight(lightNumber) {
    switch(lightNumber) {
        case 1:
            return 'Red';
        case 2:
            return 'Yellow';
        case 3:
            return 'Green';
        default:
            return 'Invalid light number';
    }
 }
 console.log(trafficLight(1)); // Outputs: Red
 function monthName(monthNumber) {
    switch(monthNumber) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return 'Invalid month number';
    }
 }
 console.log(monthName(1)); // Outputs: January

 function simpleMenu(option) {
    switch(option) {
        case '1':
            return 'Option 1 selected';
        case '2':
            return 'Option 2 selected';
        case '3':
            return 'Option 3 selected';
        default:
            return 'Invalid option';
    }
 }
 console.log(simpleMenu('1')); // Outputs: Option 1 selected

 
 function currencyConverter(amount, sourceCurrency, targetCurrency) {
    // Assume conversion rates for simplicity
    let conversionRates = {
        'USD': { 'EUR': 0.85, 'GBP': 0.76 },
        'EUR': { 'USD': 1.18, 'GBP': 0.89 },
        'GBP': { 'USD': 1.31, 'EUR': 1.11 }
    };
    return amount * conversionRates[sourceCurrency][targetCurrency];
 }
 console.log(currencyConverter(100, 'USD', 'EUR')); // Outputs: 85

 
 function shapeArea(shape, ...dimensions) {
    switch(shape) {
        case 'circle':
            return Math.PI * dimensions[0] ** 2;
        case 'square':
            return dimensions[0] ** 2;
        case 'triangle':
            return 0.5 * dimensions[0] * dimensions[1];
        default:
            return 'Invalid shape';
    }
 }
 console.log(shapeArea('circle', 5)); // Outputs: 78.53981633974483

 
 function seasonDetector(month) {
    switch(month) {
        case 12:
        case 1:
        case 2:
            return 'Winter';
        case 3:
 
    }}
