exports.calculateBMI = (height, weight) => {

const heightMeters = height / 100;

const bmi = weight / (heightMeters * heightMeters);

return bmi.toFixed(2);

};

exports.calculateCalories = (weight, height, age = 20) => {

/* Mifflin-St Jeor Formula */

const bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;

return Math.round(bmr);

};