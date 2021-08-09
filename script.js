// var age = 45;
// console.log(age);

// var today = moment();
// $("#currentDay").text(today.format("MMM Do, YYYY"));

var inputToDoEl = "ToDo";
console.log(inputToDoEl);

var saveEl = "save";
console.log(saveEl);

function handleFormSubmit(event) {
  event.preventDefault();

  var calendarEvent = $("inputToDoEl");
  console.log("calendarEvent");
}

saveEl.on("submit", handleFormSubmit);
