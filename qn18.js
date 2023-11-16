/*Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
    How to calculate Body Mass Index:
    BMI = weight(kg) / (height(m) x height(m))*/


function calculateBMI(weight, height) {
   var bmi = weight / (height * height);
   var status = '';

   if (bmi < 18.5) {
       status = 'Underweight';
   } else if (bmi >= 18.5 && bmi <= 24.9) {
       status = 'Normal weight';
   } else if (bmi >= 25 && bmi <= 29.9) {
       status = 'Overweight';
   } else if (bmi >= 30 && bmi <= 34.9) {
       status = 'Moderately Overweight';
   } else if (bmi >= 35 && bmi <= 39.9) {
       status = 'Severely Overweight';
   } else {
       status = 'Morbidly Overweight';
   }

   return { bmi: bmi, status: status };
}

var result = calculateBMI(70, 1.75);
console.log(result); // Outputs: { bmi: 22.857142857142858, status: 'Normal weight' }
