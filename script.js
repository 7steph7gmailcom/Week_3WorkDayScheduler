$(init);

function init() {
  // Display day of the week + time for user
  $("#currentDay").text(moment().format("LLL"));
  // Color codes blocks of time 60000=60secs=1min
  colorsTimeBlock();
  setInterval(colorsTimeBlock, 60000);

  $(".time-block").each(function () {
    var sectionId = $(this).attr("id");

    $("#" + sectionId + " textarea").text(
      localStorage.getItem(moment().format("DDDYYYY") + sectionId)
    );
  });
  // Save button links with user "click"
  $(".saveBtn").on("click", handleSave);
}

// For calendar to know what time it is and display color
function colorsTimeBlock() {
  $(".time-block").each(function () {
    var textUserInput = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));

    $(this).removeClass("Past,Present,Future");

    if (textUserInput < currentHour) {
      $(this).addClass("past");
    } else if (textUserInput > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present", "red");
    }
  });
}

function handleSave(event) {
  var hourId = $(this).parent().attr("id");
  // Saves items to local storage from user input in time blocks
  localStorage.setItem(
    moment().format("DDDYYYY") + hourId,
    $("#" + hourId + " textarea").val()
  );
}
