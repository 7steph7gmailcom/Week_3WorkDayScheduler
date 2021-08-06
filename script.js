// var age = 45;
// console.log(age);

var today = moment();
console.log(today);

// var "currentDay" = today.format("[Today is]dddd");
$("#currentDay").text(today.format("MMM Do YYYY"));

// var currentDay = "weekDay";
// var weekDay = moment("[Today is] dddd");

// // 2. What is the day of the week today?
// var dayWeek = today.format("[Today is] dddd")
// $("#2a").text(dayWeek);
