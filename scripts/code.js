function calculateBMI() {
   let height = parseFloat(document.getElementById("height").value);
   let weight = parseFloat(document.getElementById("weight").value);


   let bmi = weight / (height * height);

   
   let results = document.getElementById("results");
   results.innerHTML = "Your BMI is: " + bmi.toFixed(2);
   if (bmi < 18.5) {
     results.innerHTML += "<br>You are underweight.";
   } else if (bmi >= 18.5 && bmi < 25) {
     results.innerHTML += "<br>You have a normal weight.";
   } else if (bmi >= 25 && bmi < 30) {
     results.innerHTML += "<br>You are overweight.";
   } else {
     results.innerHTML += "<br>You are obese.";
   }
 }