var age = 45;
console.log(age);

// Display day of the week for user
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var UserAssign = "#taskAssignment";
console.log(UserAssign);

var saveButton = "#SaveBtn";
console.log(saveButton);

saveButton.on

// Display User input in planner and presist data

function userInput(type, message) {
  UserAssign.textContent = message;
}

function saveButton('click', event) {
  event.preventDefault();

  var subMIT = document.querySelector("#taskAssignment").value;

  localStorage.setItem(UserAssign);
};
