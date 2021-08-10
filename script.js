var UserAssign = $("#taskAssignment");
// console.log(UserAssign);

var saveButton = $(".saveBtn");

// Display day of the week for user
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

function saveTask() {
  var userData = {
    UserAssign: comment.value.trim(),
  };
  // setItem to get data to persist. JSON to translate data.
  localStorage.setItem(UserAssign, JSON.stringify("taskAssignment"));
  document.querySelector(UserAssign).value;
}

saveButton.on("click", function (event) {
  event.preventDefault();
  console.log("youve clicked the button");
});
