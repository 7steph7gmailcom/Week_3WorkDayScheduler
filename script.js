var UserAssign = $("#taskAssignment");
// console.log(UserAssign);

var saveButton = $(".saveBtn");

// function saveTask() {
//   var userData = {
//     UserAssign: comment.value.trim(),
//   };
//   // setItem to get data to persist. JSON to translate data.
//   localStorage.setItem(UserAssign, JSON.stringify("taskAssignment"));
//   document.querySelector(UserAssign).value;
// }

function init() {
  // Display day of the week for user
  $("#currentDay").text(moment().format("MMM Do, YYYY"));
  // Color codes blocks of time
  setInterval(colorTimeBlock, 60000);
  console.log(colorTimeBlock);

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
