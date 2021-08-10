var age = 45;
console.log(age);

// Display day of the week for user
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var UserAssign = "#taskAssignment";
console.log(UserAssign);

// saveButton.on

// Display User input in planner and presist data

// function userInput(type, message) {
//   UserAssign.textContent = message;
// }

// function saveButton('click', event) {
//   event.preventDefault();

// document.querySelector("#taskAssignment").value;

//   localStorage.setItem(UserAssign, block)
//   localStorage.setItem(UserAssign, JSON.stringify(user)
// };
document.querySelector("#taskAssignment").value;

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  var saveButton = "#saveButton";
  console.log(saveButton);
});

localStorage.setItem("taskAssignment", JSON.stringify(taskAssignment));
