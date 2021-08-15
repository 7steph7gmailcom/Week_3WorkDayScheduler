var UserAssign = $("#taskAssignment");
// console.log(UserAssign);

var saveButton = $(".saveBtn");

var colorTimeBlocks = $(".time-blocks");
console.log(colorTimeBlocks);

// Display day of the week for user
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// function saveTask() {
//   var userData = {
//     UserAssign: comment.value.trim(),
//   };
//   // setItem to get data to persist. JSON to translate data.
//   localStorage.setItem(UserAssign, JSON.stringify("taskAssignment"));
//   document.querySelector(UserAssign).value;
// }

setInterval(colorTimeBlocks, 60000);

$(".time-block").each(function () {
  var sectionId = $(this).attr("id");
  $("#" + sectionId + " textarea").text(
    localStorage.getItem(moment().format("DDDYYYY") + sectionId)
  );
});
$("saveBtn").on("click", handleSave);
}

// var saveUserInput = $(".col -md-10 description");
// console.log(saveUserInput);

