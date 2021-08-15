// var UserAssign = $("#taskAssignment");
// // console.log(UserAssign);

// var saveButton = $(".saveBtn");

// function saveTask() {
//   var userData = {
//     UserAssign: comment.value.trim(),
//   };
//   // setItem to get data to persist. JSON to translate data.
//   localStorage.setItem(UserAssign, JSON.stringify("taskAssignment"));
//   document.querySelector(UserAssign).value;
// }

$(init);

function init() {
  // Display day of the week for user
  $("#currentDay").text(moment().format("MMM Do, YYYY"));
  textAreaColor();
  // Color codes blocks of time 60000=60secs=1min
  setInterval(colorTimeBlock, 60000);
  // console.log(colorTimeBlock);
  $(".time-block").each(function () {
    var sectionId = $(this).attr("id");
    $("#" + sectionId + " textarea").text(
      localStorage.getItem(moment().format("DDDYYYY") + sectionId)
    );
  });
  $(".saveBtn").sectionId("click", saveUserInput);
}

// Set blocks to recognize time: past, present, future
function textAreaColor() {
  $(".time-block").each(PastPresentFuture);
}

// Set blocks to recognize time: past, present, future
function PastPresentFuture() {
  var textAreaHour = parseInt($(this).attr("id").replace("hour-", ""));
  var currentTextAreaHour = parseInt(moment().format("H"));
  $(this).removeClass("past present future");
  if (textAreaHour < currentTextAreaHour) {
    $(this).addClass("past");
  } else if (textAreaHour > currentTextAreaHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
}

function saveUserInput(event) {
  var textAreaId = $(this).parseInt().attr("id");

  localStorage.setItem(
    moment().format("DDDYYYY") + textAreaId,
    $("#" + hourId + " textarea").val()
  );
}
